let EmployeeRecords = [
    {
        "nin": "ZS502747A", "name": "Chris P Bacon", "phone": "07659-831024", "address":
            "123 Bread Slice", "department": "IT"
    },
    {
        "nin": "XS130502B", "name": "Miles A Head", "phone": "07666-616680", "address":
            "321 Haha Road", "department": "Sales"
    },
    {
        "nin": "MY034526D", "name": "Rick O'Shea", "phone": "07440-003065", "address":
            "64 Zoo Lane", "department": "HR"
    },
    {
        "nin": "AK311470", "name": "Robyn Banks", "phone": "07342-472921", "address":
            "324 Langton Ridgeway", "department": "HR"
    },
    {
        "nin": "LY682275B", "name": "Lorne Mowers", "phone": "07822-821023", "address":
            "234 Julian Market", "department": "IT"
    },
    {
        "nin": "BK227215B", "name": "Frank N Stein", "phone": "07661-522545", "address":
            "12 Springfield Grange", "department": "Sales"
    },
    {
        "nin": "MY501327A", "name": "Upton O Goode", "phone": "07401-414740", "address":
            "54 Blackbird Crescent", "department": "IT"
    },
    {
        "nin": "TT405395B", "name": "Marius Quick", "phone": "07870-297789", "address":
            "98 Earl Path", "department": "IT"
    },
    {
        "nin": "AZ764036A", "name": "Max E Mumm", "phone": "07872-642897", "address":
            "233 Lady Smith Avenue", "department": "IT"
    },
    {
        "nin": "ES73841C", "name": "Yul B Allwright", "phone": "07750-872412", "address":
            "45 Fountains Broadway", "department": "Sales"
    },
    {
        "nin": "WX465470A", "name": "Lori Driver", "phone": "07773-782275", "address":
            "65 Burlington Lodge", "department": "HR"
    },
    {
        "nin": "AK625470D", "name": "Shirley U Care", "phone": "07569-060117", "address":
            "97 Holderness Drive", "department": "HR"
    },
    {
        "nin": "SW098272B", "name": "Felix Cited", "phone": "07394-529507", "address":
            "32 Banningham Court", "department": "Sales"
    },
    {
        "nin": "OB043941D", "name": "Sandy Beech", "phone": "07958-301691", "address":
            "3 Third Mount", "department": "Sales"
    }
]

let Reftable = document.createElement("table");

function updateRecord(ref, index) {
    ref.cells[0].innerHTML = "<input id='Employee Number' type='text' value='" + EmployeeRecords[index].nin + "'>";
    ref.cells[1].innerHTML = "<input id='Employee Name' type='text' value='" + EmployeeRecords[index].name + "'>";
    ref.cells[2].innerHTML = "<input id='Employee Phone' type='text' value='" + EmployeeRecords[index].phone + "'>";
    ref.cells[3].innerHTML = "<input id='Employee Address' type='text' value='" + EmployeeRecords[index].address + "'>";

    ref.cells[4].innerHTML = "<select id='Employee Department'> " +
        "<option value='HR'> HR Department</option>" +
        "<option value='IT'> IT Department</option>" +
        "<option value='Sales'>Sales Department</option>" +
        "</select>";
}

function addRecord() {
    EmployeeRecords.push(
        {
            "nin": document.getElementById("enin").value,
            "name": document.getElementById("name").value,
            "phone": document.getElementById("phone").value,
            "address": document.getElementById("address").value,
            "department": document.getElementById("department").value
        }
    )
}

