
//$(document).ready(function() {

    var options = {
        chart: {
            //defaultSeriesType: 'bar',
            renderTo: 'container',
            type: 'bar',
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
       }, {
          name: '2014',
           data: []
       }],
       
    legend: {
     align: 'right',
     verticalAlign: 'right',
     floating: true,
     layout: 'horizontal',
     backgroundColor : '#FCFFC5',
     borderColor : '#C98657'    
     }
};
    
    $.getJSON('rptdept,year(parsed).json', function(json) {
        val1 = [];
        val2 = [];
        val3 = [];
        val4 = [];
        val5 = [];
        val6 = [];
        val7 = [];
        val8 = [];
        
        $.each(json, function(key,value) {
        val1.push([value[0], value[1]]);
        val2.push([value[0], value[2]]);
        val3.push([value[0], value[3]]);
        val4.push([value[0], value[4]]);
        val5.push([value[0], value[5]]);
        val6.push([value[0], value[6]]);
        val7.push([value[0], value[7]]);
        val8.push([value[0], value[8]]);
        });

        options.series[0].data = val1;
        options.series[1].data = val2;
        options.series[2].data = val3;
        options.series[3].data = val4;
        options.series[4].data = val5;
        options.series[5].data = val6;
        options.series[6].data = val7;
        options.series[7].data = val8;
        chart = new Highcharts.Chart(options);
     });
     
     /*
    $.getJSON('rptdept,year(parsed).json', function(data) {
        options.series[0].data = data;
        var chart = new Highcharts.Chart(options);
    });
*/
//};
