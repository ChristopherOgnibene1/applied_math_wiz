
// Declaring Data Series initially above the start of the jQuery function
// for series.data fields


var names = ['2007','2008','2009','2010','2011','2012','2013'];
var counts = [367,1234,1130,1056,1481,1515,1010];
var drilldowns = ['07','08','09','10','11','12','13'];
var series07 = [['January',0],['February',0],['March',0],['April',0],['May',0],['June',0],['July',0],['August',5],['September',82],['October',105],['November',99],['December',76]];
var series08 = [['January',249],['February',107],['March',97],['April',81],['May',106],['June',76],['July',57],['August',64],['September',189],['October',105],['November',50],['December',53]];
var series09 = [['January',162],['February',108],['March',50],['April',62],['May',92],['June',85],['July',61],['August',137],['September',165],['October',101],['November',52],['December',55]];
var series10 = [['January',164],['February',88],['March',53],['April',29],['May',45],['June',57],['July',40],['August',116],['September',139],['October',104],['November',113],['December',108]];
var series11 = [['January',180],['February',117],['March',144],['April',93],['May',88],['June',85],['July',63],['August',152],['September',227],['October',129],['November',112],['December',91]];
var series12 = [['January',215],['February',119],['March',118],['April',83],['May',82],['June',58],['July',45],['August',284],['September',193],['October',179],['November',67],['December',72]];
var series13 = [['January',151],['February',108],['March',74],['April',62],['May',85],['June',44],['July',47],['August',83],['September',126],['October',115],['November',60],['December',55]];

/*
2007,367
2008,1234
2009,1130
2010,1056
2011,1481
2012,1515
2013,1010
*/

/*
Row Labels,January,February,March,April,May,June,July,August,September,October,November,December
2007,,,,,,,,5,82,105,99,76
2008,249,107,97,81,106,76,57,64,189,105,50,53
2009,162,108,50,62,92,85,61,137,165,101,52,55
2010,164,88,53,29,45,57,40,116,139,104,113,108
2011,180,117,144,93,88,85,63,152,227,129,112,91
2012,215,119,118,83,82,58,45,284,193,179,67,72
2013,151,108,74,62,85,44,47,83,126,115,60,55
*/

/*
var names = ['Animals','Fruits','Cars'];
var ys = [5,2,4];
var drilldowns = ['animals','fruits','cars'];
var series1 = [['Cats',4],['Dogs',2],['Cows',1],['Sheep',2],['Pigs',1]];
var series2 = [['Apples',4],['Oranges',2]];
var series3 = [['Toyota',4],['Opel',2],['Volkswagen',2]];
*/


$(function () {

    // Create the chart
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'HDP Tickets Organized by Year, then Filtered by Month'
        },
        xAxis: {
            type: 'category',
            title: {
                text: 'Year'
            
            }
        },
        yAxis: {
            title: {
                text: 'Number of Tickets'
            
            }
        },

        legend: {
            enabled: true
        },

        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true
                }
            }
        },

        series: [{
            name: 'Sum of Tickets',
            colorByPoint: true,
            data: [{
                name: names[0],
                y: counts[0],
                drilldown: drilldowns[0]
            }, {
                name: names[1],
                y: counts[1],
                drilldown: drilldowns[1]
            }, {
                name: names[2],
                y: counts[2],
                drilldown: drilldowns[2]
            }, {
                name: names[3],
                y:  counts[3],
                drilldown:  drilldowns[3]
            
            }, {
                name:  names[4],
                y:  counts[4],
                drilldown:  drilldowns[4]
            
            }, {
                name:  names[5],
                y:  counts[5],
                drilldown:  drilldowns[5]
            
            }, {
                name:  names[6],
                y:  counts[6],
                drilldown:  drilldowns[6]
            
            }]
       } , { 
            type: 'spline',
            name: 'Number of Tickets',
            data: [{
                name: names[0],
                y: counts[0],
                color: Highcharts.getOptions().colors[0], // Jane's color
                dataLabels: {
                  enabled: false
                }
            }, {
                name: names[1],
                y: counts[1],
                color: Highcharts.getOptions().colors[1], // John's color
                dataLabels: {
                  enabled: false
                }
            }, {
                name: names[2],
                y: counts[2],
                color: Highcharts.getOptions().colors[2], // Joe's color
                dataLabels: {
                  enabled: false
                }
            }, {
                name: names[3],
                y: counts[3],
                color: Highcharts.getOptions().colors[3], // Joe's color
                dataLabels: {
                  enabled: false
                }
            }, {
                name: names[4],
                y: counts[4],
                color: Highcharts.getOptions().colors[4], // Joe's color
                dataLabels: {
                  enabled: false
                }
            }, {
                name: names[5],
                y: counts[5],
                color: Highcharts.getOptions().colors[5], // Joe's color
                dataLabels: {
                  enabled: false
                }
            }, {
                name: names[6],
                y: counts[6],
                color: Highcharts.getOptions().colors[6], // Joe's color
                dataLabels: {
                  enabled: false
                }
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
                name: names[0],
                y: counts[0],
                color: Highcharts.getOptions().colors[0] // Jane's color
            }, {
                name: names[1],
                y: counts[1],
                color: Highcharts.getOptions().colors[1] // John's color
            }, {
                name: names[2],
                y: counts[2],
                color: Highcharts.getOptions().colors[2] // Joe's color
            }, {
                name: names[3],
                y: counts[3],
                color: Highcharts.getOptions().colors[3] // Joe's color
            }, {
                name: names[4],
                y: counts[4],
                color: Highcharts.getOptions().colors[4] // Joe's color
            }, {
                name: names[5],
                y: counts[5],
                color: Highcharts.getOptions().colors[5] // Joe's color
            }, {
                name: names[6],
                y: counts[6],
                color: Highcharts.getOptions().colors[6] // Joe's color
            }],
            center: [100, 80],
            size: 100,
            showInLegend: false,
            dataLabels: {
                enabled: false
            }
        }],
        /**/
        
      
        drilldown: {
            series: [{
                id: drilldowns[0],
                data: series07
            }, {
                id: drilldowns[1],
                data: series08
            }, {
                id: drilldowns[2],
                data: series09
            }, {
                id: drilldowns[3],
                data: series10
            
            }, {
                id:  drilldowns[4],
                data:  series11
            
            }, {
                id:  drilldowns[5],
                data:  series12
            
            }, {
                id:  drilldowns[6],
                data:  series13
            
            }]
        }
    });
    /*
        $.get('drilldown_example2_data.csv', function (data) {
        // Split the lines
        var lines = data.split('\n');
        $.each(lines, function (lineNo, line) {
            var items = line.split(',');


            // header line containes categories
            if (lineNo == 0) {
                $.each(items, function (itemNo, item) {
                    if (itemNo > 0) options.xAxis.categories.push(item);

                });
            }

            // the rest of the lines contain data with their name in the first position
            else {
                var series = {
                    data: [],
                    visible: false,
                    type: 'column'

                }
                $.each(items, function (itemNo, item) {
                    if (itemNo == 0) {
                        series.name = item;
                        //series.data.drilldown = 'apple';

                    } else {
                        series.data.push(parseFloat(item));
                    }

                });


                options.series.push(series);

            }

        });

        var chart = new Highcharts.Chart(options);
    });
    */
});

