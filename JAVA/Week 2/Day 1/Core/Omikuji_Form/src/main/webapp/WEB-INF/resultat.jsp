<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!-- for Bootstrap CSS -->
<!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"> -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />

<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<div class="container mt-3">
		<h1>Here's Your Omikiji !</h1>

		<h2>
			In
			<c:out value="${number}"></c:out>
			year, you will live in
			<c:out value="${city}"></c:out>
			with
			<c:out value="${person}"></c:out>
			as your roommate ,
			<c:out value="${hobby}"></c:out>
			for a living . <br /> the next time you see a
			<c:out value="${thing}"></c:out>
			,you will have good luck . <br /> Also ,
			<c:out value="${compliment}"></c:out>
			. <br /> <br /> <a href="/omikuji">Home</a>


		</h2>


	</div>
</body>
</html>