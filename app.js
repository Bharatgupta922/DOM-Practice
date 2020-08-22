function row() {
    document.getElementById("courses").deleteRow(-1);
}

function addrow() {
    var MyTable = document.getElementById("courses");
    var newRow = MyTable.insertRow(0);
    var Newcell1 = newRow.insertCell(0);
    var Newcell2 = newRow.insertCell(1);
    Newcell1.innerHTML = "placement";
    Newcell2.innerHTML = "sudo placement";
}