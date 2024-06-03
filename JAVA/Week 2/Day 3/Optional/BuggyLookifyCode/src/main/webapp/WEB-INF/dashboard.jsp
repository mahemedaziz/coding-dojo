<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="/css/style.css">
<title>Lookify!</title>
</head>
<body>
	<br>
	<br>
	<table>
		<thead>
			<tr>
				<th><a class="in-line" href="/songs/new">Add New</a></th>
				<th><a class="in-line" href="/top-ten">Top Ten</a></th>
				<th>
					<form class="in-line" action="/search" method="get">
						<input class="in-line" type="text" id="artist" name="artist"
							placeholder="Search" /> <input class="in-line" type="submit"
							value="Submit" />
					</form>

				</th>
			</tr>
		</thead>
	</table>
	<hr>
	<table>
		<thead>
			<tr>
				<th>Name</th>
				<th>Rating</th>
				<th>Action</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="song" items="${songs}">
				<tr>
					<td><a href="/songs/${song.id}"><c:out
								value="${song.title}" /></a></td>
					<td><c:out value="${song.rating}" /></td>
					<td><a href="/songs/${song.id}/delete">delete</a></td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
</body>
</html>
