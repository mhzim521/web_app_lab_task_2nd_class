// 1. Element Selectors
const projectForm = document.getElementById('projectForm');
const studentIdInput = document.getElementById('studentId');
const projectNameInput = document.getElementById('projectName');
const projectTechSelect = document.getElementById('projectTech');
const tableBody = document.getElementById('tableBody');

// Error Selectors
const studentIdError = document.getElementById('studentIdError');
const nameError = document.getElementById('nameError');
const techError = document.getElementById('techError');

// 2. Event Listener for Form Submission
projectForm.addEventListener('submit', function (event) {
    // Prevent default browser form refresh behavior
    event.preventDefault();

    // Fetch and sanitize string values
    const studentIdValue = studentIdInput.value.trim();
    const nameValue = projectNameInput.value.trim();
    const techValue = projectTechSelect.value;

    let isValid = true;

    // 3. Complete Form Validation Suite
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

    // 4. Update UI State if validation passes
    if (isValid) {
        addProjectToTable(studentIdValue, nameValue, techValue);
        
        // Reset form inputs completely
        projectForm.reset();
    }
});

// 5. DOM Manipulation: Build and Inject structural row components
function addProjectToTable(studentId, name, tech) {
    // Create parent row element
    const row = document.createElement('tr');

    // Column 1: Student ID
    const idCell = document.createElement('td');
    idCell.textContent = studentId;
    row.appendChild(idCell);

    // Column 2: Project Name
    const nameCell = document.createElement('td');
    nameCell.textContent = name;
    row.appendChild(nameCell);

    // Column 3: Technology Platform
    const techCell = document.createElement('td');
    techCell.textContent = tech;
    row.appendChild(techCell);

    // Column 4: Status Indicator Badge
    const statusCell = document.createElement('td');
    statusCell.innerHTML = `<span class="status-badge">Active</span>`;
    row.appendChild(statusCell);

    // Column 5: Action Button Element Container
    const actionCell = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Dismiss';
    deleteBtn.className = 'action-btn';
    
    // Attach deletion behavior directly to row scoping instance
    deleteBtn.addEventListener('click', function () {
        row.remove();
    });

    actionCell.appendChild(deleteBtn);
    row.appendChild(actionCell);

    // Final Node Step: Render complete structured row into view body
    tableBody.appendChild(row);
}