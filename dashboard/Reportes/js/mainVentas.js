window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	title:{
		text: "Productos mas Vendidos"
	},
	axisY: {
		title: ""
	},
	data: [{        
		type: "column",  
		showInLegend: true, 
		legendMarkerColor: "grey",
		legendText: "Total",
		dataPoints: [      
			{ y: 300, label: "Cuadernos" },
			{ y: 210,  label: "Reglas" },
			{ y: 100,  label: "Lapices" },
			{ y: 90,  label: "Colores" },
			{ y: 80,  label: "Esferos" },
			{ y: 60, label: "Carpetas" },
			{ y: 40,  label: "Reglas" },
			{ y: 30,  label: "Pegantes" }
		]
	}]
});
chart.render();

}