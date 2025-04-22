app.LoadPlugin('ChartJS')

function OnStart()
{
    chart = app.LoadChartJS()
    
    lay = app.CreateLayout('Linear', 'VCenter, FillXY')
        
        data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        	datasets: [
        	    {
            		label: 'Downloads',
            		backgroundColor: "#9C27B0",
            		borderColor: "#7B1FA2",
            		borderWidth: 1,
            		data: [5, 10, -4, 12, 15]
            	}
        	]
        }
        
        barChart = chart.CreateChart(data, 'bar', 0.9, 0.5)
        lay.AddChild(barChart)

        btn = app.CreateButton("Update Data", 1)
        btn.SetMargins(0, 0.1, 0, 0)
        lay.AddChild(btn)
        btn.SetOnTouch(updateChart)
        
    app.AddLayout(lay)
}

function updateChart()
{
    var newData = [ 
        [20, 45, 80, 70, 30]
    ]

    barChart.updateData(newData)
}
