/* STRING METHOD*/

// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
// var firstName = prompt('Enter Your First Name Here:');
// var lastName = prompt('Enter Your Last Name Here:');
// var fullName = firstName + ' ' + lastName;
// alert('Assalam O Alikom, ' + fullName);

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var favouritePhoneName = prompt('Enter Your Favourite Mobile Phone Model here:');
// document.write('My favourite Phone Is: ' + favouritePhoneName);
// document.write('<br/>');
// document.write('Lenght Of String: ' + favouritePhoneName.length);

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .
// var counrtyNationality = 'Pakistani';
// document.write('<br/>');
// document.write('The Index of n in the CUrrent Nationality is: ' + counrtyNationality.indexOf('n'));

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.
// var newWord = 'Hello World';
// document.write('<br/>');
// document.write('String: ' + newWord);
// document.write('<br/>');
// document.write('Last Index Of "l" is: ' + newWord.lastIndexOf('l'));

// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
// var Nationality = 'Pakistani';
// document.write('<br/>');
// document.write('Sring: ' + Nationality);
// document.write('<br/>');
// document.write('Character at index 3 is: ' + Nationality.charAt(3));

// 6. Repeat Q1 using string concat() method.

// var firstName = prompt('Enter Your First Name Here:');
// var lastName = prompt('Enter Your Last Name Here:');
// var fullName = firstName.concat(lastName);
// alert('Assalam o Alikom, ' + fullName);

// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
var city = 'Hyderabad';
var newcity = city.replace('Hyder', 'Islam');
document.write('<br/>');
document.write('City: ' + city);
document.write('<br/>');
document.write('After Replacement: ' + newcity);

// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.

var message = 'Ali and Sami are best friends. They play cricket and football together.';
var newMSG = message.replace(/and/g, '&');
document.write('<br/>');
document.write(newMSG);

// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
var number = '472';
var stringConversion = Number(number);
document.write('Value: ' + number);
document.write('<br/>');
document.write('Type: ' + typeof (number));
document.write('<br/>');
document.write('Value: ' + stringConversion);
document.write('<br/>');
document.write('Type:' + typeof (stringConversion));

// 10. Write a program that takes user input. Convert and show the input in capital letters.
// var userInput = prompt('Please enter something here in english alphbets only: ');
// document.write('<br/>');
// document.write('User Input: ' + userInput);
// document.write('<br/>');
// document.write(userInput.toUpperCase());

// 11. Write a program that takes user input. Convert and show the input in title case.
// var smallCase = prompt('Enter something here: ');
// var firstChar = smallCase.charAt(0).toUpperCase();
// var remainingChar = smallCase.slice(1);
// var newTitleCase = firstChar.concat(remainingChar);
// document.write('<br/>');
// document.write(newTitleCase);

// 12. Write a program that converts the variable num to string.

var num = 35.36; //Remove the dot to display “3536” display in your browser.
var s = num + '';
s = s.replace('.', '');
s = parseInt(s);
document.write('<br/>');
document.write('Number: ' + num);
document.write('<br/>');
document.write('Result: ' + s);

// 13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .

// var username = prompt('Please enter the valid user name here: ');
// for (var i = 0; i <= username.length; i++) {
//     if (username.indexOf('@') > -1 || username.indexOf(',') > -1 || username.indexOf('.') > -1 || username.indexOf('!') > -1) {
//         alert('Please Enter A valid UserName without special characters...');
//         break;
//     } else {
//         alert('Looks GOODS.');
//         break;
//     }
// }

// 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:

// var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var userOrder = prompt('Welcome TO ABC BAKERY!.. What do you wnat to order Sir/Ma"am');
// if (A.indexOf(userOrder) > -1) {
//     alert(userOrder + ' is available at ' + A.indexOf(userOrder) + ' in our BAKERY.');
// } else {
//     alert('Sorry We don"t have your order product');
// }

// 15. Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

// var userPassword = prompt('Enter A Valid Password Here: ');
// if (userPassword.charAt(0) === '1' || userPassword.charAt(0) === '2' || userPassword.charAt(0) === '3' || userPassword.charAt(0) === '4' || userPassword.charAt(0) === '5' || userPassword.charAt(0) === '6' || userPassword.charAt(0) === '7' || userPassword.charAt(0) === '8' || userPassword.charAt(0) === '9') {
//     alert('Please enter the password Agan!.. It should not start with a number.');
// } else if (userPassword.length >= 6) {
//     console.log('The Password is totally correct...');
// }

