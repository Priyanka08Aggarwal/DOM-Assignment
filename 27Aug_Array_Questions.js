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
