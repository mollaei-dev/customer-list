"use strict";
let btn = document.getElementsByTagName("button");
let tbl = document.getElementById("customerList");

//add to table
btn[0].addEventListener("click", function () {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let phone = document.getElementById("phone").value;

  if (btn[0].innerHTML === "Add") {
    let row = document.createElement("tr");
    let cellChk = document.createElement("td");
    let cellName = document.createElement("td");
    let cellLname = document.createElement("td");
    let cellPhone = document.createElement("td");
    let cellOpt = document.createElement("td");
    cellName.innerHTML = fname;
    cellLname.innerHTML = lname;
    cellPhone.innerHTML = phone;

    let chk = document.createElement("input");
    chk.type = "checkbox";
    chk.onclick = function () {
      chk_click(this);
    };
    cellChk.appendChild(chk);

    //creat 'delete' $ 'edit' in operation :
    let delLink = document.createElement("a");
    delLink.href = "#";
    delLink.innerHTML = "Delete";
    delLink.onclick = function () {
      deleteRow(row);
    };

    let editLink = document.createElement("a");
    editLink.href = "#";
    editLink.innerHTML = "Edit";
    editLink.onclick = function () {
      editRow(row);
    };

    cellOpt.appendChild(delLink);
    cellOpt.appendChild(document.createTextNode(" | "));
    cellOpt.appendChild(editLink);

    row.appendChild(cellChk);
    row.appendChild(cellName);
    row.appendChild(cellLname);
    row.appendChild(cellPhone);
    row.appendChild(cellOpt);

    tbl.appendChild(row);

    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("phone").value = "";
  }
});
