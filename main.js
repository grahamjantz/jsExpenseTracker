let itemInput = document.getElementById('itemInput');
let amountInput = document.getElementById('amountInput');
let dateInput = document.getElementById('dateInput');
let noteInput = document.getElementById('noteIn');
let addedExpenses = document.getElementById('addedExpenses');
let submitButton = document.getElementById('submitButton');




submitButton.addEventListener('click', function submitExpense () {
    let row = document.createElement('tr');
    let dateCell = document.createElement('td');
    let inputCell = document.createElement('td');
    let amountCell = document.createElement('td');
    let noteCell = document.createElement('td');
    let deleteButton = document.createElement('button');
    
    dateCell.innerHTML = dateInput.value;
    inputCell.innerHTML=itemInput.value;
    amountCell.innerHTML=amountInput.value;
    noteCell.innerHTML=noteInput.value;
    deleteButton.innerHTML = 'X';

    row.appendChild(dateCell);
    row.appendChild(inputCell);
    row.appendChild(noteCell);
    row.appendChild(amountCell);
    row.appendChild(deleteButton);

    addedExpenses.appendChild(row);
    itemInput.value = '';
    amountInput.value = '';
    dateInput.value = '';
    noteInput.value = '';
    deleteButton.addEventListener('click', function () {
        addedExpenses.removeChild(row);
    })
})