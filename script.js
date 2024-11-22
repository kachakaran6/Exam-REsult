// Initialize an array to store the subjects and their marks
let subjects = [];
let subjectCount = 0; // Keep track of the number of subjects entered

// Handle adding a subject to the array and updating the subject count
document.getElementById('add-subject').addEventListener('click', function() {
    // Get the student name and total marks
    const studentName = document.getElementById('student-name').value;
    const totalMarks = parseInt(document.getElementById('total-marks').value);
    
    // Get the subject name and obtained marks
    const subjectName = document.getElementById('subject-name').value;
    const obtainedMarks = parseInt(document.getElementById('subject-obtained').value);
    
    // If the fields are not empty, add the subject to the array
    if (subjectName && !isNaN(obtainedMarks)) {
        subjects.push({
            name: subjectName,
            obtained: obtainedMarks,
            total: totalMarks
        });

        // Increment the subject count
        subjectCount++;

        // Update the subject counter on the page
        document.getElementById('subject-counter').innerText = `Subjects Entered: ${subjectCount}`;

        // Reset input fields for next subject
        document.getElementById('subject-name').value = '';
        document.getElementById('subject-obtained').value = '';
    } else {
        alert("Please fill in both subject and obtained marks.");
    }
});

// Handle submitting the result
document.getElementById('submit-result').addEventListener('click', function() {
    // Get the student name and total marks
    const studentName = document.getElementById('student-name').value;
    
    // Calculate total obtained marks and total max marks
    const totalObtainedMarks = subjects.reduce((total, subject) => total + subject.obtained, 0);
    const totalMaxMarks = subjects.reduce((total, subject) => total + subject.total, 0);
    
    // Calculate percentage
    const percentage = ((totalObtainedMarks / totalMaxMarks) * 100).toFixed(2);

    // Store the student data in localStorage
    localStorage.setItem("studentName", studentName);
    localStorage.setItem("subjects", JSON.stringify(subjects));
    localStorage.setItem("percentage", percentage);

    // Redirect to result page
    window.location.href = 'result.html';  // Assuming your result page is named result.html
});
