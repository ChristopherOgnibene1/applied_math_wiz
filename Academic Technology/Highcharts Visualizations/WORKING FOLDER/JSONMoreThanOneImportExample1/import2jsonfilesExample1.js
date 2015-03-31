    var options = {
        chart: {
            //defaultSeriesType: 'bar',
            renderTo: 'container',
            zoomType: 'xy',
            //type: 'bar',
            marginRight : 0,
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
             text: 'Department Name'
          },
       categories: [{
           name: 'Department',
           data: []
       }]
        
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
        
        series: [{
          name: '2007',
           data: []
       }, {
           name: '2008',
           data: []
       }, {
          name: '2009',
           data: []
       }, {
          name: '2010',
           data: []
       }, {
          name: '2011',
           data: []
       }, {
          name: '2012',
           data: []
       }, {
          name: '2013',
           data: []
       }],
       
    legend: {
     align: 'center',
     verticalAlign: 'bottom',
     floating: false,
     layout: 'horizontal',
     backgroundColor : '#FCFFC5',
     borderColor : '#C98657'    
     }
};
    
    $.getJSON('jsondata1.json', function(json) {
    
        //options.series.push({
        //    name: 'Series 1',
        //    type: 'bar',
        //    data: []
        //});
        
        val1 = [];
        val2 = [];
        val3 = [];
        val4 = [];
        val5 = [];
        val6 = [];
        val7 = [];
        
        $.each(json, function(key,value) {
        val1.push([value[0], value[1]]);
        val2.push([value[0], value[2]]);
        val3.push([value[0], value[3]]);
        val4.push([value[0], value[4]]);
        val5.push([value[0], value[5]]);
        val6.push([value[0], value[6]]);
        val7.push([value[0], value[7]]);
        });

        options.series[0].data = val1;
        options.series[1].data = val2;
        options.series[2].data = val3;
        options.series[3].data = val4;
        options.series[4].data = val5;
        options.series[5].data = val6;
        options.series[6].data = val7;
        
        //options.chart.renderTo = 'container';
        //options.chart.type = 'bar';
        var chart1 = new Highcharts.Chart(options);
     });

    $.getJSON('jsondata2.json', function(json) {
    
      //  options.series.push({
      //      name: 'Series 2',
      //      type: 'bar',
      //      data: []
      //  });
        
        val1 = [];
        val2 = [];
        val3 = [];
        val4 = [];
        val5 = [];
        val6 = [];
        val7 = [];
        
        $.each(json, function(key,value) {
        val1.push([value[0], value[1]]);
        val2.push([value[0], value[2]]);
        val3.push([value[0], value[3]]);
        val4.push([value[0], value[4]]);
        val5.push([value[0], value[5]]);
        val6.push([value[0], value[6]]);
        val7.push([value[0], value[7]]);
        });

        options.series[0].data = val1;
        options.series[1].data = val2;
        options.series[2].data = val3;
        options.series[3].data = val4;
        options.series[4].data = val5;
        options.series[5].data = val6;
        options.series[6].data = val7;
        
        options.chart.renderTo = 'container';
        options.chart.type = 'bar';
        var chart2 = new Highcharts.Chart(options);
        
     });





/*=====================================================================================================================================================

var options = {

    chart: {
        renderTo: 'container',
        zoomType: 'xy',
    },
    title: {
        text: 'Number of HDP Tickets from 2007-2013'
    },
    xAxis: {
        type: 'category',
        title: {
            text: 'Month'
        },
        categories: []
    },
    yAxis: {
        text: 'Number of Tickets'
    },
        
    series: [],
    
    legend: {
        enabled: true,
        floating: false
    
    }
};


$.get('test1.csv', function (data) {
    // Split the lines
    options.series.push({
        name: 'Series 1',
        type: 'line',
        data: []
    });

    var lines = data.split('\n');
    $.each(lines, function (lineNo, line) {
        var items = line.split(',');

    if (lineNo == 0) {
            $.each(items, function(itemNo, item) {
                if (itemNo > 0) options.xAxis.categories.push(item);
            });
        }
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

        
        //options.series[0].data.push([
        //parseFloat(items[0]),
        //parseFloat(items[1])]);
        

    });
    
    
});


$.get('test2.csv', function (data) {
    // Split the lines
    options.series.push({
        name: 'Series 2',
        data: []
    });
    var lines = data.split('\n');
    $.each(lines, function (lineNo, line) {
        var items = line.split(',');
        
        if (lineNo == 0) {
            $.each(items, function(itemNo, item) {
                if (itemNo > 0) options.xAxis.categories.push(item);
            });
        }
    else {
            var series = {
                type: 'column',
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


        
        //options.series[1].data.push([
        //parseFloat(items[0]),
        //parseFloat(items[1])]);
        
        
        
    });
    var chart = new Highcharts.Chart(options);
});

//var chart = new Highcharts.Chart(options);
*/
