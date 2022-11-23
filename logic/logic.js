"use strict";

function GenerateTable(itemArr){
    let table = `<table>
    <tr class="first_row">
    <td>position</td>
    <td>Full Name (first name, last name)</td>
    <td>Gender</td>
    <td>Age</td>
    <td>Birth Year</td>
    <td>Job Title</td>
    </tr>
    `;

    itemArr.forEach((item, index) => {
        table += GenerateRow(item, index);
    });
    table += "</table>";

    document.querySelector(".tableContainer").innerHTML = table;
}

function GenerateRow(item, index){
    return `<tr>
    <td>${index + 1}</td>
    <td>${item.FirstName}, ${item.LastName}</td>
    <td>${item.Gender}</td>
    <td>${item.Age}</td>
    <td>${item.BirthYear}</td>
    <td>${item.JobTitle}</td>
    </tr>`;
}