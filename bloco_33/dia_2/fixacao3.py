reproved_students = []

with open("students.txt", "r") as students:
    for line in students:
        student = line.split(" ")
        if int(student[1]) < 6:
            reproved_students.append(f"{student[0]}\n")


with open("reprovedStudents.txt", "w") as file:
    file.writelines(reproved_students)
