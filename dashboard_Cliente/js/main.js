
window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title: {
        text: "Compras generales del Usuario"
    },
    axisX: {
        minimum: new Date(2015, 01, 25),
        maximum: new Date(2017, 02, 15),
        valueFormatString: "MMM YY"
    },
    axisY: {
        title: "Numero de Compras",
        titleFontColor: "#4F81BC",
        includeZero: true,
        suffix: ""
    },
    data: [{
        indexLabelFontColor: "darkSlateGray",
        name: "views",
        type: "area",
        yValueFormatString: "#,##0.0mn",
        dataPoints: [
            { x: new Date(2015, 02, 1), y: 68.8, label: "Enero" },
            { x: new Date(2015, 05, 1), y: 61.1, label: "Febrero" },
            { x: new Date(2015, 08, 1), y: 47.0, label: "Marzo" },
            { x: new Date(2015, 11, 1), y: 48.0, label: "Abril" },
            { x: new Date(2016, 02, 1), y: 74.8, label: "Mayo" },
            { x: new Date(2016, 05, 1), y: 51.1, label: "Junio" },
            { x: new Date(2016, 08, 1), y: 40.4, label: "Julio" },
            { x: new Date(2016, 11, 1), y: 45.5, label: "Agosto" },
            { x: new Date(2017, 02, 1), y: 78.3, label: "Septiembre", indexLabel: "Highest", markerColor: "red" }
        ]
    }]
});
chart.render();

}