<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Profiling Demo</title>
        <spring:url value="/resources/css/bootstrap.css" var="bootstrap" />
        <link href="${bootstrap}" rel="stylesheet" />
        <spring:url value="/resources/css/view.css" var="view" />
        <link href="${view}" rel="stylesheet" />
        <spring:url value="/resources/css/bootstrap.min.css" var="bootstrapmin" />
        <link href="${bootstrapmin}" rel="stylesheet" />
        <spring:url value="/resources/js/highcharts.js" var="highchartsJS" />
        <script src="${highchartsJS}"></script>
        <spring:url value="/resources/js/jquery-3.2.1.min.js" var="jQueryJS" />
        <script src="${jQueryJS}"></script>
        <spring:url value="/resources/js/viewJS.js" var="viewJS" />
        <script src="${viewJS}"></script>
        <spring:url value="/resources/js/bootstrap-slider.min.js" var="sliderJS" />
        <script src="${sliderJS}"></script>
        <spring:url value="/resources/css/bootstrap-slider.min.css" var="slidercss" />
        <link href="${slidercss}" rel="stylesheet" />       
    </head>

    <body>
        <nav class="navbar navbar-inverse"></nav>
        <div id="container"></div>
       
        <input  id="json" type="hidden" name="json" value=${json}>
        <input  id="userValues" type="hidden" name="userValues" value=${userValues}> 
        <input  id="signal" type="hidden" name="signal" value=${signal}>
        <input  id="minScore" type="hidden" name="minScore" value=${minScore}>
        <input  id="maxScore" type="hidden" name="maxScore" value=${maxScore}>
       
        <form action="${pageContext.request.contextPath}/view" method="post">
            <table align="center">
                <tr>
                    <th style="text-align:center">1</th>
                    <th style="text-align:center">2</th>
                    <th style="text-align:center">3</th>
                    <th style="text-align:center">4</th>
                    <th style="text-align:center">5</th>
                    <th style="text-align:center">&#10004;</th>
                </tr>
                <tr>
                    <td><input class="form-control" type="number" id="value1" name="value1" required="required" step="0.00000000001" /></td>
                    <td><input class="form-control" type="number" id="value2" name="value2" required="required" step="0.00000000001" /></td>
                    <td><input class="form-control" type="number" id="value3" name="value3" required="required" step="0.00000000001" /></td>
                    <td><input class="form-control" type="number" id="value4" name="value4" required="required" step="0.00000000001" /></td>
                    <td><input class="form-control" type="number" id="value5" name="value5" required="required" step="0.00000000001" /></td>
                    <td><input class="btn btn-default" type="submit" value="Submit"></td>
                </tr>
            </table>
        </form>
        <p></p>
        <p class="bg-info" id="tableTitle" name="tabletitle"></p>
        <center><input id="slider" name="slider"></center> 
        <p></p>
        <div id="showTable" name="show Table" style="display:none">
        <table class="table table-striped table-bordered" id="myTable" name="myTable">
            <tr>
                <th style="text-align:center">name</th>
                <th style="text-align:center">value1</th>
                <th style="text-align:center">value2</th>
                <th style="text-align:center">value3</th>
                <th style="text-align:center">value4</th>
                <th style="text-align:center">value5</th>
                <th style="text-align:center">score</th>
             </tr>
        </table>
        </div>
        <div class="footer">
            yan.zhou@xlin.me
        </div>
    </body>
</html>
