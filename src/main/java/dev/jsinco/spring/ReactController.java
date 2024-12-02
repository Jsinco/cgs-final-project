package dev.jsinco.spring;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ReactController {

    @RequestMapping(value = {
            "/",
            "/academics",
            "/beyondhcc",
            "/career",
            "/tech",
            "/cites"
    })
    public String forwardToIndex(HttpServletRequest request) {
        return "forward:index.html";
    }
}
