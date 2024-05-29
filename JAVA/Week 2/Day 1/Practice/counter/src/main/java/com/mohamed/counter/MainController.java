package com.mohamed.counter;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.servlet.http.HttpSession;

@Controller
public class MainController {
	@RequestMapping("/")
	public String index(HttpSession session) {
		Integer count = 0;
		if (session.getAttribute("count") == null) {
			session.setAttribute("count", 0);
		} else {
			count = (Integer) session.getAttribute("count");
			count++;
			session.setAttribute("count", count);
		}
		return "index.jsp";
	}

	@RequestMapping("/counter")
	public String counter() {
		return "counter.jsp";
	}

	@RequestMapping("/incrementBy2")
	public String incrementBy2(HttpSession session) {
		Integer count = (Integer) session.getAttribute("count");
		if (count == null) {
			count = 0;
		}
		count += 2;
		session.setAttribute("count", count);
		return "incrementBy2.jsp";
	}

	// Redirect to the counter page after reset
	@RequestMapping("/reset")
	public String reset(HttpSession session) {
		session.setAttribute("count", 0);
		return "redirect:/counter"; 
	}

}
