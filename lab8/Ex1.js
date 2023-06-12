let student = {
    firstName: "",
    lastName: "",
    grades: [],
    inputNewGrade: function (newGrade) {
        this.grades.push(newGrade);
    },
    computeAverageGrade: function () {
        let sum = this.grades.reduce((total, grade) => total + grade, 0);
        return (sum / this.grades.length).toFixed(2);
    }
};

let student1 = Object.create(student);
student1.firstName = "John";
student1.lastName = "Doe";
student1.inputNewGrade(85);
student1.inputNewGrade(90);

let student2 = Object.create(student);
student2.firstName = "Alice";
student2.lastName = "Smith";
student2.inputNewGrade(92);
student2.inputNewGrade(88);

let student3 = Object.create(student);
student3.firstName = "Peter";
student3.lastName = "Johnson";
student3.inputNewGrade(78);
student3.inputNewGrade(82);

let studentsArray = [student1, student2, student3];

let averageGrades = [];
studentsArray.forEach(function (student) {
    averageGrades.push(student.computeAverageGrade());
});

console.log(averageGrades);