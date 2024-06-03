<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!-- Formatting (dates) -->
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true"%>
<html>
<head>
<link rel="stylesheet" type="text/css" href="/css/style.css">
<title>Add Song</title>
</head>
<body>
<div class="in-line"><h2 class="float-left">Add Song</h2><span class="float-right"><a href="/dashboard">Dashboard</a></span></div>

<form:form action="/songs/new" method="post" modelAttribute="song">

	<table>
	    <thead>
	    	<tr>
	            <td class="float-left">Title:</td>
	            <td class="float-left">
	            	<form:errors path="title" class="text-danger"/>
					<form:input class="input" path="title"/>
	            </td>
	        </tr>
	        <tr>
	            <td class="float-left">Artist:</td>
	            <td class="float-left">
	            	<form:errors path="artist" class="text-danger"/>
					<form:input class="input" path="artist"/>
	            </td>
	        </tr>
	        <tr>
	        	<td class="float-left">Rating (1-10):</td>
	            <td class="float-left">
					<form:errors path="rating" class="text-danger"/>
					<form:input class="input" type="number" path="rating"/>
	            </td>
	        </tr>
	        <tr>
	        	<td colspan=2><input class="input" class="button" type="submit" value="Submit"/></td>
	        </tr>
	    </thead>
	</table>


	
	

</form:form>
</body>
</html>