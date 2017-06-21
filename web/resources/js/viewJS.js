/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var chart;
$(document).ready(function() {   
    
    $('#slider').hide();
    chart= new Highcharts.chart('container', {
        chart: {                        
        },
        title: {
            text: 'Profiling Demo'
        },
        subtitle: {
            text: 'time series analysis'
        },
        xAxis: {
            categories: ['0 min','10 min','30 min','60 min','120 min'],
            max:4,
            min:0
            },
        yAxis: {
            tickInterval:2
        },
        series: [{
            data: [],
            name:'user'
        }]
     });
     
    //get the json as string 
    var json = $('#json').val();
    
    //convert string to json
    var obj = JSON.parse(json);
    
    //sort json data
    obj.sort( function(a,b){ return a.score - b.score; } );
    
    //if the analysis result is retrieved
    if($('#signal').val()==="1"){
        //use arrayCovert to convert element into float
        $('#slider').show();
        var arrayConvert = new Array();
        var array = $('#userValues').val().split(",");
        for (var i=0;i<5;i++){
            arrayConvert.push(parseFloat(array[i]));
        }
        chart.series[0].update({        
            data: arrayConvert,                      
            type: 'line'
        });
        
        var minScore = parseFloat($('#minScore').val());
        var maxScore = parseFloat($('#maxScore').val());
        $("#slider").slider({step: 0.01, min: minScore, max: maxScore,range: true, value: [4, 5]}).on('slideStop', function(){
            var thresholdValue = new Array();
            thresholdValue = $('#slider').data('slider').getValue();
            var min = parseFloat(thresholdValue[0]);
            var max = parseFloat(thresholdValue[1]); 
           
            $("#myTable tr").each(function(){
                var score = $(this).find("td").eq(6).text();
                
                if (score===""){
                    
                }else if (score>max||score<min){
                        $(this).hide();
                    }else{
                        $(this).show();
                        var selectedPoints = new Array();
                            for(var i=1;i<6;i++){
                                var value = $(this).find("td").eq(i).text();
                                if(value != ''){
                                    value = parseFloat(value);
                                    selectedPoints.push([i-1,value]);
                                }else{
                                    continue;
                                }
                            }
                       
                            chart.addSeries({
                                data:selectedPoints,
                                name:$(this).find("td").eq(0).text(),
                                type:'line'
                            });
                    }
            });
        }).on('slideStart',function(){
            if (chart.series.length>1){
                while(chart.series.length > 0){
                    chart.series[1].remove();
                }
            }
            else{
                
            }
        });;
        
        $("#tableTitle").html("#Result List#");
        document.getElementById("showTable").style.display = "block";       
    }    
    
    //show the top 10 results
    for (var i=0; i<10; i++){
        var values = new Array();
        values.push(parseFloat(obj[i].value1));
        values.push(parseFloat(obj[i].value2));
        values.push(parseFloat(obj[i].value3));
        values.push(parseFloat(obj[i].value4));
        values.push(parseFloat(obj[i].value5));
        chart.addSeries({
                name: obj[i].name,
                data: values,
                type: 'line'
            });
        }
    
    //make table    
    var tr;
    for (var i = 0; i < json.length; i++) {
        tr = $('<tr/>');
        tr.append("<td>" + obj[i].name + "</td>");
        tr.append("<td>" + obj[i].value1 + "</td>");
        tr.append("<td>" + obj[i].value2 + "</td>");
        tr.append("<td>" + obj[i].value3 + "</td>");
        tr.append("<td>" + obj[i].value4 + "</td>");
        tr.append("<td>" + obj[i].value5 + "</td>");
        tr.append("<td>" + obj[i].score + "</td>");
        $('#myTable').append(tr);
    };
});