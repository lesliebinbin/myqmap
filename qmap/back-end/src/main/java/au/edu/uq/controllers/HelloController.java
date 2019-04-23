package au.edu.uq.controllers;

import au.edu.uq.configs.ClojureConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @Autowired
    ClojureConfig clojureConfig;

    @RequestMapping("/")
    public String sayHello() {
        return (String) clojureConfig.getClojureFunc("au.edu.uq.core", "hello-from-clojure").invoke();
    }

    @RequestMapping("/excel")
    public String testExcel() {
        return (String) clojureConfig
                .getClojureFunc("au.edu.uq.utils.excel-reader", "read-excel")
                .invoke("static/seat_plan.xlsx");
    }
}
