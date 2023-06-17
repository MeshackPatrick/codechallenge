//user prompt to enter marks
const inputMarks=prompt(`Enter student  marks between 0 nad 100 :`);
const marks=inputMarks;
//checks grade and assign the grade appropriately
let grade;
if (marks > 79){
    grade = "A";
}
else if( marks >=60 && marks <=79){
    grade = "B";
}else if( marks >=50 && marks <=59){
    grade = "C";
}else if( marks >=40 && marks <=49){
    grade = "D";
}
else {
    grade = "E";
}
//output the grade
console.log(grade);