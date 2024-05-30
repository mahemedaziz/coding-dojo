<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!-- for Bootstrap CSS -->
<!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"> -->
<!-- <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" /> -->
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" type="text/css" href="/css/style.css">
<title>Ninja Gold Game</title>
</head>
<body>
	<div class="container mt-3">
		<p>
			Your Gold :
			<c:out value="${gold}"></c:out>
		</p>
		<br />
		<form action="/reset" method="post">
        <input type="submit" value="Reset">
        </form>
        <br />
        
		<table>
			<tbody>
				<tr>
					<td>
						<h3>Farm</h3>
						<p>(earn 10-20 gold)</p>
						<form action="/" method="post">
							<input class="button" type="submit" name="farm" value="Find Gold" />
						</form>
					</td>
					<td>
						<h3>Cave</h3>
						<p>(earn 5-10 gold)</p>
						<form action="/" method="post">
							<input class="button" type="submit" name="cave" value="Find Gold" />
						</form>
					</td>
					<td>
						<h3>House</h3>
						<p>(earn 2-5 gold)</p>
						<form action="/" method="post">
							<input class="button" type="submit" name="house" value="Find Gold" />
						</form>
					</td>
					<td>
						<h3>Quest</h3>
						<p>(earn -50-50 gold)</p>
						<form action="/" method="post">
							<input class="button" type="submit" name="quest" value="Find Gold" />
						</form>
					</td>
				</tr>
			</tbody>
		</table>
<h3>Activities</h3>
<iframe src="/activities" title="Activities Iframe"></iframe>
	</div>
</body>
</html>