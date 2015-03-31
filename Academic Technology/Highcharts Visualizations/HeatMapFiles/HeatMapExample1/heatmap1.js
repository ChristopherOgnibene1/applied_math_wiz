var years = ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014'];
var months = ['January', 'February', 'March', 'April', 'May','June', 'July', 'August', 'September', 'October', 'November', 'December'];


$(function () {

    $('#container').highcharts({

        chart: {
            type: 'heatmap',
            marginTop: 40,
            marginBottom: 50
        },


        title: {
            text: 'HDP Tickets by Year and Month'
        },

        xAxis: {
            categories: years,
            title: {
               text: 'Year'
          }
        },

        yAxis: {
            categories: months,
            title: {
                text: 'Month'
            }
        },

        colorAxis: {
            min: 0,
            minColor: '#FFFFFF',
            maxColor: Highcharts.getOptions().colors[6]
        },

        legend: {
            align: 'right',
            layout: 'vertical',
            margin: 0,
            verticalAlign: 'top',
            y: 25,
            symbolHeight: 320
        },

        tooltip: {
            formatter: function () {
                return '<b>' + this.series.xAxis.categories[this.point.x] + '</b> tickets <br><b>' +
                    this.point.value + '</b> created in <br><b>' + this.series.yAxis.categories[this.point.y] + '</b>';
            }
        },
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
        series: [{
            name: 'Tickets per Month',
            borderWidth: 1,
            data: [[0, 0, 0], [0, 1, 0], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 5], [0, 8, 82], [0, 9, 105], [0, 10, 99], [0, 11, 76], //2007
                   [1, 0, 249], [1, 1, 107], [1, 2, 97], [1, 3, 81], [1, 4, 106], [1, 5, 76], [1, 6, 57], [1, 7, 64], [1, 8, 189], [1, 9, 105], [1, 10, 50], [1, 11, 53], //2008
                   [2, 0, 162], [2, 1, 108], [2, 2, 50], [2, 3, 62], [2, 4, 92], [2, 5, 85], [2, 6, 61], [2, 7, 137], [2, 8, 165], [2, 9, 101], [2, 10, 52], [2, 11, 55], //2009
                   [3, 0, 164], [3, 1, 88], [3, 2, 53], [3, 3, 29], [3, 4, 45], [3, 5, 57], [3, 6, 40], [3, 7, 116], [3, 8, 139], [3, 9, 104], [3, 10, 113], [3, 11, 108], //2010
                   [4, 0, 180], [4, 1, 117], [4, 2, 144], [4, 3, 93], [4, 4, 88], [4, 5, 85], [4, 6, 63], [4, 7, 152], [4, 8, 227], [4, 9, 129], [4, 10, 112], [4, 11, 91], //2011
                   [5, 0, 215], [5, 1, 119], [5, 2, 118], [5, 3, 83], [5, 4, 82], [5, 5, 58], [5, 6, 45], [5, 7, 284], [5, 8, 193], [5, 9, 179], [5, 10, 67], [5, 11, 72], //2012
                   [6, 0, 151], [6, 1, 108], [6, 2, 74], [6, 3, 62], [6, 4, 85], [6, 5, 44], [6, 6, 47], [6, 7, 83], [6, 8, 126], [6, 9, 115], [6, 10, 60], [6, 11, 55]], //2013
            dataLabels: {
                enabled: true,
                color: 'black',
                style: {
                    textShadow: 'none',
                    HcTextStroke: null
                }
            }
        }]

    });
});