const addBtn = document.querySelector('.addBtn');
const tableBody = document.querySelector('#todoTable tbody');
let nextId = 1;

function createRow(name, surname, age) {
  const row = document.createElement('tr');
  row.id = `row${nextId++}`;

  const idCell = document.createElement('td');
  idCell.textContent = row.id.slice(3);
  row.appendChild(idCell);

  const nameCell = document.createElement('td');
  nameCell.contentEditable = 'true';
  nameCell.textContent = name || '';
  row.appendChild(nameCell);

  const surnameCell = document.createElement('td');
  surnameCell.contentEditable = 'true';
  surnameCell.textContent = surname || '';
  row.appendChild(surnameCell);

  const ageCell = document.createElement('td');
  ageCell.contentEditable = 'true';
  ageCell.textContent = age || '';
  row.appendChild(ageCell);

  const actionsCell = document.createElement('td');
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Sil';
  deleteBtn.addEventListener('click', () => removeRow(row));
  actionsCell.append(deleteBtn);
  row.append(actionsCell);

  return row;
}

function appendRowToTable(row) {
  tableBody.appendChild(row);
}

function insertNewRow() {
  const name = prompt('Enter Name');
  const surname = prompt('Enter Surname');
  const age = parseInt(prompt('Enter Age'));

  if (!isNaN(age)) {
    const row = createRow(name, surname, age);
    appendRowToTable(row);
  } else {
    alert('Invalid Age');
  }
}

function removeRow(row) {
  tableBody.removeChild(row);
}

addBtn.addEventListener('click', insertNewRow);