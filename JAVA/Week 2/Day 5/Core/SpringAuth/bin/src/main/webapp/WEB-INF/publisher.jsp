<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Demo JSP</title>
<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/main.css" />
<!-- For any Bootstrap that uses JS -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>

</head>
<body>
	<div class="container">
		<h1>Publishers</h1>
		<p>${pubs }</p>
		<!-- 		Display all Books -->
		<table class="table">
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Location</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach items="${pubs }" var="onePub">
				<tr>
				<td>${onePub.id}</td>
				<td><a href="/publishers/${onePub.id }"> ${onePub.name} </a></td>
				<td>${onePub.location}</td>
				</tr>
				</c:forEach>
			</tbody>
		</table>
		<hr>
		
		<!-- 		Create a Book Form -->
		<form:form action="/publishers/processPub" method="post"
			modelAttribute="publisher">
			<form:errors path="*" />
			<p>
				<form:label path="name">Name</form:label>

				<form:input path="name" />
			</p>
			<p>
				<form:label path="location">Location</form:label>

				<form:input path="location" />
			</p>

			<button>Submit</button>
		</form:form>
	</div>
</body>
</html>