// 16. Write a program to convert the following string to an
// array using string split method.
document.write('<br/>');
var university = 'University of Karachi';
// Display the elements of array in your browser.
for (var i = 0; i <= university.length; i++) {
    document.write(university[i]);
    document.write('<br/>');
}

// 17. Write a program to display the last character of a user
// input.
// var userInput = prompt('Enter something here: ');
// var newInput = 
// console.log(newInput);








// 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.
var msg = 'The quick brown fox jumps over the lazy dog';
var NewMsg = msg.match(/the/gi);
console.log('The Occurence In The Paragraph Are: ' + NewMsg.length);


/* MATH METHODS */

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var userInteger = +prompt('Pleaase enter a positive integer here: ');
// document.write('<br/>');
// document.write('User Input Number: ' + userInteger);
// document.write('<br/>');
// document.write('Round Off value Of The Number: ' + Math.round(userInteger));
// document.write('<br/>');
// document.write('Floor value of the Number: ' + Math.floor(userInteger));
// document.write('<br/>');
// document.write('Ceil value of the Number: ' + Math.ceil(userInteger));

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var userInteger = +prompt('Pleaase enter a negative integer here: ');
// document.write('<br/>');
// document.write('User Input Number: ' + userInteger);
// document.write('<br/>');
// document.write('Round Off value Of The Number: ' + Math.round(userInteger));
// document.write('<br/>');
// document.write('Floor value of the Number: ' + Math.floor(userInteger));
// document.write('<br/>');
// document.write('Ceil value of the Number: ' + Math.ceil(userInteger));

// 3. Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5
// var numberToAbsolute = -4;
// document.write('<br/>');
// document.write('Number: ' + Math.abs(numberToAbsolute));

// 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.

// var dice = Math.ceil(Math.random() * 6);
// document.write('<br/>');
// alert('Random Dice value: ' + dice);


// 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser
// var toss = Math.floor(Math.random() * 2);
// if (toss == 2) {
//     alert('Random Coin value: ' + toss + ' Head');
// } else if (toss == 1) {
//     alert('Random Coin Value: ' + toss + ' Tail');
// }

// 6. Write a program that shows a random number between 1 and 100 in your browser.
// var number = Math.floor(Math.random() * 100);
// document.write('<br/>');
// document.write('Random values between 1 to 100: ' + number);


// 7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be: a. 50 b. 50kgs c. 50.2kgs d. 50.2kilograms
// var weight = prompt('Please enter your Weight in KILOGRAMS: ');
// var weightMechanism = 'Kilograms';
// document.write('<br/>');
// document.write('The User Weight is: ' + weight + ' ' + weightMechanism);

// 8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.
// var secretNumber = Math.floor(Math.random() * 10);
// var userNumberInput = +prompt('Please Enter a number Here:');
// if (userNumberInput == secretNumber) {
//     alert('Good JOB!');
// } else {
//     alert('You LOSE!..');
// }
// console.log(secretNumber);

/* DATE METHOD */

// 1. Write a program that displays current date and time in
// your browser.
// var rightNow = new Date();
// document.write('<br/>');
// document.write(rightNow);

// 2. Write a program that alerts the current month in words.
// For example December.

// var currentMonth = rightNow.getMonth();
// document.write('<br/>');
// var month = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// document.write('Current Month: ' + month[currentMonth]);

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.
// var currentDay = rightNow.getDay();
// var day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
// document.write('<br/>');
// alert('Today Is: ' + day[currentDay]);

