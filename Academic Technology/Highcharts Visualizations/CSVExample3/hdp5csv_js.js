var options = {
    chart: {
        renderTo: 'container',
        defaultSeriesType: 'column',
        marginRight : 450,
        plotBackgroundColor: 'black'
    },
    title: {
        text: 'HDP Tickets:  Department Tickets per Year'
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
          title: {
             text: 'Department'
          },
       categories: []
        
    },
    yAxis: {
        title: {
            text: 'Number of Tickets'
        }
    },
   plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            },
            
            series: {
                stacking: 'normal'
             }
        },
   //The different labels are provided by the first column in the CSV file
    series: [], 
    
    legend: {
     align: 'right',
     verticalAlign: 'right',
     floating: true,
     layout: 'vertical',
     backgroundColor : '#FCFFC5',
     borderColor : '#C98657'    
     }
};

/*different files used
year, count(rptdept).csv
*/

$.get('rptdept,year.csv', function(data) { //
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
