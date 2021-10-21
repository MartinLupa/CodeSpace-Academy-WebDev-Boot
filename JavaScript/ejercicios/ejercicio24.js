var prompt = require('prompt-sync')();

let studentName;
let studentList = [];

do {
  studentName = prompt('Student name: ');
  let practical = parseInt(prompt('Practical grade:'));
  let problemSolving = parseInt(prompt('Problem solving grade:'));
  let theory = parseInt(prompt('Theory grade:'));
  let finalGrade = 0.1 * practical + 0.5 * problemSolving + 0.4 * theory;

  let student = {
    name: studentName,
    grades: { pr: practical, prblm: problemSolving, th: theory },
  };
  studentList.push(student);
  for (i=0; )
  console.log(studentList);
  console.log();
} while (studentName != ' ');
