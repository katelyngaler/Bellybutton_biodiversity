d3.json("samples.json").then(function(data){
    console.log("hello testing");
    console.log(data);
});

// show sorted and filtered wash frequency
// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b - a);
//     filteredWfreq = wfreq.filter(element => element != null);
//     console.log(filteredWfreq);
// });


//print key value pairs
// console.log(Object.entries(researcher1));

// print trait and property

// researcher1.forEach(([first, second]) => console.log(first + ": " + second));


// print data for first person
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});