function showRecords(List) {

    Reftable.innerHTML = "";
    let Trow = document.createElement("tr");
    let TD_nin = document.createElement("td");
    let TD_name = document.createElement("td");
    let TD_phone = document.createElement("td");
    let TD_address = document.createElement("td");
    let TD_department = document.createElement("td");
    let TD_edit = document.createElement("td");

    TD_nin.innerHTML = "<b> NI Number </b>";
    TD_name.innerHTML = "<b> Name </b>";
    TD_phone.innerHTML = "<b> Phone </b>";
    TD_address.innerHTML = "<b> Address </br>";
    TD_department.innerHTML = "<b> Department </b>";
    TD_edit.innerHTML = "<b> Edit </b>";

    Trow.appendChild(TD_nin);
    Trow.appendChild(TD_name);
    Trow.appendChild(TD_phone);
    Trow.appendChild(TD_address);
    Trow.appendChild(TD_department);
    Trow.appendChild(TD_edit);

    Reftable.appendChild(Trow);

    for (let i = 0; i < EmployeeRecords.length; i++) {
        if (EmployeeRecords[i].department == document.getElementById("department").value || List) {
            let Trow = document.createElement("tr");
            Trow.style.backgroundColor = "lightgrey";

            let TD_nin = document.createElement("td");
            let TD_name = document.createElement("td");
            let TD_phone = document.createElement("td");
            let TD_address = document.createElement("td");
            let TD_department = document.createElement("td");
            let TD_edit = document.createElement("td");

            TD_nin.innerHTML = EmployeeRecords[i].nin;
            TD_name.innerHTML = EmployeeRecords[i].name;
            TD_phone.innerHTML = EmployeeRecords[i].phone;
            TD_address.innerHTML = EmployeeRecords[i].address;
            TD_department.innerHTML = EmployeeRecords[i].department;

            let Btn_delete = document.createElement("input");
            Btn_delete.type = "button";
            Btn_delete.value = "delete";
            Btn_delete.onclick = function () {

                let choice = confirm("Please confirm that you want to delete the record");
                if (choice == true) {
                    EmployeeRecords.splice(i, 1);
                    showRecords(List);
                }
            };
            let Btn_update = document.createElement("input");
            Btn_update.type = "button";
            Btn_update.value = "update";
            Btn_update.onclick = function () {
                if (Btn_update.value == "update") {
                    Btn_update.value = "Save";
                    updateRecord(Trow, i);
                } else {
                    let ch = confirm("Please confirm this update.");
                    if (ch == true) {
                        EmployeeRecords[i].nin = document.getElementById("Employee Number").value;
                        EmployeeRecords[i].name = document.getElementById("Employee Name").value;
                        EmployeeRecords[i].phone = document.getElementById("Employee Phone").value;
                        EmployeeRecords[i].address = document.getElementById("Employee Address").value;
                        EmployeeRecords[i].department = document.getElementById("Employee Department").value;
                    }
                    showRecords(List);
                    Btn_update.value = "Update";
                }
            };
            TD_edit.appendChild(Btn_delete);
            TD_edit.appendChild(Btn_update);

            Trow.appendChild(TD_nin);
            Trow.appendChild(TD_name);
            Trow.appendChild(TD_phone);
            Trow.appendChild(TD_address);
            Trow.appendChild(TD_department);
            Trow.appendChild(TD_edit);

            Reftable.appendChild(Trow);
        }
    }
    document.body.appendChild(Reftable);
}
function check() {
    if (document.getElementById("nin").value == "") {
        document.getElementById("Employee Number").style.visibility = "visible";
    }
    else {
        document.getElementById("Employee Number").style.visibility = "hidden";
    }
    if (document.getElementById("name").value == "") {
        document.getElementById("Employee Name").style.visibility = "visible"
    }
    else {
        document.getElementById("Employee Name").style.visibility = "hidden";
    }
    if (document.getElementById("phone").value == "") {
        document.getElementById("Employee Phone").style.visibility = "visible"
    }
    else {
        document.getElementById("Employee Phone").style.visibility = "hidden";
    }
    if (document.getElementById("address").value == "") {
        document.getElementById("Employee Address").style.visibility = "visible"
    }
    else {
        document.getElementById("Employee Address").style.visibility = "hidden";
    }
    if (document.getElementById("department").value == "") {
        document.getElementById("Employee Department").style.visibility = "visible"
    }
    else {
        document.getElementById("Employee Department").style.visibility = "hidden";
    }
    if (choice == true) {
        addRecord()
    }
    else {
        document.getElementById().style."color:red", "*Please add a value";
}
