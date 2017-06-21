/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 *  This file is part of Fusion.
 *  Copyright (C) 2013 CeBiTec, Bielefeld University
 * 
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 * 
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 * 
 *  You should have received a copy of the GNU General Public License
 *  along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
//var userPoints = new Array();

// Map that stores the chart for each tab
var chartMap = {}; // Initialize empty map
//var nextTab = 1;
// Function will be processed at page loading
$(document).ready(function() {

    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'clusterplot1',
            //renderTo: 'result',
            animation: false,
            zoomType: 'x',
            type: 'scatter',
            events: {
                click: function(e) {
                    //if($('#signal').val()==0){
                        var i = 0,
                        dataExistSignal = 0,
                        dataInsertSignal = 0;
                        dataIndex = 0,
                        x = Math.round(e.xAxis[0].value),
                        y = e.yAxis[0].value;
                        var newDataSet = new Array();
                        if(chart.series[0].data == ''){
                            newDataSet.push([x,y]);
                            countPoints += 1;
                            chart.series[0].setData(newDataSet);
                        }else{
                            do{
                                if(chart.series[0].data[i].x == x){
                                    dataExistSignal = 1;
                                    dataIndex = i;
                                }
                                i += 1;
                            }while(i<chart.series[0].data.length);
                            i = 0;
                            if (dataExistSignal == 1){
                                chart.series[0].data[dataIndex].update(y);
                            }else{
                                countPoints += 1;
                                do{
                                    if(x<chart.series[0].data[i].x && dataInsertSignal==0){
                                        newDataSet.push([x,y]);
                                        newDataSet.push([chart.series[0].data[i].x,chart.series[0].data[i].y]);
                                        dataInsertSignal = 1;
                                    }else{
                                        newDataSet.push([chart.series[0].data[i].x,chart.series[0].data[i].y]);
                                    }
                                    i += 1;
                                }while(i<chart.series[0].data.length);
                                if(dataInsertSignal == 0){
                                    newDataSet.push([x,y]);
                                }
                                if(countPoints == 5){
                                    chart.series[0].update({
                                        type:'spline'
                                    });
                                }
                                chart.series[0].setData(newDataSet);
                            //countPoints = 0;
                            }
                        }
                    //}
                }      
            }
        },

        xAxis: {
            categories: ['0 min','10 min','30 min','60 min','120 min'],
            max:4,
            min:0
        },
    
        yAxis: {
            tickInterval:2
        },

        plotOptions: {
            series: {
                cursor: 'ns-resize',
                point: {
                    events: {
                        drag: function (e) {
                       
                            $('#drag').html(
                                //$('#container').html(
                                'Dragging <b>' + this.series.name + '</b>, <b>' + this.category + '</b> to <b>' + Highcharts.numberFormat(e.newY, 2) + '</b>');
                        },
                        drop: function () {
                            $('#drop').html(
                                //$('#container').html(
                                'In <b>' + this.series.name + '</b>, <b>' + this.category + '</b> was set to <b>' + Highcharts.numberFormat(this.y, 2) + '</b>');
                        }        
                    }
                },
                stickyTracking: false
            },
            column: {
                stacking: 'normal'
            }
        },

        tooltip: {
            yDecimals: 2
        },

        series: [{
            data: [],
            draggableY: true,
            draggableX: false,
            name:'User'
        }]

    });

    chartMap[1] = chart;

    /*$('#set-value').submit(function () {
        countPoints = 0;
        var newDataSet = new Array();
        var i = 1;
        do{
            if($('#x'+i).val()!= ''){
                newDataSet.push([i-1,parseFloat($('#x'+i).val())]);
                countPoints += 1;
            }
            i += 1;
        }while (i<6);
        if(countPoints == 5){
            chart.series[0].update({
                type:'spline'
            });
        }else{
            chart.series[0].update({
                type:'scatter'
            });
        }
        chart.series[0].setData(newDataSet);
 
        return false;
    });*/

    //$('#sl1').hide();
    var setTab = 1;
    chart.yAxis[0].update({
        max:Math.ceil($('#maxYAxis').val())
    });
    chart.yAxis[0].update({
        min:Math.floor($('#minYAxis').val())
    });
    
    var uP = $('#sUserPoints').val();
    //alert(up);
 
    var sF = $('#sortFeatures').val();
  
    var userPoints = new Array();
    userPoints = uP.split('|');
    for(i=0;i<5;i++){
        userPoints[i] = parseFloat(userPoints[i]);
    }

    //if($('#signal').val()==1){
        
        //var maxScore = parseFloat($("#datatable1 tbody tr").find("td").eq(8).text());
        //var minScore = parseFloat($("#datatable1 tbody tr").find("td").eq(9).text());
        //$('#sl1').slider({
        $('#sl1').slider({
            //min: 0,
            //max: 20,
            //value: [(maxScore-minScore)/2-0.3,(maxScore-minScore)/2+0.3]
            value: [10,15]
        }
        ).ready(function(){
            var thresholdValue = new Array();
            thresholdValue = $('#sl1').data('slider').getValue();
            //var min = parseFloat($("#datatable1 tbody tr").find("td").eq(8).text());
            //var max = parseFloat($("#datatable1 tbody tr").find("td").eq(9).text()); 
            //$("tr").children("td.1").each(function(){
            //$( "tr" ).find( "td" ).eq( 1 ).each(function(){
            //$("td:eq(1)").each(function(){
            /*$("tbody tr").each(function(){
                //var score = $(this).text();
                var score = $(this).find("td").eq(1).text();
                //alert(score);
                if (score>max||score<min){
                    //$(this).parent().hide();
                    $(this).hide();
                }else{
                    //$(this).parent().show();
                    $(this).show();
                }
            });*/
        }).on('slideStop', function(ev){
            //alert($("#datatable1 tbody tr").find("td").eq(8).text());
            //alert("stop");
            var thresholdValue = new Array();
            thresholdValue = $('#sl1').data('slider').getValue();
            var min = parseFloat(thresholdValue[0]);
            var max = parseFloat(thresholdValue[1]); 
            //alert("min "+min+" max "+max);
            $("#datatable1 tbody tr").each(function(){
            //$( "tr" ).find( "td" ).eq( 1 ).each(function(){
            //$("#datatable1 tr td:eq(1)").each(function(){
                //if (document.getElementById('count'+$(this).find("td").eq(7).text()).checked)
                var score = $(this).find("td").eq(1).text();
                //alert(score);
                //alert("h"+score);
                if (score>max||score<min){
                    //$(this).parent().hide();
                    $(this).hide();
                }else{
                    //$(this).parent().show();
                    $(this).show();
                }
            });
        });
            
        chart.series[0].update({
            type:'line'
        });
        chart.series[0].setData(userPoints);
        //alert("now the data length is "+chart.series[0].data.length);
        //$("tr:eq(20)").nextAll().hide();
        $("td").click(function(){
           alert("testest"); 
           //$(this).hide();
        });
        $("td").click(function(){
            alert("test");
            var selectedPoints = new Array();
            for(i=3;i<8;i++){
                var value = $(this).children(':nth-child('+i+')').text();
                if(value != ''){
                    value = parseFloat(value);
                    selectedPoints.push([i-3,value]);
                }else{
                    continue;
                }
            }
            //alert(selectedPoints);
            chart.addSeries({
                data:selectedPoints,
                name:$(this).children(':nth-child(1)').text(),
                type:'line'
            });
        })
    //}
});


