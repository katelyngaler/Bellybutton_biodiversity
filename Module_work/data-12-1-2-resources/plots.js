// Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);



// Plotly.newPlot(“plotArea”, [{x:[5,10,15],y:[10,20,30]}]);

// Plotly.newPlot("plotArea", [{x:[2,4,6,8],y:[4,8,12,16]}]);

// var trace = {
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
//  };

//  var layout = {
//      title: "Luncheon Survey",
//      xaxis: {title: "Food Option"},
//      yaxis: {title: "Number of Respondents"}
//  };
//  Plotly.newPlot("plotArea", [trace], layout);

//  var trace = {
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "bar"
//  };

//  var layout = {
//      title: "Drink Selection",
//      xaxis: {title: "Drink Type"},
//      yaxis: {title: "Percent of Drinks Ordered"}
//  };
//  Plotly.newPlot("plotArea", [trace], layout);

//  var trace = {
//     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "pie"
//  };

//  var data = [trace];


//  var layout = {
//      title: "'Pie' Chart",

//  };
//  Plotly.newPlot("plotArea", data, layout);

var trace = {
    x: [5, 8, 20],
    y: [10, 18, 5],
    mode: 'markers',
    type: "scatter"
 };

 var layout = {
     title: "Random Scatter",
     xaxis: {title: "X option"},
     yaxis: {title: "y option"}
 };

 var data = [trace];

 Plotly.newPlot("plotArea", data, layout);