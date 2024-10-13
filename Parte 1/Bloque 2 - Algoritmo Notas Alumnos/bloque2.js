

// Promedios de Alumnos

function getAverage(scores) {

    let sum = 0;
  
    for (let i=0; i < scores.length; i++) {
  
        sum = sum + scores[i];
    }

    let avg = 0;
    avg = sum / scores.length;
    return avg;
}
  
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));

console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));



// Algoritmo que determina que nota alfabetica se merece el alumno en base a su nota

function getGrade(score) {

    if (score === 100) {
  
      return "A++";
  
    } else if (score <= 99 && score >= 90) {
  
      return "A";
  
    } else if (score <= 89 && score >= 80) {
      
       return "B";
  
    } else if (score <= 79 && score >= 70) {
  
       return "C";
  
    } else if (score <= 69 && score >= 60) {
  
       return "D";
  
    } else {
  
       return "F";
    }
}
  
console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));


// Algoritmo que avisa rapido si pasa o no pasa el curso:

function hasPassingGrade(score) {

    return getGrade(score) !== "F";
    
}
  


// Algoritmo que automatiza mandar mensaje al alumno en base a sus notas

function studentMsg(totalScores, studentScore) {

    let average = getAverage(totalScores);
    let grade = getGrade(studentScore);
  
    return `Class average: ${average}. Your grade: ${grade}. You ${

    hasPassingGrade(studentScore) ? "passed" : "failed" } the course.`;
  }
  
// Prueba con un estudiante que falla
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
  