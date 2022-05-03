var tableData = document.querySelector('table');
var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var city = document.getElementById('city');
var country = document.getElementById('country');
var tableRow = document.getElementById('tableRow');
var pushDataToBottom = document.getElementById('addDataToBottom');
var pushDataToTop = document.getElementById('addDataToTop');
var tableArray = [];

for (var i = 1; i < tableData.rows.length; i++) {
    tableArray.push({
        firstName: tableData.rows[i].cells[1].innerText,
        lastName: tableData.rows[i].cells[2].innerText,
        City: tableData.rows[i].cells[3].innerText,
        Country: tableData.rows[i].cells[4].innerText,

    })
}
// push data to top
pushDataToTop.addEventListener('click', function () {
    if (firstName.value.length === 0 || lastName.value.length === 0 || city.value.length === 0 || country.value.length === 0) {
        alert("Enter The Text !!");
    } else {
        const obj = {
            firstName: firstName.value,
            lastName: lastName.value,
            City: city.value,
            Country: country.value
        }
        tableArray.unshift(obj);
        fillTable();
        firstName.value = "";
        lastName.value = "";
        city.value = "";
        country.value = "";

    }



})

// push data to bottom
pushDataToBottom.addEventListener('click', function () {
    if (firstName.value.length === 0 || lastName.value.length === 0 || city.value.length === 0 || country.value.length === 0) {
        alert("Enter The Text !!");
    } else {
        const obj = {
            firstName: firstName.value,
            lastName: lastName.value,
            City: city.value,
            Country: country.value
        }
        tableArray.push(obj);
        firstName.value = "";
        lastName.value = "";
        city.value = "";
        country.value = "";
        fillTable();
    }


});

// fill table
function fillTable() {
    tableRow.innerHTML = "";
    for (var i = 0; i < tableArray.length; i++) {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${i}</td>
                   <td>${tableArray[i].firstName}</td>
                   <td>${tableArray[i].lastName}</td>
                   <td>${tableArray[i].City}</td>
                   <td>${tableArray[i].Country}</td>`
        tableRow.appendChild(row);
    }

}

// deleting row from bottom
deleteRowFromBottom.addEventListener('click', function () {
    var lastIndex = tableArray.length - 1;
    tableArray.pop(lastIndex);
    fillTable();

});
// deleting row from top
deleteRowFromTop.addEventListener('click' , function(){
    var firstIndex = 0;
    tableArray.shift(firstIndex);
    fillTable();
})