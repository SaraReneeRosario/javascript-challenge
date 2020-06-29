// All of this code was writed with the help of Arazan, Laura and Helen

// Starter Code
var tableData = data;

// Creating References
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

// Creating a listen and event protocol
// Setting up the Filter Button for Date and City
button.on("click", () => {

    d3.event.preventDefault();
    

    var inputDate = inputFieldDate.property("value").trim();
        console.log(inputDate)

    var inputCity = inputFieldCity.property("value").toLowerCase().trim();
    // console.log(inputCity)
    

    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    // console.log(filterDate)
    var filterCity = tableData.filter(tableData => tableData.city === inputCity);
    // console.log(filterCity)

    var filterCombinedData = tableData.filter(tableData => tableData.datetime === inputDate && tableData.city === inputCity);
    // console.log(filterCombinedData)

    $tbody.html("");

    let response = {
        filterDate, filterCity, filterCombinedData
    }

    // Creating a new Var for Combining multiple filters
    if(response.filterCombinedData.length !== 0) {
        addData(filterCombinedData);
    }

    // else if(response.filterCity.length !== 0){
    //     addData(filterCity);
    // }
        else if(response.filterCombinedData.length === 0 && ((response.filterDate.length !== 0 || response.filterCity.length !== 0))) {
            addData(filterDate) || addData(filterCity);
        }

        // else if(response.filterCombinedDateState.length === 0 && ((response.filterDate.length !== 0 || response.filterState.length !== 0))) {
        //     addData(filterDate) || addData(filterState);
        // }

        else {
            $tbody.append("tr").append("td").text("No Sightings Here...Move On...");
        }
})