// Function is called when a user clicks on the "New prototype" button...
$('#addNewTab').click(function (e) {
    //alert("Creating new plot...");
    //initiazation
    var nextTab = $('#clusterTabs li').size()+1;
    setTab = nextTab;
	
    // create the tab navigation...
    $('#clusterTabs').append('<li><a href="#tab'+nextTab+'" data-toggle="tab">Cluster '+nextTab+'</a></li>');
            
            
    // create the tab content...
    $('.tab-content').append('<div class="tab-pane" id="tab'+nextTab+'"></div>');
    $('#tab'+nextTab).append('<div id="tab'+nextTab+'chart" style="height: 300px"></div>');

    // make the new tab active
    $('#clusterTabs a:last').tab('show');
    var chart = new Highcharts.Chart({
        chart: {
            renderTo: "tab"+nextTab+"chart",
            animation: false,
            zoomType: 'x',
            type: 'scatter',
            events: {
                click: function(e) {
                    //if($('#signal').val()==0){
                        var i = 0,
                        dataExistSignal = 0,
                        dataInsertSignal = 0;
                        dataIndex = 0,
                        x = Math.round(e.xAxis[0].value),
                        y = e.yAxis[0].value;
                        var newDataSet = new Array();
                        if(chart.series[0].data == ''){
                            newDataSet.push([x,y]);
                            countPoints += 1;
                            chart.series[0].setData(newDataSet);
                        }else{
                            do{
                                if(chart.series[0].data[i].x == x){
                                    dataExistSignal = 1;
                                    dataIndex = i;
                                }
                                i += 1;
                            }while(i<chart.series[0].data.length);
                            i = 0;
                            if (dataExistSignal == 1){
                                chart.series[0].data[dataIndex].update(y);
                            }else{
                                countPoints += 1;
                                do{
                                    if(x<chart.series[0].data[i].x && dataInsertSignal==0){
                                        newDataSet.push([x,y]);
                                        newDataSet.push([chart.series[0].data[i].x,chart.series[0].data[i].y]);
                                        dataInsertSignal = 1;
                                    }else{
                                        newDataSet.push([chart.series[0].data[i].x,chart.series[0].data[i].y]);
                                    }
                                    i += 1;
                                }while(i<chart.series[0].data.length);
                                if(dataInsertSignal == 0){
                                    newDataSet.push([x,y]);
                                }
                                if(countPoints == 5){
                                    chart.series[0].update({
                                        type:'spline'
                                    });
                                }
                                chart.series[0].setData(newDataSet);
                                //countPoints = 0;
                            }
                        }
                    //}
                }
            }
        },

        xAxis: {
            categories: ['0 min','10 min','30 min','60 min','120 min'],
            max:4,
            min:0
        },

        yAxis: {
            tickInterval:2
        },

        plotOptions: {

            series: {
                cursor: 'ns-resize',
                point: {
                    events: {

                        drag: function (e) {

                            $('#drag').html(
                                //$('#container').html(
                                'Dragging <b>' + this.series.name + '</b>, <b>' + this.category + '</b> to <b>' + Highcharts.numberFormat(e.newY, 2) + '</b>');
                        },
                        drop: function () {
                            $('#drop').html(
                                //$('#container').html(
                                'In <b>' + this.series.name + '</b>, <b>' + this.category + '</b> was set to <b>' + Highcharts.numberFormat(this.y, 2) + '</b>');
                        }


                    }
                },
                stickyTracking: false
            },
            column: {
                stacking: 'normal'
            }
        },

        tooltip: {
            yDecimals: 2
        },

        series: [{
            data: [],
            draggableY: true,
            draggableX: false,
            name:'User'
        }]

    });
    
    ////////////new slider////////////////
    
    /////////////////new slider end///////////////////    
    
    chartMap[nextTab] = chart;
    
    chart.yAxis[0].update({
        max:Math.ceil($('#maxYAxis').val())
    });
    chart.yAxis[0].update({
        min:Math.floor($('#minYAxis').val())
    });
    
    

    //Create a new table...
    //alert("this is the "+nextTab);
    //$('#tab'+nextTab).append('<a class="btn" onclick="processVisualClustering(' + nextTab + ')" href="#">Process</a>');
    $('#tab'+nextTab).append('<a class="btn" onclick="processVisualClustering(' + nextTab + ')" href="#">Process</a>');
    //$('.tab-content').append('<div><table class="table table-striped table-hover" id="datatable'+nextTab+'"><thead><tr><th><spring:message code="feature.name"/></th><th>Score</th><th>Values</th></tr></thead><tbody></tbody</table></div>');
    //$('#tab'+nextTab).append('<form id="fm'+nextTab+'"><input id="sl'+nextTab+'" value=""  data-slider-step="0.1"  data-slider-orientation="horizontal" data-slider-selection="after"data-slider-tooltip="show"></form>');
    //$('#tab'+nextTab).append('<div><table class="table table-striped table-hover" id="datatable'+nextTab+'"><thead><tr><th><spring:message code="feature.name"/></th><th>Score</th><th>Value1</th><th>Value2</th><th>Value3</th><th>Value4</th><th>Value5</th><th>count</th><th>minScore</th><th>maxScore</th></tr></thead><tbody></tbody</table></div>');
        
/////////////////////////

/////////////////new slider
/*$('#sl'+nextTab).slider({
            min: 0,
            max: 20,
            value: [10,15]
        }
        ).ready(function(){
            var thresholdValue = new Array();
            thresholdValue = $('#sl'+nextTab).data('slider').getValue();
            var min = parseFloat(thresholdValue[0]);
            var max = parseFloat(thresholdValue[1]); 
            $("tbody tr").each(function(){
                var score = $(this).find("td").eq(1).text();
                if (score>max||score<min){
                    $(this).hide();
                }else{
                    $(this).show();
                }
            });
        }).on('slideStop', function(ev){
            var thresholdValue = new Array();
            thresholdValue = $('#sl'+nextTab).data('slider').getValue();
            var min = parseFloat(thresholdValue[0]);
            var max = parseFloat(thresholdValue[1]); 
            $("#datatable"+nextTab+" tbody tr").each(function(){
                var score = $(this).find("td").eq(1).text();
                if (score>max||score<min){
                    $(this).hide();
                }else{
                    $(this).show();
                }
            });
        });*/
/////////////////new slider
})


       
var countPoints = 0;
  
