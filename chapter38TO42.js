// 1. Write a custom function power ( a, b ), to calculate the value of a raised to b.
// var a = +prompt('Enter The Value of The Number =>');
// var b = +prompt('Enter The Value Of Power In Number Not In Float =>');
// var val = a;

// function power(a, b) {
//     for (var i = 1; i < b; i++) {
//         val = val * a;
//     }
//     document.write('Calculated Value Of a raised to b => ', val);
// }
// power(a, b);



// 2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not. Leap years ..., 2012, 2016, 2020, …

// let yearUserInput = +prompt('Enter The Year Of Your Choic to Check Whether The Enter Year Is Even Or Odd: ');
// if (yearUserInput % 2 === 0) {
//     document.write(`<h1>THE YEAR YOU ENTERED ${yearUserInput} IS EVEN...</h1>`);
//     document.write('<br/>');
//     document.write('<h1>CONGRATULATIONS.....</h1>');
// } else {
//     document.write(`<h>Your Entered Year ${yearUserInput} Is ODD....`)
// }



// 3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions.
// var lenghtOfTraingle1 = +prompt('Enter The Lenght of Traingle 1: ');
// var lenghtOfTraingle2 = +prompt('Enter The Lenght of Traingle 2: ');
// var lenghtOfTraingle3 = +prompt('Enter The Lenght of Traingle 3: ');

// function areaOfTraingle(lenghtOfTraingle1, lenghtOfTraingle2, lenghtOfTraingle3) {
//     console.log(lenghtOfTraingle1, lenghtOfTraingle2, lenghtOfTraingle3);
//     var sOfTrainlge = (lenghtOfTraingle1 + lenghtOfTraingle2 + lenghtOfTraingle3) / 2;
//     console.log(sOfTrainlge);
//     areatraingle(sOfTrainlge);
// }

// function areatraingle(areaOfTraingleDone) {
//     console.log(areaOfTraingleDone);
//     var area = areaOfTraingleDone * (areaOfTraingleDone - lenghtOfTraingle1) * (areaOfTraingleDone - lenghtOfTraingle2) * (areaOfTraingleDone - lenghtOfTraingle3);
//     document.write(`The Area Of Traingle Is=> ${area}`);
// }
// areaOfTraingle(lenghtOfTraingle1, lenghtOfTraingle2, lenghtOfTraingle3);

// 4. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction.


// var marksOfSubject1 = +prompt('Enter The Marks Of Subject 1:');
// var marksOfSubject2 = +prompt('Enter The Marks Of Subject 2:');
// var marksOfSubject3 = +prompt('Enter The Marks Of Subject 3:');
// var totalMarks = 300;



// function mainFunction(marksOfSubject1, marksOfSubject2, marksOfSubject3) {
//     // var obtainedMarks = marksOfSubject1 + marksOfSubject2+marksOfSubject3;
//     document.write(`<h1>Marks Obtained In Subject One Is ${marksOfSubject1}</h1>`);
//     document.write(`<h1>Marks Obtained In Subject Second Is ${marksOfSubject2}</h1>`);
//     document.write(`<h1>Marks Obtained In Subject Third Is ${marksOfSubject3}</h1>`);
//     document.write(`<h1>the TOTAL MARKS ARE=> ${totalMarks}</h1>`);
//     document.write(`<h1>The Average You Get From The Total Marks=> ${totalMarks} are ${averageOfMarks}...   </h1>`);
//     document.write(`<h1>The Percentage you Obatined is=> ${percentageOfMarks}</h1>`);
//     console.log(averageOfMarks);
//     console.log(percentageOfMarks);
// }

// function average(marksOfSubject1, marksOfSubject2, marksOfSubject3) {
//     var obtainedMarks = marksOfSubject1 + marksOfSubject2 + marksOfSubject3;
//     return obtainedMarks;
// }
// var averageOfMarks = average(marksOfSubject1, marksOfSubject2, marksOfSubject3);

// function percentage(marksOfSubject1, marksOfSubject2, marksOfSubject3) {
//     var percentage = averageOfMarks / totalMarks * 100;
//     return percentage;
// }

// var percentageOfMarks = percentage(marksOfSubject1, marksOfSubject2, marksOfSubject3);
// mainFunction(marksOfSubject1, marksOfSubject2, marksOfSubject3);

// 5. You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now.

// var briefOverview = 'I am a boy done scholling for fun';

// function customIndexOf(valueOfElement) {
//     console.log(valueOfElement);
//     var findWords = prompt('Enter The Name which you want to search In the Sentence =>');
//     var done = valueOfElement.includes(findWords);
//     var count = 0;
//     if (valueOfElement.includes(findWords)) {
//         count;
//     } else {
//         --count;
//     }
//     console.log(count);
// }
// customIndexOf(briefOverview);

