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
</head>
<body>

<h1>Update a Book</h1>
	<!-- 		Update a Book Form -->
	<form:form action="/books/${book.id }" method="post" modelAttribute="book">
		<input type="hidden" name="_method" value="put">
		<form:errors path="*" />
		<p>
			<form:label path="title">Title</form:label>

			<form:input path="title" />
		</p>
<!-- 		<p> -->
<%-- 			<form:label path="author">Author</form:label> --%>

<%-- 			<form:input path="author" /> --%>
<!-- 		</p> -->

		<p>
			<form:label path="pages">Pages</form:label>

			<form:input type="number" path="pages" />
		</p>
		<input type="submit" value="Submit" />
	</form:form>
</body>
</html>
