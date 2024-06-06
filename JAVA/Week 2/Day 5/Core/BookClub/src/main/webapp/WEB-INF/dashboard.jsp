<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!-- for Bootstrap CSS -->
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
	integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
	crossorigin="anonymous">
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Project Dashboard</title>
</head>
<body>
	<div class="container mt-3">
		<h1>Welcome, ${user.firstName}</h1>
		<a href="/logout">Logout</a> <br /> <a href="/books/new">+ Add a
			Book to my shelf! </a>

		<!-- All projects excluding logged-in user's projects -->
		<div class="table">
			<h2>All Projects</h2>
			<table class="table">
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Author Name</th>
						<th>Posted By</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach items="${allBooks}" var="oneBook">

						<tr>
							<td>${oneBook.id}</td>
							<td><a href="/books/${oneBook.id}"> ${oneBook.title}</a></td>
							<td>${oneBook.author}</td>
							<td>${oneBook.posted.firstName}</td>

						</tr>

					</c:forEach>
				</tbody>
			</table>
		</div>



	</div>
</body>
</html>
