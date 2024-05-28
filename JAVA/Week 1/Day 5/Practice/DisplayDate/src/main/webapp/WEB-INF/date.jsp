<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" type="text/css" href="/css/style.css">

<!-- For any Bootstrap that uses JS -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<title>Date</title>
<script type="text/javascript" src="/js/app.js"></script>
</head>
<body>
<h1>Jour : <c:out value="${day}" /></h1>
<h1>Mois : <c:out value="${month}" /></h1>
<h1>Année : <c:out value="${year}" /></h1>
<h1>Date : <c:out value="${date}" /></h1>
<h1>Heure : <c:out value="${time}" /></h1>

</body>
</html>