// // 4. Write a program that displays a message “It’s Fun day” if
// // its Saturday or Sunday today.
// if (day[currentDay] === 'Sat' || day[currentDay] === 'Sun') {
//     alert("It's Fun Day");
// } else {
//     alert('Normal Day');
// }

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// var date = rightNow.getDate();
// if (date >= 16) {
//     document.write('<br/>');
//     document.write('Last Days Of The Month');
// } else {
//     document.write('<br/>');
//     document.write('First Fifteen Days Of The Month');
// }
// console.log(date);

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var rightNow = new Date();
// document.write('<br/>');
// document.write('Current Date: ' + rightNow);
// var milliSecond = rightNow.getTime();
// document.write('<br/>');
// document.write('Elapsed MilliSeconds Since, 1 January 1970: ' + milliSecond);
// var minuteInMilliSeconds = milliSecond / (1000 * 60 * 60);
// document.write('<br/>');
// document.write('Elapsed Minutes Since, 1 January 1970: ' + minuteInMilliSeconds);

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// var rightNow = new Date().getMinutes();
// if (rightNow >= '12') {
//     alert('Its PM');
// } else {
//     alert('Its AM');
// }

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.
// var laterDate = new Date('December 31, 2020');
// document.write('<br/>');
// document.write(laterDate);

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
// var rightNow = new Date().getTime();
// var ramadanDate = new Date('April 25, 2020').getTime();
// var differenceBetweenBothOftheTime = rightNow - ramadanDate;
// var leftdays = differenceBetweenBothOftheTime / (1000 * 60 * 60 * 24);
// document.write('<br/>');
// document.write('Days Passed Since 1 Ramadan 2020: ' + Math.floor(leftdays));

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.
// var rightNow = new Date().getTime();
// var postDate = new Date('Jan 01, 2015').getTime();
// var differenceBetweenBothOftheTime = rightNow - postDate;
// var leftSeconds = differenceBetweenBothOftheTime / (1000);
// var rightKnow = new Date();
// document.write('<br/>');
// document.write('On Reference Date' + rightKnow + 'Seconds That is Past From the beginig of 2015: ' + Math.floor(leftSeconds));

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

// let before = new Date();
// document.write('<br/>');
// document.write('Current Date: ' + before);
// before.setHours(before.getHours() - 1);
// console.log('Before 1 Hour The Time Was: ' + before);
// document.write('<br/>');
// document.write('Before 1 Hour The Time Was: ' + before);

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// var set = new Date();
// set.setFullYear(set.getFullYear() - 100);
// alert(set);


// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

// var userAge = +prompt('Enter your AGE here so i tell you your Birth Year: ');
// var rightNow = new Date();
// rightNow.setFullYear(rightNow.getFullYear() - userAge);
// document.write('<br/>');
// document.write("Your Birth Year Was: " + rightNow.getFullYear());

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

// var customerName = prompt('Enter The Customer Name Here: ');
// var BillcurrentMonth = prompt('Enter The Current Month Name Here: ');
// var numberOfUnits = +prompt('Enter The Number Of Units You Consumes This Month: ');
// var chargerPerUnits = +prompt('Enter The Charges Per Unit Here: ');
// var NetAmount = (numberOfUnits * chargerPerUnits);
// var latePaymentSurcharges = 350;
// var grossAmountPayment = (NetAmount + latePaymentSurcharges);
// document.write('<h1>K-ELETRIC BILL</h1>');
// document.write('<br/>');
// console.log('Customer Name: ' + customerName);
// document.write('Customer Name: ' + customerName);
// document.write('<br/>');
// console.log('Month: ' + BillcurrentMonth);
// document.write('Month: ' + BillcurrentMonth);
// document.write('<br/>');
// console.log('Number Of Units: ' + numberOfUnits);
// document.write('Number Of Units: ' + numberOfUnits);
// document.write('<br/>');
// console.log('Charges Per Units: ' + chargerPerUnits);
// document.write('Charges Per Units: ' + chargerPerUnits);
// document.write('<br/>');
// console.log('Net Amount Payable (Within Due Date): ' + NetAmount);
// document.write('Net Amount Payable (Within Due Date): ' + NetAmount);
// document.write('<br/>');
// console.log('Late Payment Surcharge: ' + latePaymentSurcharges);
// document.write('Late Payment Surcharge: ' + latePaymentSurcharges);
// document.write('<br/>');
// console.log('Gross Amount Payable(After Due Date): ' + grossAmountPayment);
// document.write('Gross Amount Payable(After Due Date): ' + grossAmountPayment);
// document.write('<br/>');

/*  FUNTIONS */

// 1. Write a function that displays current date & time in your
// browser.

function displayDate() {
    var rightNow = new Date();
    document.write('<br/>');
    document.write(rightNow);
}
displayDate();

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

function greetings() {
    var firstName = prompt('Enter Your First Name Here: ');
    var lastName = prompt('Enter Your Last Naem Here: ');
    alert('Assalam o Alikom ' + firstName + ' ' + lastName);
}
greetings();

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