// 6. Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.

// var senetence = prompt('Enter Any Sentence Here but not more than 25 characters:');
// var vowels = 'aeiou';

// function vowelReturn(sentence) {
//     var newTranformedUserSemtemce = senetence.toLowerCase().split('');
//     for (var x = 0; x < senetence.length; x++) {
//         var char = senetence[x].toLowerCase();
//         if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
//             newTranformedUserSemtemce[x] = '';
//         }
//     }
//     return newTranformedUserSemtemce.join('');
// }
// console.log(vowelReturn(senetence));



// 7. Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. For example, in the sentence
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.
// var count = 0;

// function findVowel() {
//     var strSentence = "Pleases read this application and give me gratuity";
//     let seenVowel = false;

//     for (const ele of strSentence.toLowerCase()) {
//         switch (ele) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u': {
//                 if (seenVowel) {
//                     count++;
//                     console.log(ele);
//                     seenVowel = false;
//                 } else {
//                     console.log(ele);
//                     seenVowel = true;
//                 }
//                 break;
//             }
//             default:
//                 seenVowel = false
//         }
//     }
//     return count;
// }

// console.log(findVowel());
// console.log(count++);


// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

// var disteanceBetweeenTwoCities = +prompt('Enter The Distance Between Two CIties in Kilometers Here: ');
// console.log('Distance Netere in Kilometer Is Between two Cities Is: ' + disteanceBetweeenTwoCities + ' km');
// document.write('Distance Netere in Kilometer Is Between two Cities Is: ' + disteanceBetweeenTwoCities + ' km');
// document.write('<br/>');

// function meters(disteanceBetweeenTwoCities) {
//     console.log('Distance In Meters: ' + disteanceBetweeenTwoCities * 1000 + ' m');
//     document.write('Distance In Meters: ' + disteanceBetweeenTwoCities * 1000 + ' m');
//     document.write('<br/>');
// }

// function feet(disteanceBetweeenTwoCities) {
//     console.log('Distance In Feets: ' + disteanceBetweeenTwoCities * 3280 + ' feets');
//     document.write('Distance In Feets: ' + disteanceBetweeenTwoCities * 3280 + ' feets');
//     document.write('<br/>');
// }

// function inches(disteanceBetweeenTwoCities) {
//     console.log('Distance In Inches: ' + disteanceBetweeenTwoCities * 39370 + ' inches');
//     document.write('Distance In Inches: ' + disteanceBetweeenTwoCities * 39370 + ' inches');
//     document.write('<br/>');
// }

// function centimeters(disteanceBetweeenTwoCities) {
//     console.log('Distance In Centimeters: ' + disteanceBetweeenTwoCities * 100000 + ' cm');
//     document.write('Distance In Centimeters: ' + disteanceBetweeenTwoCities * 100000 + ' cm');
//     document.write('<br/>');
// }
// meters(disteanceBetweeenTwoCities);
// feet(disteanceBetweeenTwoCities);
// inches(disteanceBetweeenTwoCities);
// centimeters(disteanceBetweeenTwoCities);

// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.
// for (var i = 1; i <= 3; i++) {
//     var employeesHours = +prompt('Enter Your Working Hours here If They Are Over Than 40 Hour You Will Surely Get An OverTime Pay: ');
//     var overtimePay, overtimeHour;
//     overtimePayCalculate(employeesHours);

// }

// function overtimePayCalculate(employeesHours) {
//     if (employeesHours > 40) {
//         overtimeHour = employeesHours - 40;
//         overtimePay = overtimeHour * 12.00;
//         document.write('<br/>');
//         document.write('Your Over Time Pay Is: ' + "Rs. " + overtimePay);
//     } else {
//         document.write('<br/>');
//         document.write('You Have Not Worked Over The Hours Which have Been Given So You Are Not Awarded An Overtime Pay...');
//         document.write('<br/>');
//     }
// }
// 10. A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.
// var amount = +prompt('Please Input The Amount To Withdraw From Here:');

// function calculateNotes(amount) {
//     document.write('<br/>');
//     document.write('Amount Entered Is => ', amount);
//     document.write('<br/>');
//     document.write('Required Notes Of Rs.100 => ', Math.floor(amount / 100));
//     document.write('<br/>');
//     document.write('Required Noted Of Rs.50 => ', Math.floor((amount % 100) / 50));
//     document.write('<br/>');
//     document.write('Required Notes Of Rs.10 => ', Math.floor((((amount % 100) % 50) / 10)));
//     document.write('<br/>');
//     document.write('Amount Still Remaining => ', Math.ceil((((amount % 100) % 50) % 10)));
// }
// calculateNotes(amount);