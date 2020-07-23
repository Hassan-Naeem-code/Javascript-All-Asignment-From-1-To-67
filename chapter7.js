// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
var city = prompt('Enter THe Name Of Your City In PAKISTAN: ');
if(city == 'Karachi'){
    alert('Welcome To the CITY OF LIGHTS.');
}
// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
var gender = prompt('Enter Your Gender Here: ');
if(gender =='Male' || gender == 'male'){
    alert('Good Morning Sir...');
}
else if(gender == 'Female' || gender =='female'){
    alert("Good Morning Ma'am...");
}
else{
    alert('Please enter an appropiate GENDER here..');
}
// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
var trafficColorLight1 = prompt('Enter the color of TRAFFIC COLOR LIGHT 1: ');
var trafficColorLight2 = prompt('Enter the color of TRAFFIC COLOR LIGHT 2: ');
var trafficColorLight3 = prompt('Enter the color of TRAFFIC COLOR LIGHT 3: ');
document.write('<table cellspacing ="5" cellpadding="10" bgcolor="dodgerblue" border="5px"><tr><th>SINAL COLOR</th><th>MESSAGE</th></tr><tr><td>'+trafficColorLight1+'</td><td>MUST STOP</td></tr><tr><td>'+trafficColorLight2+'</td><td>Ready To Move</td></tr><tr><td>'+trafficColorLight3+'</td><td>MOVE NOW</td></tr></table>');
// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
var fuelOfCar = +prompt('Enter The Current Fuel Of Your Car: ');
if(fuelOfCar<=0.25){
    alert('Please! Immediately Re-Fill your Fuel as soon as possible..');
}
else{
    alert('Your Fuel In The Car is in good Condition...');
}
// 5. Run this script, & check whether alert message would be displayed or not. Record the output
var a = 4; 
if (++a === 5){ 
    alert("given condition for variable a is true"); 
}

var b = 82; 
if (b++ === 83){ 
    alert("given condition for variable b is true"); 
}

var c = 12;
 if (c++ === 13){ 
     alert("condition 1 is true");
 } 
 if (c === 13){ 
     alert("condition 2 is true"); 
} 
if (++c < 14){ 
    alert("condition 3 is true"); 
} 
if(c === 14){ 
    alert("condition 4 is true");
}

var materialCost = 20000;
 var laborCost = 2000; 
 var totalCost = materialCost + laborCost; 
 if (totalCost === laborCost + materialCost){ 
     alert("The cost equals"); 
}


if (true){ 
    alert("True"); 
} 
if (false){ 
    alert("False"); 
}


if("car" < "cat"){ 
    alert("car is smaller than cat");
}

// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:
var marksObtained1 = +prompt('Enter Your Obtained Number In Subject 1: ');
var marksObtained2 = +prompt('Enter Your Obtained Number In Subject 2: ');
var marksObtained3 = +prompt('Enter Your Obtained Number In Subject 3: ');
var totalMarks = 300;
var percentage = (marksObtained1+marksObtained2+marksObtained3*100)/totalMarks
document.write('<h1>MARKSHEET</h1>');
document.write('Marks Obtained: ',(marksObtained1+marksObtained2+marksObtained3));
document.write('<br/>');
document.write('Percentage: ',percentage);
if(percentage>=80){
    document.write('<br/>');
    document.write('Remarks: Excellent Well Done..');
}
else if(percentage>=70 && percentage<80){
    document.write('<br/>');
    document.write('Remarks: Good');
}
else if(percentage>=60 && percentage<70){
    document.write('<br/>');
    document.write('Remarks: You Need to improve..');
}
else{
    document.write('no use');
}
// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. a. If user guesses the same number, show “Bingo! Correct answer”. b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
var secretNumber = 5;
var num = +prompt('Enter a number here To Guesss the Secret Number: ');
if(secretNumber == num){
    alert('Bingo!...Correct Answer');
}
else{
    alert('Close enough To the Correct Answer..');
}
// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
var num = +prompt('Enter a number here I will tell you that It will be divisible by 3 or not: ');
if(num%3 == 0){
    alert("Your Entered Nummber Is Divisible By 3.");
}
else{
    alert('The Number is Not Divisible by 3.');
}
// 9. Write a program that checks whether the given input is an even number or an odd number.
var num = +prompt('Enter a number to check whether the number is EVEN or ODD: ');
if(num%2 == 0){
    alert('You Entered A Even Number.');
}
else{
    alert('You Entered A ODD NUMBER.');
}
// 10. Write a program that takes temperature as input and shows a message based on following criteria a. T > 40 then “It is too hot outside.” b. T > 30 then “The Weather today is Normal.” c. T > 20 then “Today’s Weather is cool.” d. T > 10 then “OMG! Today’s weather is so Cool.”
var temperature = +prompt('Enter the Current Tempereature in CELSIUS: ');
if(temperature>40){
    alert('It is too HOT outside..');
}
else if(temperature>30){
    alert('The Wether today is NORMAL..');
}
else if(temperature>20){
    alert('Today Wether is COOL..');
}
else if(temperature>10){
    alert('OMG! Today wether is so COOL..');
}
else{
    alert('No use Please enter the temperature in CELSIUS.');
}
// 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: a. First number b. Second number c. Operation (+, -, *, /, %) Compute & show the calculated result to user.
var firstNumber =+prompt('Enter tHe first number here: ');
var SecondNumber = +prompt('Enter the Second Number Here: ');
var Operation = prompt("Enter the operator to perform operation here: ");
switch(Operation){
    case '+': console.log(firstNumber + SecondNumber);
    break;
    case '-': if(firstNumber>SecondNumber){
        console.log(firstNumber-SecondNumber);
    }
    else if(SecondNumber > firstNumber){
        console.log(SecondNumber - firstNumber);
    }
    break;
    case '*': console.log(firstNumber*SecondNumber);
    break;
    case '/': console.log(firstNumber / SecondNumber);
break;
default: console.log('No Use..');
}