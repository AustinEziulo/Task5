var internName = "Eziulo Austin";
let taskOne = 7;
let taskTwo = 10;
let taskThree = 9;
const totalScore = (taskOne + taskTwo + taskThree);
const averageScore = (totalScore / 3);

const average = averageScore;
let grade;
if (average>=9) {
    grade = "A";
} else if (average>=8) {
    grade = "B";
} else if (average>=7) {
    grade = "C";
} else if (average>=6) {
    grade = "D";
} else if (average<6) {
    grade = "E";
}

let feedback;
switch (grade) {
  case "A":
    feedback="Excellent performance!";
    break;
  case "B":
    feedback="Great job! Keep aiming high.";
    break;
  case "C":
    feedback="Good effort. Try to improve.";
    break;
  case "D":
    feedback="You're close. Keep working at it.";
    break;
  case "E":
    feedback="Don't give up. You can do better next time.";
    break;
  default:
    feedback="Invalid grade";
}

console.log(`Student Name: ${internName} \nTask One Score: ${taskOne} \nTask Two Score: ${taskTwo} \nTask Three Score: ${taskThree} \nAverage: ${average.toFixed(2)} \nFinal Grade: ${grade} \nMessage: ${feedback}`)