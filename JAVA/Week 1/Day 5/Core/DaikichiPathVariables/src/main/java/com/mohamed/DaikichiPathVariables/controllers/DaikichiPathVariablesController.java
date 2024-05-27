package com.mohamed.DaikichiPathVariables.controllers;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/daikichi")

public class DaikichiPathVariablesController {
	@RequestMapping("/{action}/{town}")
	public String travelString(@PathVariable("action") String action, @PathVariable("town") String town) {
		return " Congratulation ! You will soon " + action + " to " + town + " .";
	}

	@RequestMapping("{count}")
	public String lotto(@PathVariable("count") Integer count) {
		if (count % 2 == 0) {
            return "You will take a grand journey in the near future, but be wary of tempting offers.";
		}
        return "You have enjoyed the fruits of your labor but now is a great time to spend time with family and friends.";
	}

}
