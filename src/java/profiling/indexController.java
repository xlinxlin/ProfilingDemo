package profiling;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * This is the Index Controller class.
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
