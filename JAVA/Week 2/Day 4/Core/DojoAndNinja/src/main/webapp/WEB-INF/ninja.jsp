<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Create Ninja</title>
</head>
<body>
<div class="container mt-3">

<h1>New Ninja</h1>
	 <form:form method="POST" modelAttribute="ninja" action="/ninjas/processNinja">
            <div class="form-group">
                <label for="firstName">First Name</label>
                <form:input path="firstName" class="form-control" id="firstName" />
                <form:errors path="firstName" class="text-danger" />
            </div>
            
            <div class="form-group">
                <label for="lastName">Last Name</label>
                <form:input path="lastName" class="form-control" id="lastName" />
                <form:errors path="lastName" class="text-danger" />
            </div>
            
            <div class="form-group">
                <label for="age">Age</label>
                <form:input path="age" class="form-control" id="age" />
                <form:errors path="age" class="text-danger" />
            </div>
            
            <div class="form-group">
                <label for="dojo">Dojo</label>
                <form:select path="dojo.id" class="form-control" id="dojo">
                    <form:options items="${dojos}" itemValue="id" itemLabel="name" />
                </form:select>
                <form:errors path="dojo.id" class="text-danger" />
            </div>
            
            <button type="submit" class="btn btn-primary">Create Ninja</button>
        </form:form>
</div>
</body>
</html>
