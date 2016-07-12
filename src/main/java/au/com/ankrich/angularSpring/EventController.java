package au.com.ankrich.angularSpring;

import au.com.ankrich.angularSpring.model.Event;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by arichharia on 12/07/2016.
 */

@RestController
@ComponentScan(value = "au.com.ankrich.angularSpring")
public class EventController {

    @Autowired
    ObjectMapper objectMapper;

    @RequestMapping(value = "/events", method = RequestMethod.GET)
    public Map<String, Object> showEvents(){

        Map<String , Object> model = new HashMap<>();


        model.put("id", "5" );
        model.put("name", "All hands meet");
        model.put("description", "company meeting");
        model.put("venue" , "360 Collins St");
        model.put("date", "28 Sep");

        return model;

    }

        @RequestMapping("/user")
        public Principal user(Principal user) {
            return user;
        }

    }


