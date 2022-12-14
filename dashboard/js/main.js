(function ($) {
    "use strict";



    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });

// Graficos

window.onload = function () {

var dps = [];
var chart = new CanvasJS.Chart("chartContainer", {
    exportEnabled: true,
    title :{
        text: "Estadistica actual del Negocio"
    },
    data: [{
        type: "spline",
        markerSize: 0,
        dataPoints: dps 
    }]
});

var xVal = 0;
var yVal = 100;
var updateInterval = 1000;
var dataLength = 50; // number of dataPoints visible at any point

var updateChart = function (count) {
    count = count || 1;
    // count is number of times loop runs to generate random dataPoints.
    for (var j = 0; j < count; j++) {   
        yVal = yVal + Math.round(5 + Math.random() *(-5-5));
        dps.push({
            x: xVal,
            y: yVal
        });
        xVal++;
    }
    if (dps.length > dataLength) {
        dps.shift();
    }
    chart.render();
};

updateChart(dataLength); 
setInterval(function(){ updateChart() }, updateInterval); 

}

    
})(jQuery);

