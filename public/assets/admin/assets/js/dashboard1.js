/*
Template Name: Admin Press Admin
Author: Themedesigner
Email: niravjoshi87@gmail.com
File: js
*/
$(function () {
    "use strict";
    // ============================================================== 
    // Sales overview
    // ============================================================== 
    Morris.Area({
        element: 'earning',
        data: [{
            period: '2011',
            Sales: 50
        }, {
            period: '2012',
            Sales: 130
        }, {
            period: '2013',
            Sales: 80,
            // Marketing: 70
        }, {
            period: '2014',
            Sales: 70,

            // Marketing: 140
        }, {
            period: '2015',
            Sales: 180,

            // Marketing: 140
        }, {
            period: '2016',
            Sales: 105,

            // Marketing: 80
        },
        {
            period: '2017',
            Sales: 250

            // Marketing: 200
        },
        {
            period: '2018',
            Sales: 220
        },
        {
            period: '2019',
            Sales: 180
        }
        ],
        xkey: 'period',
        ykeys: ['Sales'],
        labels: ['Amount'],
        pointSize: 3,
        fillOpacity: 0,
        pointStrokeColors: ['#1976d2', '#26c6da', '#1976d2'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth: 3,
        hideHover: 'auto',
        lineColors: ['#1976d2', '#26c6da', '#1976d2'],
        resize: true

    });

    // ============================================================== 
    // Sales overview
    // ==============================================================
    // ============================================================== 
    // Download count
    // ============================================================== 
    var sparklineLogin = function () {
        $('.spark-count').sparkline([4, 5, 0, 10, 9, 12, 4, 9, 4, 5, 3, 10, 9, 12, 10, 9], {
            type: 'bar',
            width: '100%',
            height: '70',
            barWidth: '2',
            resize: true,
            barSpacing: '6',
            barColor: 'rgba(255, 255, 255, 0.3)'
        });

        $('.spark-count2').sparkline([20, 40, 30], {
            type: 'pie',
            height: '90',
            resize: true,
            sliceColors: ['#1cadbf', '#1f5f67', '#ffffff']
        });
    }
    var sparkResize;

    sparklineLogin();


});

$(function () {
    "use strict";

    // ============================================================== 
    // Morris donut chart
    // ==============================================================       
    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Restaurant 1",
            value: 5000,

        }, {
            label: "Restaurant 2",
            value: 2000,
        }, {
            label: "Restaurant 3",
            value: 3000,
        }],
        resize: true,
        colors: ['#26c6da', '#1976d2', '#ef5350']
    });
    // ============================================================== 
    // sales difference
    // ==============================================================

    // ============================================================== 
    // sparkline chart
    // ==============================================================
    var sparklineLogin = function () {
        $('#sparklinedash').sparkline([0, 5, 6, 10, 9, 12, 4, 9], {
            type: 'bar',
            height: '50',
            barWidth: '2',
            resize: true,
            barSpacing: '5',
            barColor: '#26c6da'
        });
        $('#sparklinedash2').sparkline([0, 5, 6, 10, 9, 12, 4, 9], {
            type: 'bar',
            height: '50',
            barWidth: '2',
            resize: true,
            barSpacing: '5',
            barColor: '#7460ee'
        });
        $('#sparklinedash3').sparkline([0, 5, 6, 10, 9, 12, 4, 9], {
            type: 'bar',
            height: '50',
            barWidth: '2',
            resize: true,
            barSpacing: '5',
            barColor: '#03a9f3'
        });
        $('#sparklinedash4').sparkline([0, 5, 6, 10, 9, 12, 4, 9], {
            type: 'bar',
            height: '50',
            barWidth: '2',
            resize: true,
            barSpacing: '5',
            barColor: '#f62d51'
        });

    }
    var sparkResize;

    $(window).resize(function (e) {
        clearTimeout(sparkResize);
        sparkResize = setTimeout(sparklineLogin, 500);
    });
    sparklineLogin();
});
