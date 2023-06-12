class Student {
    constructor(studentId) {
        this.studentId = studentId;
        this.answers = [];
    }

    addAnswer(question) {
        this.answers.push(question);
    }
}

class Question {
    constructor(questionId, answer) {
        this.questionId = questionId;
        this.answer = answer;
    }
}

class Quiz {
    constructor(questions, students) {
        this.questions = questions;
        this.students = students;
    }

    scoreStudent(studentId) {
        const student = this.students.find((s) => s.studentId === studentId);

        if (!student) {
            console.log(`Student with ID ${studentId} not found.`);
            return;
        }

        let score = 0;
        for (const answer of student.answers) {
            const question = this.questions.find((q) => q.questionId === answer.questionId);
            if (question && question.answer === answer.answer) {
                score++;
            }
        }

        return score;
    }

    getAverageScore() {
        if (this.students.length === 0) {
            console.log("No students found.");
            return;
        }

        let totalScore = 0;

        for (const student of this.students) {
            let score = 0;
            for (const answer of student.answers) {
                const question = this.questions.find((q) => q.questionId === answer.questionId);
                if (question && question.answer === answer.answer) {
                    score++;
                }
            }
            totalScore += score;
        }

        const averageScore = totalScore / this.students.length;
        return averageScore;
    }
}

const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));
const students = [student1, student2];
const questions = [new Question(1, 'b'), new Question(2, 'a'), new
    Question(3, 'b')];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudent(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudent(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();