function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("static/js/samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("static/js/samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("static/js/samples.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
    var sampArray = data.samples;
    // console.log(data);
    
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var filteredArray = sampArray.filter(sampleObj => sampleObj.id == sample);

    //  5. Create a variable that holds the first sample in the array.
    var filt = filteredArray[0];
  
    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otu_ids = filt.otu_ids;
    var otu_labels = filt.otu_labels;
    var sample_values = filt.sample_values;

    //console.log(otu_ids);
    // Gauge
    var metaArray = data.metadata;
    var filteredMetaArray = metaArray.filter(x => x.id == sample);
    //console.log(filteredMetaArray[0]);
    var washFreq = parseFloat(filteredMetaArray[0]["wfreq"]);
    //console.log(washFreq);


    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 

    function toObject(list1, list2, list3) {
      var result = [];
      for (var i = 0; i < list1.length; i++)
           result.push({"otu_id": `OTU ${list1[i]}`, "otu_label":list2[i], "sample_value": list3[i]});
      return result;
    }

    var finalList = toObject(otu_ids, otu_labels, sample_values);

    finalList.sort((a,b) => a.sample_values - b.sample_values);
    var topTen = finalList.slice(0,10);
    // console.log(topTen);

    // var yticks = topTen.otu_ids.reverse()

    // 8. Create the trace for the bar chart. 
    var barData = [{
      x: topTen.map(bac => bac.sample_value).reverse(),
      y: topTen.map(bac => bac.otu_id).reverse(),
      type: 'bar',
      orientation: 'h',
      text: topTen.map(bac => bac.otu_label).reverse(),
      marker: {color: 'rgb(142,124,195)'}
    }
      
    ];
    // 9. Create the layout for the bar chart. 
    var barLayout = {
      title: "Top 10 Bacteria Cultures Found",
      xaxis: {title: 'Count'},
      yaxis: {title: 'Bacteria ID'},
      
     
    };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout);
    
    // 1. Create the trace for the bubble chart.
    var bubbleData = [{
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: 'markers',
      marker: {color: otu_ids, size: sample_values, colorscale: 'Picnic'}
    }

    ];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: "Bacteria Cultures Per Sample",
      xaxis: {title: "OTU ID"},
      yaxis: {title: "Culture Value"},
      hovermode: 'closest',
      margin: 'automargin'
      
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble", bubbleData, bubbleLayout); 


    // Gauge
    // 4. Create the trace for the gauge chart.
    var gaugeData = [{
      domain: { x: [0, 1], y: [0, 1] },
      value: washFreq,
      title: { text: "<b>Bellybutton Washing Frequency</b> <br> Scrubs per Week" },
      type: "indicator",
      mode: "gauge+number",
      gauge: {
        axis: { range: [null, 10] },
        bar: {color: "black"},
        steps: [
          { range: [0, 2], color: "maroon" },
          { range: [2, 4], color: "purple" },
          { range: [4, 6], color: "violet" },
          { range: [6, 8], color: "lavender" },
          { range: [8, 10], color: "lightblue" }

        ],
       }
    }
        
    ];

    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { width: 457, height: 450, margin: { t: 0, b: 0 } };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout);



  });
}
