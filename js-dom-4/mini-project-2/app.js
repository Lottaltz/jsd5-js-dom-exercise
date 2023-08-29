const tableRow = '';
const getData = document.querySelectorAll('.input-data').value;
const addDataRow = document.querySelector('.table-body');
const enterData = () => {
    for (let i = 0; i < getData.length; i++) {
        addDataRow.innerHTML += `<tr> <td>${getData[i]}</td> <td>${[i].value}</td> <td>${[i].value}</td> <td>${[i].value}</td> </tr>`
    }
}