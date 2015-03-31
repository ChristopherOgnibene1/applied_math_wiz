
var years = ['2007','2008','2009','2010','2011','2012','2013'];
var total = [367,1234,1130,1056,1481,1515,1010];

$(function () {
    $('#container').highcharts({
    
        chart: {
            type: 'column'
        
        },
        
        title: {
            text: 'Graph with More than One Plot'
        },
        xAxis: {
            categories: years
        },
        labels: {
            items: [{
                html: 'HDP Tickets by Year and Month',
                style: {
                    left: '50px',
                    top: '18px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        series: [{
            type: 'column',
            name: 'Number of Tickets',
            data: [{
                name: years[0],
                y: total[0],
                color: Highcharts.getOptions().colors[0] // Jane's color
            }, {
                name: years[1],
                y: total[1],
                color: Highcharts.getOptions().colors[1] // John's color
            }, {
                name: years[2],
                y: total[2],
                color: Highcharts.getOptions().colors[2] // Joe's color
            }, {
                name: years[3],
                y: total[3],
                color: Highcharts.getOptions().colors[3] // Joe's color
            }, {
                name: years[4],
                y: total[4],
                color: Highcharts.getOptions().colors[4] // Joe's color
            }, {
                name: years[5],
                y: total[5],
                color: Highcharts.getOptions().colors[5] // Joe's color
            }, {
                name: years[6],
                y: total[6],
                color: Highcharts.getOptions().colors[6] // Joe's color
            }]
        }, {
            type: 'spline',
            name: 'Number of Tickets',
            data: [{
                name: years[0],
                y: total[0],
                color: Highcharts.getOptions().colors[0] // Jane's color
            }, {
                name: years[1],
                y: total[1],
                color: Highcharts.getOptions().colors[1] // John's color
            }, {
                name: years[2],
                y: total[2],
                color: Highcharts.getOptions().colors[2] // Joe's color
            }, {
                name: years[3],
                y: total[3],
                color: Highcharts.getOptions().colors[3] // Joe's color
            }, {
                name: years[4],
                y: total[4],
                color: Highcharts.getOptions().colors[4] // Joe's color
            }, {
                name: years[5],
                y: total[5],
                color: Highcharts.getOptions().colors[5] // Joe's color
            }, {
                name: years[6],
                y: total[6],
                color: Highcharts.getOptions().colors[6] // Joe's color
            }],
            marker: {
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[3],
                fillColor: 'white'
            }
        }, {
            type: 'pie',
            name: 'Number of Tickets',
            data: [{
                name: years[0],
                y: total[0],
                color: Highcharts.getOptions().colors[0] // Jane's color
            }, {
                name: years[1],
                y: total[1],
                color: Highcharts.getOptions().colors[1] // John's color
            }, {
                name: years[2],
                y: total[2],
                color: Highcharts.getOptions().colors[2] // Joe's color
            }, {
                name: years[3],
                y: total[3],
                color: Highcharts.getOptions().colors[3] // Joe's color
            }, {
                name: years[4],
                y: total[4],
                color: Highcharts.getOptions().colors[4] // Joe's color
            }, {
                name: years[5],
                y: total[5],
                color: Highcharts.getOptions().colors[5] // Joe's color
            }, {
                name: years[6],
                y: total[6],
                color: Highcharts.getOptions().colors[6] // Joe's color
            }],
            center: [100, 80],
            size: 100,
            showInLegend: false,
            dataLabels: {
                enabled: false
            }
        }],
            legend: {
     align: 'center',
     verticalAlign: 'bottom',
     x: 0,
     y: -290,
     floating: true,
     layout: 'vertical',
     }

    });
});

$.get('rptrefno, month, year.csv', function(data) { //
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
    var chart = new Highcharts.Chart(options);
});
