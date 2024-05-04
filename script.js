let expense = [];

const expenseDetails = document.querySelector('form');
const amount = document.querySelector('#amount');
const description = document.querySelector('#description');
const category = document.querySelector('#category');

expenseDetails.addEventListener('submit', (e) => {
  e.preventDefault();
  const list = document.querySelector('ul');
  const li = document.createElement('li');
  const span = document.createElement('span');
  const deleteBtn = document.createElement('button');
  const editBtn = document.createElement('button');

  deleteBtn.id = 'delete';
  editBtn.id = 'edit';

  if (amount.value == '' || description.value == '') return;

  const userExpenses = {
    amount: amount.value,
    description: description.value,
    category: category.value,
  };

  expense.push(userExpenses);

  localStorage.setItem('user expenses', JSON.stringify(expense));

  deleteBtn.innerText = 'Delete';
  editBtn.innerText = 'Edit';

  const users = localStorage.getItem('user expenses');
  console.log(users);

  JSON.parse(users).forEach((user) => {
    span.innerText = `${user.amount} ${user.description} ${user.category}`;
    li.append(span);
    li.append(deleteBtn);
    li.append(editBtn);
    list.append(li);
  });

  deleteBtn.addEventListener('click', (e) => {
    list.removeChild(li);
    console.log();
  });

  amount.value = '';
  description.value = '';
});
