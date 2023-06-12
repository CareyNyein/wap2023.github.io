function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = [];
}

Student.prototype.inputNewGrade = function (newGrade) {
    this.grades = [...this.grades, newGrade];
};

Student.prototype.computeAverageGrade = function () {
    let sum = this.grades.reduce((total, grade) => total + grade, 0);
    return sum / this.grades.length;
};

let student1 = new Student("John", "Doe");
student1.inputNewGrade(85);
student1.inputNewGrade(90);

let student2 = new Student("Alice", "Smith");
student2.inputNewGrade(92);
student2.inputNewGrade(88);

let student3 = new Student("Peter", "Johnson");
student3.inputNewGrade(78);
student3.inputNewGrade(82);

let studentsArray = [student1, student2, student3];

let averageGrades = [];
studentsArray.forEach(function (student) {
    averageGrades.push(student.computeAverageGrade());
});

console.log(averageGrades);