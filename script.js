var selectRow = null;
function onFormSubmit(e) {
    event.preventDefault();
    var formData = readFormData();

    if (selectRow === null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }
    resetForm();


}
function readFormData() {
    var formData = {};
    formData["nama"] = document.getElementById("nama").value;
    formData["nis"] = document.getElementById("nis").value;
    formData["jurusan"] = document.getElementById("jurusan").value;
    return formData;

}
function insertNewRecord(data) {
    var table = document.getElementById("studylist").getElementsByTagName('tbody')[0]
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0)
    cell1.innerHTML = data.nama;
    var cell2 = newRow.insertCell(1)
    cell2.innerHTML = data.nis;
    var cell3 = newRow.insertCell(2)
    cell3.innerHTML = data.jurusan;
    var cell4 = newRow.insertCell(3)
    cell4.innerHTML = `<button onClick='onEdit(this)'>Edit</button>
    <button onClick= 'onDelete(this)'>Delete</button>`;
}

function onEdit(td) {
    selectRow = td.parentElement.parentElement;
    document.getElementById('nama').value = selectRow.cells[0].innerHTML;
    document.getElementById('nis').value = selectRow.cells[1].innerHTML;
    document.getElementById('jurusan').value = selectRow.cells[2].innerHTML;
}
function updateRecord(formData) {
    selectRow.cells[0].innerHTML = formData.nama;
    selectRow.cells[1].innerHTML = formData.nis;
    selectRow.cells[2].innerHTML = formData.jurusan;
}

//delete
function onDelete(td) {
    if (confirm('Yakin anda ingin menghapus data ini ?')) {
        row = td.parentElement.parentElement;
        document.getElementById('studylist').deleteRow(row.rowIndex)
    }
    resetForm();
}

//reset data
function resetForm() {
    document.getElementById('nama').value = '';
    document.getElementById('nis').value = '';
    document.getElementById('jurusan').value = '';
}
