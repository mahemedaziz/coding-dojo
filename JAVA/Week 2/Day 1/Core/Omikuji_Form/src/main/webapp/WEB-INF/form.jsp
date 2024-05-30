<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />

<%@ taglib prefix = "fmt" uri = "http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<div class="container mt-3">

<h1>Send an Omikuji !</h1>
<form action="processForm" method="POST">
<div class="form-group">
<label>Pick any number from 5 to 25 </label>
   <input class="form-control" name='number' type="number">
   
<label>Enter the name of any city </label>
   <input class="form-control" name='city' >
   
<label>Pick the name of person  </label>
   <input class="form-control" name='person'>
   
<label>Enter professional endeavor or hobby  </label>
   <input class="form-control" name='hobby' >
   
<label>Enter any type of living thing.  </label>
   <input class="form-control" name='thing' >
   
<label>Say something nice to someone : </label>
    <textarea class="form-control" name='compliment' rows="3"></textarea>
    <br />
<p> Send and show a friend  </p>
</div>
<button type="submit" class="btn btn-primary">Send</button>
</form>
</div>
</body>
</html>