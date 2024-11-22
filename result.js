// Get the stored student data from localStorage
const studentName = localStorage.getItem("studentName");
const subjects = JSON.parse(localStorage.getItem("subjects"));
const percentage = localStorage.getItem("percentage");

// Ensure all data is valid and string format for doc.text()
const studentNameStr = String(studentName);
const percentageStr = String(percentage);

// Display the student name
document.getElementById("student-name-result").textContent = `Student: ${studentNameStr}`;

// Get the table body element
const tableBody = document.getElementById("marks-table").getElementsByTagName('tbody')[0];

// Add rows to the table dynamically
subjects.forEach(subject => {
    let row = tableBody.insertRow();
    row.insertCell(0).innerText = subject.name;
    row.insertCell(1).innerText = subject.obtained;
    row.insertCell(2).innerText = subject.total;
});

// Display the percentage
document.getElementById("percentage").innerText = percentageStr;

// PDF Download Functionality
document.getElementById('download-pdf').addEventListener('click', function () {
    const { jsPDF } = window.jspdf; // Access jsPDF from window.jspdf

    const doc = new jsPDF();

    // Set font for the document
    doc.setFont("helvetica", "normal");

    // Title
    doc.text(`Student Name: ${studentNameStr}`, 10, 20);

    let y = 30;
    
    // Table Header
    doc.setFontSize(12);
    doc.setTextColor(255, 255, 255);  // Set header text color
    doc.setFillColor(0, 102, 204);    // Set header background color
    doc.rect(10, y, 180, 10, 'F');    // Draw the background for header
    doc.text('Subject Name', 12, y + 6);
    doc.text('Obtained Marks', 70, y + 6);
    doc.text('Total Marks', 150, y + 6);
    
    y += 12; // Move to the next row

    // Table Rows
    subjects.forEach(subject => {
        doc.setFontSize(10);
        
        // Set alternate row colors
        if (y % 2 === 0) {
            doc.setFillColor(240, 240, 240);  // Light grey for alternating rows
        } else {
            doc.setFillColor(255, 255, 255);  // White for rows
        }
        doc.rect(10, y, 180, 8, 'F');  // Draw the background for row
        
        // Ensure all data is string for doc.text()
        const subjectName = String(subject.name);
        const obtainedMarks = String(subject.obtained);
        const totalMarks = String(subject.total);

        // Set text color and content for each cell
        doc.setTextColor(0, 0, 0); // Set text color to black for the rows
        doc.text(subjectName, 12, y + 5);
        doc.text(obtainedMarks, 70, y + 5);
        doc.text(totalMarks, 150, y + 5);

        y += 10; // Move to the next row
    });

    // Add a footer with the percentage
    doc.setFontSize(12);
    doc.text(`Percentage: ${percentageStr}%`, 10, y + 10);

    // Save the generated PDF with the student's name
    doc.save(`${studentNameStr}_Result.pdf`);
});
