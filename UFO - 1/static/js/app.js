// Variable for data.js
var tableData = data;

// YOUR CODE HERE!
// Setting up the table and putting data into the table


var $tbody = d3.select("tableBody");
var columns = ["datatime", "city", "state", "country", "shape", "durationMinutes", "comments"];
var inputDate = d3.select("#datetime");
var inputCity = d3.select("#city");
var button = d3.select("#filter-btn")

var inputData = (addData) => {
    addData.forEach(sighting => {
        var row = tableBody.append("tr");
        columns.forEach(column => row.append("td").text(sightings[column])
        )
    });
}

inputData(tableData);


// Creating an Event Listener for the Button

button.on("click", () => {

    d3.event.preventDefault();
    

    var inputDate = inputFieldDate.property("value").trim();
        console.log(inputDate)
    
    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    

    $tbody.html("");

    let response = {
        filterDate
    }


    if(response.filterDate.length !== 0) {
        addData(filterDate);
    }

    // Top if only works for filtering the date
    
        else {
            $tbody.append("tr").append("td").text("No Sightings Here...Move On...");
        }
})

// All of this code was writed with the help of Arazan, Laura and Helen