function sum() {
    var firstNumber = +prompt('Enter First Number: ');
    var lastNumber = +prompt('Enter Last Number: ');
    return firstNumber + lastNumber;
}
document.write('<br/>');
document.write(sum());

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

function Calculator(num1, num2, operator) {
    var result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    return result;
}
document.write('<br/>');
document.write(Calculator(2, 4, '*'));

// 5. Write a function that squares its argument.

function argument(num3, num4) {
    document.write('Argument 1 before Squaring: ' + num3);
    document.write('<br/>');
    document.write('Argument 1 After Squaring: ' + num3 * num3);
    document.write('<br/>');
    document.write('Argument 2 Before Squaring: ' + num4);
    document.write('<br/>');
    document.write('Argument 2 After Squaring: ' + num4 * num4);
}
argument(2, 2);

// 6. Write a function that computes factorial of a number.

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
document.write('<br/>');
document.write(factorial(6));

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

function counting(num5, num6) {
    for (var i = num5; i <= num6; i++) {
        document.write('<br/>');
        document.write(i);
    }
}
counting(5, 15);

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(base, perpendicular) {
//         // document.write('The hypotenuse of the given Inputs are as Given here: ', calculateSquare(base, perpendicular));
//         return (base * base) + (perpendicular * perpendicular);
//     }
//     return calculateSquare;
// }

// function calculateSquare(base, perpendicular) {
//     // var hypotenuse = (base * base) + (perpendicular * perpendicular);ss
//     return (base * base) + (perpendicular * perpendicular);
// }


function hypotenuse(a, b) {
    function square(x) {
        return x * x;
    }
    return Math.sqrt(square(a) + square(b));
}

function secondFunction() {
    var result;
    var base = +prompt('Enter the Base Here: ');
    var perpendicular = +prompt('Enter The Perpendicular: ');
    result = hypotenuse(base, perpendicular);
    document.write('<br/>');
    document.write(result);
}

secondFunction();


// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

function areaOfRectangle(x, y) {
    var area = x * y;
    return area;
}
var width = +prompt('Enter The Width Of The Rectangle: ');
var height = +prompt('Enter tHe Height Of The Rectangle: ');
document.write('<br/>');
document.write('Area: ', areaOfRectangle(width, height));

function areaOfRectangle(y, z) {
    var area = y * z;
    return area;
}
document.write('<br/>');
document.write('Area: ', areaOfRectangle(5, 6));

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

function palindrome(str) {
    var unWantedString = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(unWantedString, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}
document.write('<br/>');
document.write('Is It a PALIDROME: ', palindrome("A man, a plan, a canal. Panama"));

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

function getResult() {
    var paragraph = 'the quick brown fox';
    // var result = document.getElementById('para');
    var emptyString = '';
    var strings = 'abcdefghijklmnopqrstuvwxyz';
    for (var i = 0; i < paragraph.length; i++) {
        if (i !== 0) {
            if (strings.indexOf(paragraph[i - 1]) === -1) {
                emptyString = emptyString + paragraph[i].toUpperCase();
            } else {
                emptyString = emptyString + paragraph[i];
            }
        } else {
            emptyString = emptyString + paragraph[i].toUpperCase();
        }
    }
    document.write('<br/>');
    document.write(emptyString);
}
getResult();

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

function findLongestWord(str) {
    var arrayString = str.match(/\w[a-z]{0,}/gi);
    var result = arrayString[0];

    for (var x = 1; x < arrayString.length; x++) {
        if (result.length < arrayString[x].length) {
            result = arrayString[x];
        }
    }
    return result;
}
document.write('<br/>');
document.write(findLongestWord("Web Development Tutorial"));

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'


function char_count(str, letter) {
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++) {
        if (str.charAt(position) == letter) {
            letter_Count += 1;
        }
    }
    return letter_Count;
}

console.log(char_count('JSResources.com', 'o'));


// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

function calcCircumference(x, y) {
    var cicumferenceOfCircle = 2 * x * y;
    document.write('<br/>');
    document.write('CIRCUMFERENCE OF CIRCLE is: ' + cicumferenceOfCircle);
}

function calcArea(a, b) {
    var areaOfCircle = a * (b * b);
    document.write('<br/>');
    document.write('Area of Circle IS: ' + areaOfCircle);
}

var piValue = Math.PI;
var radius = +prompt('Enter The Radius Of the Circle here: ');
calcCircumference(piValue, radius);
calcArea(piValue, radius);


/* THE END */