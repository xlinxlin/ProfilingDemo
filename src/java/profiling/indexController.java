/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package profiling;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 *
 * @author yan
 */

@Controller
@RequestMapping("/")
public class indexController {
    @RequestMapping(method = RequestMethod.GET)public String home(ModelMap map) {
        return "index";
    }
}
