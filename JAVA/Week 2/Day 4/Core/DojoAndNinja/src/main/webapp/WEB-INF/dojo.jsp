<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Create Dojo</title>
</head>
<body>
<div class="container mt-3">

<h1>New Dojo</h1>
	<form:form action="/dojos/processDojo" method="post" modelAttribute="dojo">
		<form:errors path="*" />
		<p>
			<form:label path="name">Dojo Name</form:label>
			<form:input path="name" />
		</p>
		<input type="submit" value="Submit" />
	</form:form>
</div>
</body>
</html>
