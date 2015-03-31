//===============================================================================================================================

var options = {
    chart: {
        renderTo: 'container',
        //type: 'line',
        zoomType: 'xy'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: []
    },
    
    yAxis: {
        title: {
            text: ''
        }
    },
    
    series: []
};

$.get('rptrefno, month, year.csv', function(data) { //data.csv
    // Split the lines
    var lines = data.split('\n');
    
    // Iterate over the lines and add categories or series
    $.each(lines, function(lineNo, line) {
        var items = line.split(',');
        
        // header line containes categories
        if (lineNo == 0) {
            $.each(items, function(itemNo, item) {
                if (itemNo > 0) options.xAxis.categories.push(item);
            });
        }
        
        // the rest of the lines contain data with their name in the first 
        // position
        else {
            var series = {
                data: []
            };
            $.each(items, function(itemNo, item) {
                if (itemNo == 0) {
                    series.name = item;
                } else {
                    series.data.push(parseFloat(item));
                }
            });
            
            options.series.push(series);
    
        }
        
    });


        // Create the chart
    options.chart.renderTo = 'container';
    options.chart.type = $("#filter").find("select[name=FirstChartType]").val();//'column';
    var chart1 = new Highcharts.Chart(options);

        $("#FirstChartType").change(function() {
        var type = this.value;
        if(type !== '0') {
            var cdh = $('#container').highcharts();
            $(cdh.series).each(function(){
                this.update({
                    type: type 
                }, false);
            });
            cdh.redraw();
        }
    });
    
    
});

var options = {
    chart: {
        renderTo: 'container1',
        //type: 'bar',
        zoomType: 'xy'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: []
    },
    
    yAxis: {
        title: {
            text: ''
        }
    },
    
    series: []
};

$.get('data2.csv', function(data) {
    // Split the lines
    var lines = data.split('\n');
    
    // Iterate over the lines and add categories or series
    $.each(lines, function(lineNo, line) {
        var items = line.split(',');
        
        // header line containes categories
        if (lineNo == 0) {
            $.each(items, function(itemNo, item) {
                if (itemNo > 0) options.xAxis.categories.push(item);
            });
        }
        
        // the rest of the lines contain data with their name in the first 
        // position
        else {
            var series = {
                data: []
            };
            $.each(items, function(itemNo, item) {
                if (itemNo == 0) {
                    series.name = item;
                } else {
                    series.data.push(parseFloat(item));
                }
            });
            
            options.series.push(series);
    
        }
        
    });
    
   
        // Create the chart
    options.chart.renderTo = 'container1';
    options.chart.type = $("#filter").find("select[name=SecondChartType]").val();
    var chart2 = new Highcharts.Chart(options);

  $("#SecondChartType").change(function() {
        var type = this.value;
        if(type !== '0') {
            var cdh = $('#container1').highcharts();
            $(cdh.series).each(function(){
                this.update({
                    type: type
                }, false);
            });
            cdh.redraw();
        }
    });


});

/*
        // Create the chart
    options.chart.renderTo = 'container';
    options.chart.type = 'line';
    var chart1 = new Highcharts.Chart(options);

    options.chart.renderTo = 'container1';
    options.chart.type = 'bar';
    var chart2 = new Highcharts.Chart(options);

*/