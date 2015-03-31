var pieChart;
var legend = null;
var gObj = [];
var objCount =0;
var storeJson =[];          
var titleStack = []; 
require(["dojox/charting/Chart", "dojox/charting/plot2d/Pie",
         "dojox/charting/action2d/Tooltip", 
         "dojox/charting/themes/Tom",
         "dojox/charting/widget/Legend", "dojo/ready","dojox/mobile/parser", 
         "dojox/mobile/View", "dojox/mobile/Heading","dojox/mobile/deviceTheme",
         "dojox/mobile/Button","dojox/data/CsvStore","dojo/store/DataStore"], 
    function(Chart, Pie, Tooltip, Tom, Legend, ready, parser){
			
			 //programmatically reading CSV from external file
			 var personStoreForGrid = new dojox.data.CsvStore({
                    url:"salesdata_distributor.csv"
                });
                
                
                //storing to DataStore
                var objectStore = dojo.store.DataStore({
			        store: personStoreForGrid
			    });
			    
			    
			    //On relustant Data load  & Parsing CSV data into Json Format which can be fed into Pie chart
			    objectStore.query().then(function(results){
			    	//alert(results.length);
			    	
			    	var parentrow=results[0].RowLabels;
			    	var primaryval = [];
			    	var secondaryval = [];
			        var finalJson ;
			        var nextVal=0;
			    	//var primaryjson;
			    	//var secondaryjson;
			    	//parseInt(a)+parseInt(b);
			    	
			    	
			    	
			    	var aggrsum = parseInt(results[0].SecondarySalesValue)+parseInt(results[0].PrimarySalesValue);
			    	finalJson={text: parentrow+'('+aggrsum+')',y: results[0].SecondarySalesValue};
			    	//alert("First Time Parent Row = "+parentrow)
			    	for(var i = 1; i < results.length; ++i) {
			    		if(results[i].RowLabels!==undefined && results[i].RowLabels!==parentrow){
			    			finalJson.child=[{text: "primary("+results[nextVal].PrimarySalesValue+")",y: results[nextVal].PrimarySalesValue,child:primaryval},{text: "secondary("+results[0].SecondarySalesValue+")",y: results[nextVal].SecondarySalesValue,child:secondaryval}];
			    			storeJson.push(finalJson);
			    			parentrow = results[i].RowLabels;
			    			//alert("Subsequently Parent Row = "+parentrow)
			    			finalJson=null;
			    			nextVal=i;
			    			var aggrsum = parseInt(results[i].SecondarySalesValue)+parseInt(results[i].PrimarySalesValue);
			    			finalJson={text: parentrow+'('+aggrsum+')',y: aggrsum};
			    			primaryval = [];
			    			secondaryval = [];
				    		}
			    		else
			    		{
			    			primaryval.push({text: results[i].ChildRowLabels+"("+results[i].PrimarySalesValue+")",y: results[i].PrimarySalesValue});
			    			secondaryval.push({text: results[i].ChildRowLabels+"("+results[i].SecondarySalesValue+")",y: results[i].SecondarySalesValue});
			    			
			    		}

			    	}
			    		    	
			    	finalJson.child=[{text: "primary("+results[nextVal].PrimarySalesValue+")",y: results[nextVal].PrimarySalesValue,child:primaryval},{text: "secondary("+results[nextVal].SecondarySalesValue+")",y: results[nextVal].SecondarySalesValue,child:secondaryval}];
			    	storeJson.push(finalJson);
			    	pieChart.updateSeries("Series A",storeJson);
					pieChart.render();
					legend.refresh();
					// alert(JSON.stringify(storeJson));
					//alert("json created");
			    });     
	
    ready(function(){
    	titleStack[0] = "Drill Down Pie Chart";
    	//var temp = dijit.byId("headerId");
		//.set("label", "titleStack[0]");
    	
    	//document.getElementById("headerId").setAttribute('label','yes')  ;
        parser.parse();
    	pieChart = new Chart("pieChart");
        pieChart.setTheme(Tom).addPlot("default", {
        	type: "Pie",
            font: "normal normal 10pt Tahoma",
			fontColor: "#ccc",
			labelWiring: "#ccc",
            radius: 150,
			labelStyle: "columns",
			htmlLabels: true,
			startAngle: -10
        }).addSeries("Series A", storeJson);
        
        //Logic to handle Item Clicked on the Pie Chart for Drilling down to the Next Level
        var h = pieChart.connectToPlot("default", function(o){ 
			if(o.type == "onclick"){
				var test1 = storeJson;
				var childItem = o.run.data[o.index].child;
				if(childItem != undefined)
				{
					var str = (o.chart.series[0].data[o.index].text);
					titleStack[titleStack.length] = str;
					var temp = dijit.byId("headerId");
					temp.set("label", str);
					document.getElementById("backButtonId").style.display="";
					++objCount;
					gObj[objCount] = childItem;
					drillDown(childItem);
					//document.getElementById("headerId").setAttribute('label', "str")  ;
					
				}
			  } 
}); 
		gObj[0] = storeJson;
        var anim_c = new Tooltip(pieChart, "default");
        pieChart.render();
        legend = new Legend({
        	chart: pieChart,
			horizontal:true}, "legend");
    });
});	


// Logic to Move Back to previous Level of Stack 
function backFired()
{
	//alert(storeJson);
	if(objCount==1){
		document.getElementById("backButtonId").style.display="none";
	}
	if(objCount >= 0)
	{
		 titleStack.pop();
		 str = titleStack[titleStack.length - 1];
		 var temp = dijit.byId("headerId");
		 temp.set("label", str);
					
		gObj[objCount] = null;
		--objCount;
		var childItem = gObj[objCount];
		drillDown(childItem);
	}
}

//logic to Drill down on Click of the Item in a pie Chart
function drillDown(item)
{
	pieChart.updateSeries("Series A",item);
	pieChart.render();
	legend.refresh();
}
