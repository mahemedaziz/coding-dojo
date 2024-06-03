<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!-- for Bootstrap CSS -->
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
	integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
	crossorigin="anonymous">
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
		<h1>Save Travels</h1>
		<table class="table table-striped table-bordered">
			<thead>
				<tr>
					<th>Expense</th>
					<th>Vendor</th>
					<th>Amount</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="travel" items="${travels}">
					<tr>
						<td>
						<a href="/travels/${travel.id}"><c:out value="${travel.name}" /></a>
						
						</td>
						<td><c:out value="${travel.vendor}" /></td>
						<td><c:out value="${travel.amount}" /></td>

						<td>
							<div class="d-flex">
								<a href="/travels/edit/${travel.id}">edit</a> <br />

								<form action="/travels/${travel.id}" method="post" class="ml-5">
									<input type="hidden" name="_method" value="delete" /> 
									<input type="submit" class="btn btn-danger" value="Delete" />
								</form>
							</div>
						</td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
		<br>
		<h2>Add an expense</h2>
		<form:form action="/addTravel" mode="post" modelAttribute="travel">
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
				<form:input path="amount" style="width:250px;" type="double" />
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
</div>
</body>
</html>