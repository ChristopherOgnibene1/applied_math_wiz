
//Source:  http://jsfiddle.net/z2x816bf/2/

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
              defaultSeriesType: 'line',
              zoomType: 'xy'
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
                      stacking: 'normal'//null
                   }
              },
         //The different labels are provided by the first column in the CSV file
          series: [], 
          
          legend: {
           align: 'center',
           verticalAlign: 'bottom',
           floating: false,
           layout: 'horizontal',
           }
      };
      
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




/*
    //var chart = $('#container').highcharts(),
        $button1 = $('#button1');
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

    //var chart = $('#container').highcharts(),
        $button2 = $('#button2');
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

        $button3 = $('#button3');
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
    
        $button4 = $('#button4');
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
    
        $button5 = $('#button5');
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
    
    
         $button6 = $('#button6');
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
    
        $button7 = $('#button7');
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
*/
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

/*
    for (i=1; i <= 7; i++) {
        $button[i].click(function() {
            var series = chart.series[i-1];
            if (series.visible) {
              series.hide();
              
              switch(i)
                case 1:
                    $button[i].html('Hide 2007 series');
                    break;
                case 2:
                    $button[i].html('Hide 2008 series');
                    break;
                case 3:
                    $button[i].html('Hide 2009 series');
                    break;
                case 4:
                    $button[i].html('Hide 2010 series');
                    break;
                case 5:
                    $button[i].html('Hide 2011 series');
                    break;
                case 6:
                    $button[i].html('Hide 2012 series');
                    break;
                case 7:
                    $button[i].html('Hide 2013 series');
                    break;
                default:        
        } else {
            series.visible();
            
            switch(i)
                case 1:
                    $button[i].html('Show 2007 series');
                    break;
                case 2:
                    $button[i].html('Show 2008 series');
                    break;
                case 3:
                    $button[i].html('Show 2009 series');
                    break;
                case 4:
                    $button[i].html('Show 2010 series');
                    break;
                case 5:
                    $button[i].html('Show 2011 series');
                    break;
                case 6:
                    $button[i].html('Show 2012 series');
                    break;
                case 7:
                    $button[i].html('Show 2013 series');
                    break;
                default:  
            };
        });
     };
*/

        
/*
 <select id="year">
    <option value="">-select year-</option>
    <option value="2007">2007</option>
    <option value="2008">2008</option>
    <option value="2009">2009</option>
    <option value="2010">2010</option>
    <option value="2011">2011</option>
    <option value="2012">2012</option>
    <option value="2013">2013</option>
 </select>

    switch(value) {
    case 2007:
        if (series.visible) {
            series.hide();
            $button[i].html('Show 2013 series');
        } else {
            series.show();
            $button7.html('Hide 2013 series');
        }
        break;
    case 2008:
        code block
        break;
     case 2009:
     case 2010:
     case 2011: 
    default:
        default code block
}
    
*/


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


/*
$(function () {
    $("#chartType").change(function (evt) {
        var chartSelection = $("#chartType").val();
        $('#container').hide().filter(charts + chartSelection).show();
    });
});
*/


/*
$(function () {
    $("#year").change(function (evt) {
        var yearSelection = $("#year").val();
        $('#container').hide().filter(charts + yearSelection).show();
    });
});
*/


/*
    $("#year").change(function() {
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
*/




});
      