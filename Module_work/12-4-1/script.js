d3.selectAll("body").on("change", updatePage);

function updatePage() {
  var dropdownMenu = d3.selectAll("#selectOption").node();
  var dropdownMenuID = dropdownMenu.id;
  var selectedOption = dropdownMenu.value;
  // var selectedText = selectedOption.options[selectedOption.selectedIndex].text;
  
  console.log(dropdownMenuID);
  console.log(selectedOption);
  // cannot figure this out: console.log(selectedText);
};