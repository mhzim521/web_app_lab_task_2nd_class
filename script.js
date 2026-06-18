const projectForm = document.getElementById('projectForm');
const studentIdInput = document.getElementById('studentId');
const projectNameInput = document.getElementById('projectName');
const projectTechSelect = document.getElementById('projectTech');
const tableBody = document.getElementById('tableBody');

const studentIdError = document.getElementById('studentIdError');
const nameError = document.getElementById('nameError');
const techError = document.getElementById('techError');

projectForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const studentIdValue = studentIdInput.value.trim();
    const nameValue = projectNameInput.value.trim();
    const techValue = projectTechSelect.value;

    let isValid = true;

    if (studentIdValue === '') {
        studentIdError.textContent = 'Student ID is required.';
        isValid = false;
    } else {
        studentIdError.textContent = '';
    }

    if (nameValue === '') {
        nameError.textContent = 'Project Title is required.';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    if (techValue === '') {
        techError.textContent = 'Please select a core technology platform.';
        isValid = false;
    } else {
        techError.textContent = '';
    }

    if (isValid) {
        addProjectToTable(studentIdValue, nameValue, techValue);
        
        projectForm.reset();
    }
});

function addProjectToTable(studentId, name, tech) {
    const row = document.createElement('tr');

    const idCell = document.createElement('td');
    idCell.textContent = studentId;
    row.appendChild(idCell);

    const nameCell = document.createElement('td');
    nameCell.textContent = name;
    row.appendChild(nameCell);

    const techCell = document.createElement('td');
    techCell.textContent = tech;
    row.appendChild(techCell);

    const statusCell = document.createElement('td');
    statusCell.innerHTML = `<span class="status-badge">Active</span>`;
    row.appendChild(statusCell);

    const actionCell = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Dismiss';
    deleteBtn.className = 'action-btn';
    
    deleteBtn.addEventListener('click', function () {
        row.remove();
    });

    actionCell.appendChild(deleteBtn);
    row.appendChild(actionCell);

    // Final Node Step: Render complete structured row into view body
    tableBody.appendChild(row);
}
