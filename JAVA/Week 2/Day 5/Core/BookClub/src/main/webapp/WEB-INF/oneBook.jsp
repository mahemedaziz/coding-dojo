<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- Import de la bibliothèque JSTL -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!-- Import du CSS de Bootstrap -->
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
<title>Project Details</title>
</head>
<body>
	<div class="container mt-3">
		<h1>Project Details</h1>
		<a href="/books">back to the shelves</a> <br /> <br />
		<c:if test="${book.posted.id == user_id}">
			<h3>You read ${book.title} and here are your thoughts:</h3>
		</c:if>
		<c:if test="${book.posted.id != user_id}">
			<h3>${book.posted.firstName}
				read ${book.title} by ${book.author} <br /> here are
				${book.posted.firstName}'s thoughts:
			</h3>
		</c:if>
		<hr />
		${book.description}
		<hr />

		<c:if test="${book.posted.id.equals(user_id)}">
			<div class="d-flex justify-content-between">
				<a href="/books/${book.id}/edit">
					<button class="btn btn-primary">Edit</button>
				</a> <br /> <br />
				<form action="/books/delete/${book.id}" method="post">
					<input type="hidden" name="_method" value="delete" /> <input
						type="submit" class="btn btn-danger" value="Delete" />
				</form>
			</div>
		</c:if>

	</div>
</body>
</html>
