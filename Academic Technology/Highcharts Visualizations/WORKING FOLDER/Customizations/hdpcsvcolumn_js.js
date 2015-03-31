/*
//The second step of declaring the arrays prior to the function; in the function, all that is needed is a variable reference to each array
var myArray1 = [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]; 
var myArray2 = [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5];
var myArray3 = [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0];
var myArray4 = [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8];
var myArray5 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
*/


var options = {
    chart: {
        renderTo: 'container',
        type: 'column' //types of charts:  'bar', 'column', 'line', 
    },
    subtitle: {
        text: 'Source:  HDP Ticketing Cleaned Data Set 2013 (ATE Students\\Resources\\Data Files)'
    },
    
    title: {
        text: 'HDP Tickets:  Year vs. Total Tickets'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: 0,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
             }
          
          },
       categories: []
        
    },
    yAxis: {
        title: {
            text: 'Number of Tickets',
            align: 'high'
        },
        labels: {
            overflow: 'justfy'
        }
    },
   plotOptions: {
            column: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: true
            },
            
            series: {
                stacking: 'normal' //possible values:  null, normal, percent
            }
        },
   //The different labels are provided by the first column in the CSV file
    series: [], 
    
    legend: {
     align: 'right',
     verticalAlign: 'bottom',
     floating: true,
     layout: 'vertical',
     x: 0,
     y: -200,
     borderWidth: 1,
     shadow: true
     }
};

/*different files used
year, count(rptdept).csv
*/

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