function addTask() {
  const input = document.getElementById('taskInput');
  const text = input.value.trim();
  if (!text) return;

  const now = new Date();
  const timeString = now.toLocaleString('id-ID');

  const tableBody = document.getElementById('taskBody');
  const row = document.createElement('tr');

  const timeCol = document.createElement('td');
  timeCol.textContent = timeString;

  const taskCol = document.createElement('td');
  taskCol.textContent = text;
  taskCol.style.cursor = 'pointer';

  taskCol.addEventListener('click', () => {
    taskCol.classList.toggle('text-decoration-line-through');
    taskCol.classList.toggle('text-muted');
  });

  const actionCol = document.createElement('td');

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.className = 'btn btn-sm btn-outline-secondary me-2';
  editBtn.onclick = () => {
    const newText = prompt('Edit tugas:', taskCol.textContent);
    if (newText !== null && newText.trim() !== '') {
      taskCol.textContent = newText.trim();
    }
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Hapus';
  deleteBtn.className = 'btn btn-sm btn-outline-danger';
  deleteBtn.onclick = () => row.remove();

  actionCol.appendChild(editBtn);
  actionCol.appendChild(deleteBtn);

  row.appendChild(timeCol);
  row.appendChild(taskCol);
  row.appendChild(actionCol);

  tableBody.appendChild(row);
  input.value = '';
}
