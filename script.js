document.getElementById("calculate-button").addEventListener("click", function() {
    // Get the total marks for each subject
    let totalMarksPerSubject = parseFloat(document.getElementById("total-marks").value);

    // Get the obtained marks and subject names for each subject
    let subjects = [
        { name: document.getElementById("subjectName-1").value, obtained: parseFloat(document.getElementById("subject1-obtained").value) },
        { name: document.getElementById("subjectName-2").value, obtained: parseFloat(document.getElementById("subject2-obtained").value) },
        { name: document.getElementById("subjectName-3").value, obtained: parseFloat(document.getElementById("subject3-obtained").value) },
        { name: document.getElementById("subjectName-4").value, obtained: parseFloat(document.getElementById("subject4-obtained").value) },
        { name: document.getElementById("subjectName-5").value, obtained: parseFloat(document.getElementById("subject5-obtained").value) }
    ];

    // Get student name
    let studentName = document.getElementById("student-name").value;

    // Validate input data
    if (isNaN(totalMarksPerSubject) || totalMarksPerSubject <= 0) {
        alert("Please enter a valid total marks for each subject.");
        return;
    }

    if (subjects.some(subject => isNaN(subject.obtained) || subject.name.trim() === "")) {
        alert("Please enter valid subject names and obtained marks for all subjects.");
        return;
    }

    // Calculate total obtained marks
    let totalObtained = subjects.reduce((acc, subject) => acc + subject.obtained, 0);

    // Calculate total maximum marks (5 subjects * total marks per subject)
    let totalMax = 5 * totalMarksPerSubject;

    // Calculate percentage
    let percentage = (totalObtained / totalMax) * 100;

    // Store the results in localStorage
    localStorage.setItem("studentName", studentName);
    localStorage.setItem("totalMarks", totalMarksPerSubject);
    localStorage.setItem("subjects", JSON.stringify(subjects));
    localStorage.setItem("percentage", percentage.toFixed(2));

    // Redirect to the results page
    window.location.href = "result.html";
});
