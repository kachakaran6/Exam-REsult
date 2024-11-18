import tkinter as tk
from tkinter import messagebox

# Function to calculate CGPA and Percentage
def calculate():
    try:
        # Get the obtained marks and total marks for each subject
        obtained_marks = [
            float(entry_obtained_subject1.get()), 
            float(entry_obtained_subject2.get()), 
            float(entry_obtained_subject3.get()), 
            float(entry_obtained_subject4.get()), 
            float(entry_obtained_subject5.get())
        ]
        
        total_marks = [
            float(entry_total_subject1.get()), 
            float(entry_total_subject2.get()), 
            float(entry_total_subject3.get()), 
            float(entry_total_subject4.get()), 
            float(entry_total_subject5.get())
        ]
        
        # Calculate total obtained marks and total maximum marks
        total_obtained = sum(obtained_marks)
        total_max = sum(total_marks)
        
        # # Calculate Percentage and CGPA
        percentage = (total_obtained / total_max) * 100
        # cgpa = total_obtained / len(obtained_marks)  # You can change this based on your CGPA system
        # %\nCGPA: {cgpa:.2f}

        # Display the result
        label_result.config(text=f"Percentage: {percentage:.2f}")
    except ValueError:
        messagebox.showerror("Invalid input", "Please enter valid marks and total marks for all subjects.")

# Create the main window
window = tk.Tk()
window.title("Student Result Calculator")

# Create input fields for Student Name
label_name = tk.Label(window, text="Student Name:")
label_name.pack()

entry_name = tk.Entry(window)
entry_name.pack()

# Create input fields for marks (obtained and total)
subjects = ["Subject 1", "Subject 2", "Subject 3", "Subject 4", "Subject 5"]

entry_obtained_subject1 = entry_total_subject1 = entry_obtained_subject2 = entry_total_subject2 = None
entry_obtained_subject3 = entry_total_subject3 = entry_obtained_subject4 = entry_total_subject4 = None
entry_obtained_subject5 = entry_total_subject5 = None

# Function to create labels and entry fields for each subject dynamically
def create_subject_input(subject_name, number):
    global entry_obtained_subject1, entry_total_subject1, entry_obtained_subject2, entry_total_subject2, entry_obtained_subject3, entry_total_subject3
    global entry_obtained_subject4, entry_total_subject4, entry_obtained_subject5, entry_total_subject5
    
    label_subject = tk.Label(window, text=f"Marks for {subject_name} (Obtained):")
    label_subject.pack()
    
    obtained_entry = tk.Entry(window)
    obtained_entry.pack()
    
    # Create label and entry for total marks
    label_total = tk.Label(window, text=f"Total Marks for {subject_name}:")
    label_total.pack()
    
    total_entry = tk.Entry(window)
    total_entry.pack()

    # Assign the entries to global variables based on the subject number
    if number == 1:
        entry_obtained_subject1 = obtained_entry
        entry_total_subject1 = total_entry
    elif number == 2:
        entry_obtained_subject2 = obtained_entry
        entry_total_subject2 = total_entry
    elif number == 3:
        entry_obtained_subject3 = obtained_entry
        entry_total_subject3 = total_entry
    elif number == 4:
        entry_obtained_subject4 = obtained_entry
        entry_total_subject4 = total_entry
    elif number == 5:
        entry_obtained_subject5 = obtained_entry
        entry_total_subject5 = total_entry

# Generate input fields for all subjects
for i, subject in enumerate(subjects, 1):
    create_subject_input(subject, i)

# Button to calculate CGPA and Percentage
btn_calculate = tk.Button(window, text="Calculate", command=calculate)
btn_calculate.pack()

# Label to display results
label_result = tk.Label(window, text="Result will be shown here.")
label_result.pack()

# Run the application
window.mainloop()
