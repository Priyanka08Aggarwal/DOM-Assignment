//Question 1 :->
//Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with there type.
console.log("Solution of Question 1\n");
let stringDataType="Priyanka";
console.log(`Datatype of variable ${stringDataType} is ${typeof(stringDataType)}`);
let isPresent=true;
console.log(`Datatype of variable ${isPresent} is ${typeof(isPresent)}`);
let undefinedVariable;
console.log(`Datatype of variable ${undefinedVariable} is ${typeof(undefinedVariable)}`);
let nullDataType=null;
console.log(`Datatype of variable ${nullDataType} is ${typeof(nullDataType)}`);

//Question2 :->
// Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.
console.log("\nSolution of Question 2");
var firstName="Priyanka";
var lastName="Aggarwal";
var maritalStatus="Unmarried";
var country="India";
var age=25;
console.log(
    `
    First name is ${firstName}
    Last name is ${lastName}
    Marital Status is ${maritalStatus}
    Country is ${country}
    Age is ${age}
    `);

//Question3 :->
//3. Declare a varibale and assign value to it and change all the string characters to capital letters using toUpperCase() method.
console.log("\nSolution of Question 3\n");
let myName="priyanka";
console.log("Upper case of priyanka is "+myName.toUpperCase()+"\n");

//Question4 :->
// Check if the string contains a word Script using includes() method.
console.log("\nSolution of Question 4\n");
let includesTest="My name is Priyanka";
console.log(includesTest.includes("Script"));

//Question5 :->
//Split the string into an array using split() method
console.log("\nSolution of Question 5\n");
let text="Hello,How,are,you ?"
console.log(text.split(","));

//Question6 :->
//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
console.log("\nSolution of Question 6\n");
let textSplit="Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(textSplit.split(","));

//Question7:->
//Use lastIndexOf to determine the position of the last occurrence of a script.
console.log("\nSolution of Question 7\n");
let count=0;
let scriptText=["Script", "Logs", "Documents", "Script","Functions", "Modules", "Script"];
console.log(scriptText.lastIndexOf("Script"));

//Question8:->
//8. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.
console.log("\nSolution of Question 8\n");

let sentence="You cannot end a sentence with because because because is a conjunction";
let position=sentence.search("because");
console.log(position);

//Question9:->
//Use trim() to remove any trailing whitespace at the beginning and the end of a string.
console.log("\nSolution of Question 9\n");
let textTrim = "     Priyanka Aggarwal     ";
let result = textTrim.trim();
console.log(result);

//Question10:->
//Boolean value is either true or false. Write three JavaScript statement which provide truthy value.Write three JavaScript statement which provide falsy value.

console.log("\nSolution of Question 10\n");
//falsy values
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(''));
//truthy values
console.log(Boolean('hi'));
console.log(Boolean(1));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean([0]));

//Question11:->
//Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
/*- 4 > 3
- 4 >= 3
- 4 < 3
- 4 <= 3
- 4 == 4
- 4 === 4
- 4 != 4
- 4 !== 4
- 4 != '4'
- 4 == '4'
- 4 === '4'
- Find the length of python and jargon and make a falsy comparison statement.*/
console.log("\nSolution of Question 11\n");
console.log(4>3);
console.log(4>=3);
console.log(4<=3);
console.log(4<3);
console.log(4==4);
console.log(4===4);
console.log(4!=4);
console.log(4!==4);
console.log(4!='4');
console.log(4=='4');
console.log(4==='4');

//Question12:->
/* Use the Date object to do the following activities
    - What is the year today?
    - What is the month today as a number?
    - What is the date today?
    - What is the day today as a number?
    - What is the hours now?
    - What is the minutes now?
    - Find out the numbers of seconds elapsed from January 1, 1970 to now.
 */
console.log("\nSolution of Question 12\n");
let date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
let sec = new Date('January 1, 1970 05:35:32:11');
console.log(sec.getMilliseconds());

//Question13:->
//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

console.log("\nSolution of Question 13\n");
const prompt=require("prompt-sync")({sigint:true}); 
let base=prompt("Enter base of the triangle");
let height=prompt("Enter height of the triangle");
let area =0.5 * base * height; 
console.log("Area of a triangle is "+ area);

//Question14:->
 //Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
 console.log("\nSolution of Question 14\n");
function slope(x1, y1, x2, y2)
{
    if (x2 - x1 != 0)
    {
        return (y2 - y1) / (x2 - x1);
    }
    return Number.MAX_VALUE;
}

var x1 = 2;
var y1 = 2;
var x2 = 6;
var y2 = 10;
console.log("Slope is: " + slope(x1, y1, x2, y2));


// Question15:->
//  Calculate the slope, x-intercept and y-intercept of y = 2x -2
//  console.log("\nSolution of Question 15\n");

//Question16:->
//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
console.log("\nSolution of Question 16\n");
let radius=prompt("Enter radius of the circle");
let areaOfCircle=3.14*radius*radius;
let circum=2*3.14*radius;
console.log("Area and circumference of circle are "+ areaOfCircle +","+circum);

//Question17:->
/* Create a human readable time format using the Date time object
    - YYYY-MM-DD HH:mm
    - DD-MM-YYYY HH:mm
    - DD/MM/YYYY HH:mm */
console.log("\nSolution of Question 17\n");
console.log(new Date("2023-01-18"));
console.log(new Date("11-03-1999"));
console.log(new Date("03/25/2015"));

//Question18:->
//Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
console.log("\nSolution of Question 18\n");
var age=prompt("Enter your age");
if(age<18){
    let diff=18-age;
    console.log(`You need to wait for ${diff} years to get eligible`);
}
else{
    console.log("You are old enough to drive");
}
//Question19:->
//Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
console.log("\nSolution of Question 19\n");
let number=prompt("Enter any number");
if(number%2==0){
    console.log("Number is even");
}
else {
    console.log("Number is odd");
}

//Question20:->
/*Write a code which can give grades to students according to theirs scores:
- 80-100, A
- 70-89, B
- 60-69, C
- 50-59, D
- 0-49, F*/
console.log("\nSolution of Question 20\n");
let score=prompt("Enter your scores");
if(score>=80 && score<=100){
    console.log("Grade is A");
}
else if(score>=70 && score<=89){
    console.log("Grade is B");
}
else if(score>=60 && score<=69){
    console.log("Grade is C");
}
else if(score>=50 && score<=59){
    console.log("Grade is D");
}
else if(score>=00 && score<=49){
    console.log("Grade is F");
}
else {
    console.log("Wrong Input");
}
