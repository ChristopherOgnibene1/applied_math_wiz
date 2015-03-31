    var options = {
        chart: {
        renderTo: 'container',
        defaultSeriesType: 'bar', //options include 'spline', 'bar', 'column'
        marginRight: 450
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
    series: [{}], 
 
     legend: {
     align: 'right',
     verticalAlign: 'right',
     floating: true,
     layout: 'vertical',
     backgroundColor : '#FCFFC5',
     borderColor : '#C98657'    
     }

    };

/*
       $.getJSON("rptdept,year(parsed).json",function(result){
      $.each(result, function(i, field){
        $("div").append(field + " ");
      });
    });
*/

$.getJSON('rptrefno,year,month.json', function(json) {
    options.xAxis.categories = json[0]['data'];
    options.series[0] = json[1];
    options.series[1] = json[2];
    chart = new Highcharts.Chart(options);
});

