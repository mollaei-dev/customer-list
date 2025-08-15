"use strict";
let btn = document.getElementsByTagName("button");
let tbl = document.getElementById("customerList");
let boxes = tbl.getElementsByTagName("input");
let checkAll = document.getElementById("chkAll");
let selectedRow;
let editState = false;

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

    // Highlight rows on hover
    if (!editState) {
      row.onmouseover = function () {
        this.style.backgroundColor = "#3b3a2bff";
      };
      row.onmouseout = function () {
        this.style.backgroundColor = "#161616";
      };
    }
  } else {
    selectedRow.childNodes[1].innerHTML = fname;
    selectedRow.childNodes[2].innerHTML = lname;
    selectedRow.childNodes[3].innerHTML = phone;
    btn[0].innerHTML = "Add";

    selectedRow.onmouseover = function () {
      this.style.backgroundColor = "#3b3a2bff";
    };
    selectedRow.onmouseout = function () {
      this.style.backgroundColor = "#161616";
    };

    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("phone").value = "";

    selectedRow.style.backgroundColor = "#161616";
    editState = false;
  }
});

//delete selected row :
btn[1].addEventListener("click", function () {
  for (let i = 0; i < boxes.length; )
    if (boxes[i].checked) tbl.removeChild(boxes[i].parentNode.parentNode);
    else i++;
  checkAll.checked = "";
});

//chkAll click :
checkAll.addEventListener("click", function () {
  if (checkAll.checked)
    for (let i = boxes.length - 1; i >= 0; i--) boxes[i].checked = "checked";
  else for (let i = boxes.length - 1; i >= 0; i--) boxes[i].checked = "";
});

//checkbox click :
function chk_click(chk) {
  let rowCheckboxes = tbl.querySelectorAll("tr td input[type='checkbox']");

  if (!chk.checked) {
    checkAll.checked = false;
    return;
  }

  let allChecked = true;
  rowCheckboxes.forEach((cb) => {
    if (!cb.checked) allChecked = false;
  });

  checkAll.checked = allChecked;
}

//delete current row :
function deleteRow(row) {
  tbl.removeChild(row);
}

//Edit current row :
function editRow(x) {
  document.getElementById("fname").value = x.childNodes[1].innerHTML;
  document.getElementById("lname").value = x.childNodes[2].innerHTML;
  document.getElementById("phone").value = x.childNodes[3].innerHTML;
  btn[0].innerHTML = "Modify";

  selectedRow = x;
  x.style.backgroundColor = "#646140ff";

  x.onmouseover = null;
  x.onmouseout = function () {
    x.style.backgroundColor = "#646140ff";
  };

  editState = true;
}
