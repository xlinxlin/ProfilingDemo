/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package profiling;
//import java.util.HashMap;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.ui.ModelMap;

import java.util.List;
//import java.util.Map;
//import java.util.Random;
import javax.servlet.http.HttpServletRequest;
//import org.json.simple.JSONObject;
//import org.json.JSONArray;  
import org.json.JSONObject;
//import org.json.JSONException;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.ResponseBody;
//import profiling.FeatureJDBCTemplate;

/**
 *
 * @author yan
 */

@Controller
public class viewController {
    
    @RequestMapping("/view")    
    public String processing(HttpServletRequest request, ModelMap model) {
        
        //get user inputs
        double userValue1 = Double.valueOf(request.getParameter("value1"));
        double userValue2 = Double.valueOf(request.getParameter("value2"));
        double userValue3 = Double.valueOf(request.getParameter("value3"));  
        double userValue4 = Double.valueOf(request.getParameter("value4"));  
        double userValue5 = Double.valueOf(request.getParameter("value5"));
        
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        FeatureJDBCTemplate FeatureJDBCTemplate = (FeatureJDBCTemplate)context.getBean("FeatureJDBCTemplate");
        List<Feature> features = FeatureJDBCTemplate.listFeatures();
        
        //create 100 random records
        /*for (int i=0;i<100;i++){
            Random randomName = new Random();
            int randomInt = randomName.nextInt(10000);
            String recordName="P"+randomInt;
            double minX = -5.0;
            double maxX = 5.0;
            Random rand = new Random();
            double[] recordValues = new double[5];
            for (int i=0;i<5;i++){
                recordValues[i]=rand.nextDouble() * (maxX - minX) + minX;
            }
            FeatureJDBCTemplate.create(recordName, recordValues[0],recordValues[1],recordValues[2],recordValues[3],recordValues[4]);
      }*/
        
        JSONObject json = new JSONObject();
        String sUserValues = userValue1+","+userValue2+","+userValue3+","+userValue4+","+userValue5;
        String sJson="";
        double maxScore = 0.0;
        double minScore = 100.0;
        
        for (Feature record : features) {
            
            //compute score by using Euclidean distance
            double score = 
                    (Math.pow(userValue1-record.getValue1(),2))+(Math.pow(userValue2-record.getValue2(),2))+(Math.pow(userValue3-record.getValue3(),2))+
                    (Math.pow(userValue4-record.getValue4(),2))+(Math.pow(userValue5-record.getValue5(),2));
            score = Math.sqrt(score);
            
            if(score < minScore){
                minScore = score;
            }
            if(score > maxScore){
                maxScore = score;
            }
            
            String convertValue1 = String.valueOf(record.getValue1());
            String convertValue2 = String.valueOf(record.getValue2());
            String convertValue3 = String.valueOf(record.getValue3());
            String convertValue4 = String.valueOf(record.getValue4());
            String convertValue5 = String.valueOf(record.getValue5());
            String convertScore = String.valueOf(score);
            json.put("name", record.getName());
            json.put("value1",convertValue1);
            json.put("value2",convertValue2);
            json.put("value3",convertValue3);
            json.put("value4",convertValue4);
            json.put("value5",convertValue5);
            json.put("score",convertScore);
            sJson = sJson+json.toString()+",";            
       }
       
        sJson = "["+sJson.substring(0,sJson.length()-1)+"]";
        model.addAttribute("json", sJson);
        model.addAttribute("userValues", sUserValues);
        model.addAttribute("signal", "1");
        model.addAttribute("minScore", minScore);
        model.addAttribute("maxScore", maxScore);
    
    return "index";  
    }     
}