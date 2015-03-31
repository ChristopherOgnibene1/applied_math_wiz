var options = {
    chart: {
        renderTo: 'container',
        zoomType: 'xy',
    },
    title: {
        text: 'Number of Monthly Tickets:  by Year'
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
            text: 'Month'
        },
        categories: []
    },
    yAxis: {
        text: 'Number of Tickets'
    },
         plotOptions: {
                  line: {
                      dataLabels: {
                          enabled: true
                      },
                      enableMouseTracking: false
                  },
                   spline: {
                      dataLabels:  {
                           enabled:  true
                      }
                  },
                    bar: {
                       dataLabels: {
                          enabled: false,
                          align:  'center'
                       }
                    
                  },
                    column: {
                        dataLabels: {
                          enabled: false
                       }
                  },                 
                  series: {
                      stacking: null//'normal'
                   }
              },
  
    series: [],
    
    legend: {
        enabled: true,
        floating: false
    
    }
};
$.get('test1.csv', function (data) {
    // Split the lines
    //options.series.push({
    //    name: 'Series 1',
    //    type: 'line',
    //    data: []
    //});

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

        /*
        options.series[0].data.push([
        parseFloat(items[0]),
        parseFloat(items[1])]);
        */
        
    });
        var chart = new Highcharts.Chart(options);

    $button1 = $('#button1');
    $button2 = $('#button2');
    $button3 = $('#button3');
    $button4 = $('#button4');
    $button5 = $('#button5');
    $button6 = $('#button6');
    $button7 = $('#button7');
    
    $button1.click(function () {
        var series = chart.series[0];
        if (series.visible) {
            series.hide();
            $button1.html('Show 2007 series');
        } else {
            series.show();
            $button1.html('Hide 2007 series');
        }
    });
  
    $button2.click(function () {
        var series = chart.series[1];
        if (series.visible) {
            series.hide();
            $button2.html('Show 2008 series');
        } else {
            series.show();
            $button2.html('Hide 2008 series');
        }
    });

    $button3.click(function () {
        var series = chart.series[2];
        if (series.visible) {
            series.hide();
            $button3.html('Show 2009 series');
        } else {
            series.show();
            $button3.html('Hide 2009 series');
        }
    });

    $button4.click(function () {
        var series = chart.series[3];
        if (series.visible) {
            series.hide();
            $button4.html('Show 2010 series');
        } else {
            series.show();
            $button4.html('Hide 2010 series');
        }
    });

    $button5.click(function () {
        var series = chart.series[4];
        if (series.visible) {
            series.hide();
            $button5.html('Show 2011 series');
        } else {
            series.show();
            $button5.html('Hide 2011 series');
        }
    });

    $button6.click(function () {
        var series = chart.series[5];
        if (series.visible) {
            series.hide();
            $button6.html('Show 2012 series');
        } else {
            series.show();
            $button6.html('Hide 2012 series');
        }
    });

    $button7.click(function () {
        var series = chart.series[6];
        if (series.visible) {
            series.hide();
            $button7.html('Show 2013 series');
        } else {
            series.show();
            $button7.html('Hide 2013 series');
        }
    }); 


    $("#chartType").change(function() {
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





/*
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
        
*/
        /*
        options.series[1].data.push([
        parseFloat(items[0]),
        parseFloat(items[1])]);
        */
        
/*        
    });
    var chart = new Highcharts.Chart(options);
});
*/
/*
var chart = new Highcharts.Chart(options);
*/