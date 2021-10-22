var prompt = require('prompt-sync')();

let studentName;

do {
  studentName = prompt('Introduce nombre del estudiante: ');
  if (studentName !== '') {
    let practiceGrade = parseInt(prompt('Nota práctica: '));
    let probSolvGrade = parseInt(prompt('Nota solución de problemas: '));
    let theoryGrade = parseInt(prompt('Nota teoría: '));

    if (
      practiceGrade < 0 ||
      practiceGrade > 10 ||
      probSolvGrade < 0 ||
      probSolvGrade > 10 ||
      theoryGrade < 0 ||
      theoryGrade > 10
    ) {
      console.log('Error. Introduzca nota entre 0 y 10.');
    } else {
      let finalGrade =
        0.1 * practiceGrade + 0.5 * probSolvGrade + 0.4 * theoryGrade;
      console.log(finalGrade);
    }
  }
} while (studentName !== '');

studentName = prompt('Introduce nombre del estudiante: ');

while (studentName != '') {
  let practiceGrade = parseInt(prompt('Nota práctica: '));
  let probSolvGrade = parseInt(prompt('Nota solución de problemas: '));
  let theoryGrade = parseInt(prompt('Nota teoría: '));

  if (
    practiceGrade < 0 ||
    practiceGrade > 10 ||
    probSolvGrade < 0 ||
    probSolvGrade > 10 ||
    theoryGrade < 0 ||
    theoryGrade > 10
  ) {
    console.log('Error. Introduzca nota entre 0 y 10.');
  } else {
    let finalGrade =
      0.1 * practiceGrade + 0.5 * probSolvGrade + 0.4 * theoryGrade;
    console.log(finalGrade);
  }
  studentName = prompt('Introduce nombre del estudiante: ');
}
