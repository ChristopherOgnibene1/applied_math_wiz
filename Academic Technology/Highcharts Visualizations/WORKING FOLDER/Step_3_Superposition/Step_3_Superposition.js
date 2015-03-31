
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

//=========================================================================================


$.get('test1.csv', function (data) {
    // Split the lines
    options.series.push({
        name: 'Series 1',
        type:  $("#filter").find("select[name=chartType]").val(),//'column',
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
                type: $("#filter").find("select[name=chartType]").val(),//'column',
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
      //    var chart = new Highcharts.Chart(options);
    });
    
    //Create the Chart
    options.chart.renderTo = 'container';
    options.chart.type = $("#filter").find("select[name=FirstChartType]").val();//'column';
    var chart1 = new Highcharts.Chart(options);
  
    $button1 = $('#button1');
    $button2 = $('#button2');
    $button3 = $('#button3');
    $button4 = $('#button4');
    $button5 = $('#button5');
    $button6 = $('#button6');
    $button7 = $('#button7');
    //$button8 = $('#button8');

    $button1.click(function () {
        var series = chart1.series[1];
        if (series.visible) {
            series.hide();
            series.redraw();
            $button1.html('Show 2007 series');
        } else {
            series.show();
            series.redraw();
            $button1.html('Hide 2007 series');
        }
    });
 
    $button2.click(function () {
        var series = chart1.series[2];
        if (series.visible) {
            series.hide();
            series.redraw();
            $button2.html('Show 2008 series');
        } else {
            series.show();
            series.redraw();
            $button2.html('Hide 2008 series');
        }
    });

    $button3.click(function () {
        var series = chart1.series[3];
        if (series.visible) {
            series.hide();
            series.redraw();
            $button3.html('Show 2009 series');
        } else {
            series.show();
            series.redraw();
            $button3.html('Hide 2009 series');
        }
    });

    $button4.click(function () {
        var series = chart1.series[4];
        if (series.visible) {
            series.hide();
            series.redraw();
            $button4.html('Show 2010 series');
        } else {
            series.show();
            series.redraw();
            $button4.html('Hide 2010 series');
        }
    });

    $button5.click(function () {
        var series = chart1.series[5];
        if (series.visible) {
            series.hide();
            series.redraw();
            $button5.html('Show 2011 series');
        } else {
            series.show();
            series.redraw();
            $button5.html('Hide 2011 series');
        }
    });

    $button6.click(function () {
        var series = chart1.series[6];
        if (series.visible) {
            series.hide();
            series.redraw();
            $button6.html('Show 2012 series');
        } else {
            series.show();
            series.redraw();
            $button6.html('Hide 2012 series');
        }
    });

    $button7.click(function () {
        var series = chart1.series[7];
        if (series.visible) {
            series.hide();
            series.redraw();
            $button7.html('Show 2013 series');
        } else {
            series.show();
            series.redraw();
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
    
    // $button8.click(function () {
    //    var series = chart1.series[0];
    //    if (series.visible) {
    //        series.hide();
    //        $button8.html('Show Complete Series 1');
    //    } else {
    //        series.show();
    //        $button8.html('Hide Complete Series 1');
    //   }
    //}); 
    
     var chart1 = new Highcharts.Chart(options);

});


//======================================================================================

//Source:  http://stackoverflow.com/questions/15918532/load-multiple-csv-files-correct-order-in-one-chart 

var options = {
    chart: {
        renderTo: 'container1',
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



$.get('test2.csv', function (data) {
    // Split the lines
    options.series.push({
        name: 'Series 2',
        type:  $("#filter").find("select[name=SecondChartType]").val(),//'column',
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
                type: $("#filter").find("select[name=SecondChartType]").val(),//'column',
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
       //  var chart2 = new Highcharts.Chart(options);
    });

      var chart2 = new Highcharts.Chart(options);
      
//===================================================================================

    $button9  = $('#button9');
    $button10 = $('#button10');
    $button11 = $('#button11');
    $button12 = $('#button12');
    $button13 = $('#button13');
    $button14 = $('#button14');
    $button15 = $('#button15');
    //$button16 = $('#button16');
  
//==================================================================================//

    $button9.click(function () {
        var series = chart2.series[9];
        if (series.visible) {
            series.hide();
            series.redraw();
            $button9.html('Show 2007 Average');
        } else {
            series.show();
            series.redraw();
            $button9.html('Hide 2007 Average');
        }
    });

    $button10.click(function () {
        var series = chart2.series[10];
        if (series.visible) {
            series.hide();
            series.redraw();
            $button.html('Show 2008 Average');
        } else {
            series.show();
            series.redraw();
            $button10.html('Hide 2008 Average');
        }
    });

    $button11.click(function () {
        var series = chart2.series[11];
        if (series.visible) {
            series.hide();
            series.redraw();
            $button11.html('Show 2009 Average');
        } else {
            series.show();
            series.redraw();
            $button11.html('Hide 2009 Average');
        }
    });

    $button12.click(function () {
        var series = chart2.series[12];
        if (series.visible) {
            series.hide();
            series.redraw();
            $button12.html('Show 2010 Average');
        } else {
            series.show();
            series.redraw();
            $button12.html('Hide 2010 Average');
        }
    });

    $button13.click(function () {
        var series = chart2.series[13];
        if (series.visible) {
            series.hide();
            series.redraw();
            $button13.html('Show 2011 Average');
        } else {
            series.show();
            series.redraw();
            $button13.html('Hide 2011 Average');
        }
    });

    $button14.click(function () {
        var series = chart2.series[14];
        if (series.visible) {
            series.hide();
            series.redraw();
            $button14.html('Show 2012 Average');
        } else {
            series.show();
            series.redraw();
            $button14.html('Hide 2012 Average');
        }
    });

    $button15.click(function () {
        var series = chart2.series[15];
        if (series.visible) {
            series.hide();
            series.redraw();
            $button15.html('Show 2013 Average');
        } else {
            series.show();
            series.redraw();
            $button15.html('Hide 2013 Average');
        }
    });

  $("#SecondChartType").change(function() {
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
        
  //  $button16.click(function () {
  //      var series = chart.series[8];
  //      if (series.visible) {
  //          series.hide();
  //          $button16.html('Show Average series');
  //      } else {
  //          series.show();
  //          $button16.html('Hide Average series');
  //      }
  //  });
  
  var chart2 = new Highcharts.Chart(options);
  
});
