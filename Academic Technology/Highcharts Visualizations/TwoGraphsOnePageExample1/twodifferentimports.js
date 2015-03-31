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

// Internationalization
Highcharts.setOptions({
    lang: {
        drillUpText: 'Back to {series.name}'
    }
});

var options = {

    chart: {
        height: 300
    },
    
    title: {
        text: 'HDP Tickets by Year and Month',
    },
    subtitle: {
        text: 'Source:  HDP 2013 Data Set'
    },

    xAxis: {
        title: 'Year',
        categories: names
    },
    
    legend: {
        enabled: false
    },
    
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true
            },
            shadow: false
        },
        pie: {
            size: '80%'
        }
    },
    
    series: [{
        name: 'Main View',
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
            y: counts[3],
            drilldown: drilldowns[3]
        }, {
            name: names[4],
            y: counts[4],
            drilldown: drilldowns[4]
        }, {
            name: names[5],
            y: counts[5],
            drilldown: drilldowns[5]
        }, {
            name: names[6],
            y: counts[6],
            drilldown: drilldowns[6]
        }]
    }],
    
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
};

// Column chart
options.chart.renderTo = 'container1';
options.chart.type = 'column';
var chart1 = new Highcharts.Chart(options);

// Pie
options.chart.renderTo = 'container2';
options.chart.type = 'pie';
var chart2 = new Highcharts.Chart(options);
