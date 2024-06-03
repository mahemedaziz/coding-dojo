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
<h2>Edit Expense</h2>
<a class="btn btn-primary" href="/">Home</a>
		<form:form action="/travels/${travel.id}" method="post"
			modelAttribute="travel">
			<input type="hidden" name="_method" value="put">
			<div>
				<form:label path="name">Expense Name :</form:label>
				<br>
				<form:errors path="name" class="text-danger" />
				<form:input path="name" style="width:250px;" />
			</div>
			<div>
				<form:label path="vendor">Vendor:</form:label>
				<br>
				<form:errors path="vendor" class="text-danger" />
				<form:input path="vendor" style="width:250px;" />
			</div>
			<div>
				<form:label path="amount">Amount:</form:label>
				<br>
				<form:errors path="amount" class="text-danger" />
				<form:input path="amount" style="width:250px;" type="number" />
			</div>
			<div>
				<form:label path="description">Description:</form:label>
				<br>
				<form:errors path="description" class="text-danger" />
				<form:textarea path="description" rows="3" style="width:250px;" />
			</div>
			<div>
				<input type="submit" value="Submit" />
			</div>
		</form:form>
</div>
</body>
</html>