(function (Highcharts) {
    var addEvent = Highcharts.addEvent,
    each = Highcharts.each;

    function filterRange(newY, series, XOrY) {
        var options = series.options,
        dragMin = options['dragMin' + XOrY],
        dragMax = options['dragMax' + XOrY];

        if (newY < dragMin) {
            newY = dragMin;
        } else if (newY > dragMax) {
            newY = dragMax;
        }
        return newY;
    }

    Highcharts.Chart.prototype.callbacks.push(function (chart) {
        

        var container = chart.container,
        dragPoint,
        dragX,
        dragY,
        dragPlotX,
        dragPlotY;

        chart.redraw(); // kill animation (why was this again?)

        addEvent(container, 'mousedown', function (e) {
            var hoverPoint = chart.hoverPoint,
            options;

            if (hoverPoint) {
                options = hoverPoint.series.options;
                if (options.draggableX) {
                    dragPoint = hoverPoint;

                    dragX = e.pageX;
                    dragPlotX = dragPoint.plotX;
                }

                if (options.draggableY) {
                    dragPoint = hoverPoint;

                    dragY = e.pageY;
                    dragPlotY = dragPoint.plotY + (chart.plotHeight - (dragPoint.yBottom || chart.plotHeight));
                }

                // Disable zooming when dragging
                if (dragPoint) {
                    chart.mouseIsDown = false;
                }
            }
        });

        addEvent(container, 'mousemove', function (e) {
            if (dragPoint) {
                var deltaY = dragY - e.pageY,
                deltaX = dragX - e.pageX,
                newPlotX = dragPlotX - deltaX - dragPoint.series.xAxis.minPixelPadding,
                newPlotY = chart.plotHeight - dragPlotY + deltaY,
                newX = dragX === undefined ? dragPoint.x : dragPoint.series.xAxis.translate(newPlotX, true),
                newY = dragY === undefined ? dragPoint.y : dragPoint.series.yAxis.translate(newPlotY, true),
                series = dragPoint.series,
                proceed;

                newX = filterRange(newX, series, 'X');
                newY = filterRange(newY, series, 'Y');

                // Fire the 'drag' event with a default action to move the point.
                dragPoint.firePointEvent(
                    'drag', {
                        newX: newX,
                        newY: newY
                    },

                    function () {
                        proceed = true;
                        dragPoint.update([newX, newY], false);
                        chart.tooltip.refresh(chart.tooltip.shared ? [dragPoint] : dragPoint);
                        if (series.stackKey) {
                            chart.redraw();
                        } else {
                            series.redraw();
                        }
                    });

                // The default handler has not run because of prevented default
                if (!proceed) {
                    drop();
                }
            }
        });

        function drop(e) {
            if (dragPoint) {
                if (e) {
                    var deltaX = dragX - e.pageX,
                    deltaY = dragY - e.pageY,
                    newPlotX = dragPlotX - deltaX - dragPoint.series.xAxis.minPixelPadding,
                    newPlotY = chart.plotHeight - dragPlotY + deltaY,
                    series = dragPoint.series,
                    newX = dragX === undefined ? dragPoint.x : dragPoint.series.xAxis.translate(newPlotX, true),
                    newY = dragY === undefined ? dragPoint.y : dragPoint.series.yAxis.translate(newPlotY, true);

                    newX = filterRange(newX, series, 'X');
                    newY = filterRange(newY, series, 'Y');
                    dragPoint.update([newX, newY]);
                }
                dragPoint.firePointEvent('drop');
            }
            dragPoint = dragX = dragY = undefined;
        }
        addEvent(document, 'mouseup', drop);
        addEvent(container, 'mouseleave', drop);
    });
    ///////////////////////////////////////////////////////////
    
    ///////////////////////////////////////////////////////////
    
    var colProto = Highcharts.seriesTypes.column.prototype,
    baseDrawTracker = colProto.drawTracker;

    colProto.drawTracker = function () {
        var series = this;
        baseDrawTracker.apply(series);
        each(series.points, function (point) {
            point.graphic.attr(point.shapeArgs.height < 3 ? {
                'stroke': 'black',
                'stroke-width': 2,
                'dashstyle': 'shortdot'
            } : {
                'stroke-width': series.options.borderWidth,
                'dashstyle': series.options.dashStyle ||  'solid'
            });
        });
    };

})(Highcharts);
// End plugin

