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
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="/css/style.css">
<title>Song Info</title>
</head>
<body>
<br>
<br>
<p class="float-right"><a href="/dashboard">Dashboard</a></p>

<table>
    <thead>
    	<tr>
            <td class="float-left">Title:</td>
            <td class="float-left"><c:out value="${song.title}"></c:out></td>
        </tr>
        <tr>
            <td class="float-left">Artist:</td>
            <td class="float-left"><c:out value="${song.artist}"></c:out></td>
        </tr>
        <tr>
            <td class="float-left">Rating (1-10):</td>
            <td class="float-left"><c:out value="${song.rating}"></c:out></td>
        </tr>
    </thead>
</table>
<br>
<a href="/songs/${song.id}/delete">Delete</a>
</body>
</html>