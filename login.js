 
const newStudentBtn = document.getElementById('newStudentBtn');
const existingStudentBtn = document.getElementById('existingStudentBtn');
const formContainer = document.getElementById('formContainer');

newStudentBtn.addEventListener('click', () => {
  displayNewStudentForm();
});

existingStudentBtn.addEventListener('click', () => {
  displayExistingStudentForm();
});

function displayNewStudentForm() {
  formContainer.innerHTML = `
    <form id="newStudentForm">
      <label for="name">Name:</label><br>
    <input type="text" id="name" name="name"><br>
      <label for="gender">Gender:</label><br>
      <select id="gender" name="gender" required>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select><br>
      <label for="faculty">Faculty:</label><br>
      <input type="text" id="faculty" name="faculty" required><br>
      <label for="email">Email:</label><br>
      <input type="email" id="email" name="email" required><br>
      <label for="Password">New Password:</label><br>
      <input type="text" id="password" name="password"><br>
      <input type="submit" value="Submit">
    </form>
  `;
  formContainer.style.display = 'block';

  const newStudentForm = document.getElementById('newStudentForm');
  newStudentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Submitted successfully! We will contact you soon.');
    newStudentForm.reset();
  });
}

function displayExistingStudentForm() {
  formContainer.innerHTML = `
    <form id="existingStudentForm">
      <label for="username">Username:</label><br>
      <input type="text" id="username" name="username" required><br>
      <label for="password">Password:</label><br>
      <input type="password" id="password" name="password" required><br>
      <input type="submit" value="Submit">
    </form>
  `;
  formContainer.style.display = 'block';

  const existingStudentForm = document.getElementById('existingStudentForm');
  existingStudentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Login successful.');
    existingStudentForm.reset();
  });
} 