//var tabCount = 0;
//$('#process-profiling-button').onclick();

function processVisualClustering(tabCount) {
    
    var chart = chartMap[tabCount];
    
    //alert("data length is "+chart.series[0].data.length);
    alert(tabCount);
    var pArray = new Array();
    var i = 0;
    do{
        pArray.push(chart.series[0].data[i].x,chart.series[0].data[i].y);
        i += 1;
    }while(i<chart.series[0].data.length);
    var ss = pArray.join("|");
    //alert(ss);
    //$('#process-profiling-form input').val(ss);
    //$('#process-profiling-form').submit();
    
    
    //tabCount += 1;
    //alert("this is the "+tabCount);
    if(tabCount >1){
    //$('#tab'+tabCount).append('<a class="btn" onclick="processVisualClustering(' + tabCount + ')" href="#">Process</a>');
    //$('.tab-content').append('<div><table class="table table-striped table-hover" id="datatable'+nextTab+'"><thead><tr><th><spring:message code="feature.name"/></th><th>Score</th><th>Values</th></tr></thead><tbody></tbody</table></div>');
    //$('#tab'+tabCount).append('<form id="fm'+tabCount+'"><input id="sl'+tabCount+'" value=""  data-slider-step="0.1"  data-slider-orientation="horizontal" data-slider-selection="after"data-slider-tooltip="show"></form>');
    $('#tab'+tabCount).append('<form id="fm'+tabCount+'"><input type="checkbox" id="count'+tabCount+'1"  checked="checked" />1<input type="checkbox" id="count'+tabCount+'2"  checked="checked" />2<input type="checkbox" id="count'+tabCount+'3"  checked="checked" />3<input type="checkbox" id="count'+tabCount+'4"  checked="checked" />4<input type="checkbox" id="count'+tabCount+'5"  checked="checked" />5<input id="sl'+tabCount+'" value=""  data-slider-step="0.1"  data-slider-orientation="horizontal" data-slider-selection="after"data-slider-tooltip="show"></form>');
    $('#tab'+tabCount).append('<div><table class="table table-striped table-hover" id="datatable'+tabCount+'"><thead><tr><th><spring:message code="feature.name"/></th><th>Score</th><th>Value1</th><th>Value2</th><th>Value3</th><th>Value4</th><th>Value5</th><th>count</th><th>minScore</th><th>maxScore</th></tr></thead><tbody></tbody</table></div>');
    }
    var dataTable1 = $('#datatable'+tabCount).dataTable({
        
        //"sPaginationType": "bootstrap",
        //"bProcessing" : true,
        "sScrollY": "400px",
        "bScrollCollapse": true,
        //"bPaginate": false,
        "bJQueryUI": true,
        "aoColumnDefs": [
            { "sWidth": "10%", "aTargets": [ -1 ] }
        ],
        "bPaginate": false,
        "bLengthChange": false,
        "bFilter": true,
        "bSort": false,
        "bInfo": false,
        "bAutoWidth": false,
        "sAjaxSource" : contextpath + '/profiling/process?values=' + ss,
        /*"oLanguage": {
            "sLengthMenu": "_MENU_ &nbsp; entries per page",
            "sZeroRecords": "Sorry, but there are no entries to be displayed / matching your filter criteria.",
            "sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",
            "sInfoEmpty": "Showing 0 to 0 of 0 entries",
            "sSearch": "Filter entries: &nbsp;"
        },*/
        "aoColumns": [           
            { "mData": "featureName" }, 
            { "mData": "score" }, 
            //{ "mData": "values" },
            { "mData": "value1" },
            { "mData": "value2" },
            { "mData": "value3" },
            { "mData": "value4" },
            { "mData": "value5" },
            { "mData": "count" },
            { "mData": "minScore" },
            { "mData": "maxScore" }
            //{ "mData": "login" }, 
            //{ "mData": "message" }
        ],
        
        "sDom": "<'row'<'span6'l><'span6'f>r>t<'row'<'span6'i><'span6'p>>"
        
    });
  
    
    //alert($('#datatable'+tabCount+' tbody tr').find("td").eq(8).text());
    //createSlider(tabCount);
    //var urlString = contextpath + '/profiling/process?values=' + ss;
    //$.getJSON(urlString, function(data){
        //console.log(data);
        //alert(data.users[3].count);
    //});
    //var isChecked = document.getElementById('count1').checked;
    //alert(isChecked);
    $('#sl'+tabCount).slider({
            //min: parseFloat($('#datatable'+tabCount+' tbody tr').find("td").eq(8).text()),
            //max: parseFloat($('#datatable'+tabCount+' tbody tr').find("td").eq(9).text()),
            min:0,
            max:20,
            value: [10,15]
        }
        ).ready(function(){
            var thresholdValue = new Array();
            thresholdValue = $('#sl'+tabCount).data('slider').getValue();
            var min = parseFloat(thresholdValue[0]);
            var max = parseFloat(thresholdValue[1]); 
            $("tbody tr").each(function(){
                var score = $(this).find("td").eq(1).text();
                if (score>max||score<min){
                    $(this).hide();
                }else{
                    $(this).show();
                }
            });
        }).on('slideStop', function(ev){
            var thresholdValue = new Array();
            thresholdValue = $('#sl'+tabCount).data('slider').getValue();
            var min = parseFloat(thresholdValue[0]);
            var max = parseFloat(thresholdValue[1]); 
            //alert("tabcount "+tabCount);
            var lineCount = 0;
            $("#datatable"+tabCount+" tbody tr").each(function(){
                if (document.getElementById('count'+tabCount+$(this).find("td").eq(7).text()).checked){
                    var score = $(this).find("td").eq(1).text();
                    //alert($(this).find("td").eq(2).text()+$(this).find("td").eq(3).text()+$(this).find("td").eq(4).text());
                    if (score>max||score<min){
                        $(this).hide();
                    }else{
                        $(this).show();
                        lineCount += 1;
                        if (lineCount<11){
                            var selectedPoints = new Array();
                            for(i=2;i<7;i++){
                                var value = $(this).find("td").eq(i).text();
                                if(value != ''){
                                    value = parseFloat(value);
                                    selectedPoints.push([i-2,value]);
                                }else{
                                    continue;
                                }
                            }
                            //alert(selectedPoints);
                            chart.addSeries({
                                data:selectedPoints,
                                name:$(this).find("td").eq(0).text(),
                                type:'line'
                            });
                        }
                    }
                }else{
                    $(this).hide();
                }
            });
        }).on('slideStart',function(ev){
            if (chart.series.length>1){
                while(chart.series.length > 0){
                    chart.series[1].remove();
                }
            }
            else{
                
            }
        });
    
}



$('#clusterTabs a').click(function(e) {
    e.preventDefault();
    $(this).tab('show');
    //alert($(this).index());
    //alert($(this).attr('href'));
});

 var chart= new Highcharts.chart('container', {
        chart: {
                        //type: 'scatter'

        },
        title: {
            text: 'User supplied data'
        },
        subtitle: {
            text: 'Click the plot area to add a point. Click a point to remove it.'
        },
        xAxis: {
            categories: ['0 min','10 min','30 min','60 min','120 min'],
            max:4,
            min:0
            },
        yAxis: {
            tickInterval:2
        },


        series: [{
            data: [],
            name:'user'
        }]
     });