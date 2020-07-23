// 1. Write a program to display the message “Hello World” 5 times
// in your browser using for loop.
// for (var i = 1; i <= 5; i++) {
//     console.log('Hello World.' + i);
//     document.write('Hello World.' + i);
//     document.write('<br/>');
// }
// 2. Write a program to print numeric counting from 1 to 10.
// document.write('<hr>');
// for (var j = 1; j <= 10; j++) {
//     console.log(j);
//     document.write(j);
//     document.write('<br/>');
// }
// 3. Write a program to print multiplication table of any number
// using for loop. Table number & length should be taken as an
// input from user.
// var tableNumber = +prompt('Enter the Number Of The Table Which You Want To Print it:');
// var iteration = +prompt('Till How Many Iteration You Want To Print The Table:');
// document.write('<hr>');
// document.write('Multiplication Table Of  ' + tableNumber);
// document.write('<br/>');
// document.write('Lenght is ' + iteration);
// document.write('<br/>');
// document.write('<br/>');
// for (var k = 1; k <= iteration; k++) {
//     console.log(tableNumber + ' * ' + k + ' = ' + tableNumber * k);
//     document.write(tableNumber + ' * ' + k + ' = ' + tableNumber * k);
//     document.write('<br/>');
// }
// 4. You have an array
// A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
// Write each element on new line with the help of for loop.
// var mobilePhone = ['Nokia', 'Samsung', 'Apple', 'Sony', 'Huawei'];
// document.write('<hr>');
// for (var l = 0; l < mobilePhone.length; l++) {
//     console.log(mobilePhone[l]);
//     document.write(mobilePhone[l]);
//     document.write('<br/>');
// }
// 5. Write a program to print items of the following array using for
// loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]
// var fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Strawberry'];
// document.write('<hr>');
// for (var m = 0; m < fruits.length; m++) {
//     console.log(fruits[m]);
//     document.write(fruits[m]);
//     document.write('<br/>');
// }
// document.write('<br/>');
// document.write('<br/>');
// for (m = 0; m < fruits.length; m++) {
//     document.write('Elements At Index ' + m + ' is ' + fruits[m]);
//     document.write('<br/>');
// }
// 6. Write a program to initialize an array of N items by using
// prompt. Where N is number of items as entered by the user.
// var array = [];
// var userInput = +prompt('Enter The Number Of Inputs You Want To Enter In An Array: ');
// document.write('<hr>');
// for (var n = 0; n < userInput; n++) {
//     var Input = prompt('Enter value at index ' + n);
//     array.push(Input);
// }
// document.write('Number Of Items: ' + userInput);
// document.write('<br/>');
// document.write('ITEMS: ');
// document.write('<br/>');
// document.write('<br/>');

// for (var o = 0; o < array.length; o++) {
//     console.log(array[o]);
//     document.write(array[o]);
//     document.write('<br/>');
// }
// 7. Generate the following series in your browser. See example
// output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// document.write('<hr>');
// document.write('Counting: ');
// document.write('<br/>');
// document.write('<br/>');

// for (var p = 1; p <= 15; p++) {
//     document.write(p + ', ');
// }
// document.write('<br/>');
// document.write('<br/>');
// document.write('Reverse Counting: ');
// document.write('<br/>');
// document.write('<br/>');

// for (var q = 10; q > 0; q--) {
//     document.write(q + ', ');
// }
// document.write('<br/>');
// document.write('<br/>');
// document.write('Even: ');
// document.write('<br/>');
// document.write('<br/>');

// for (var r = 0; r <= 20; r++) {
//     if (r % 2 == 0) {
//         document.write(r + ', ');
//     }
// }
// document.write('<br/>');
// document.write('<br/>');
// document.write('Odd: ');
// document.write('<br/>');
// document.write('<br/>');

// for (var s = 0; s <= 20; s++) {
//     if (s % 2 !== 0) {
//         document.write(s + ', ');
//     }
// }
// document.write('<br/>');
// document.write('<br/>');
// document.write('Series: ');
// document.write('<br/>');
// document.write('<br/>');

// for (var t = 1; t <= 20; t++) {
//     if (t % 2 == 0) {
//         document.write(t + 'k, ');
//     }
// }
// document.write('<hr>');
// 8. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:
// var bakery = ['Cake', 'Apple Pie', 'Cookie', 'Chips', 'Patties'];
// var bakeryInput = prompt('Welcome To HAPPy Bakery.What do You Want To Order Sir/Madam:');
// var selection = bakery.indexOf(bakeryInput);
// if (selection !== -1) {
//     document.write(bakeryInput + ' is found at index ' + selection + ' in our Bakery.');
// } else {
//     document.write('We are Sorry. ' + bakeryInput + ' is not Available in our Bakery.');
// }
// 9. Write a program to identify the largest number in the given
// array.
// A = [24, 53, 78, 91, 12]
// document.write('<hr>');
// var LargestArray = [24, 53, 78, 91, 12];
// document.write('Array Items: ');
// for (var u = 0; u < LargestArray.length; u++) {
//     document.write(LargestArray[u] + ', ');
// }
// for (var i = 1; i < LargestArray.length; i++) {
//     if (LargestArray[4] < LargestArray[i]) {
//         LargestArray[4] = LargestArray[i];
//     }
// }
// document.write('<br/>');
// document.write('The Largest Item Is: ' + LargestArray[4]);
// 10. Write a program to identify the smallest number in the given
// array.
// A = [24, 53, 78, 91, 12]
// document.write('<hr>');
// var SmallestArray = [24, 53, 78, 91, 12];
// document.write('Array Items: ');
// for (var u = 0; u < SmallestArray.length; u++) {
//     document.write(SmallestArray[u] + ', ');
// }
// for (var i = 1; i < SmallestArray.length; i++) {
//     if (SmallestArray[0] < SmallestArray[i]) {
//         SmallestArray[0] = SmallestArray[i];
//     }
// }
// document.write('<br/>');
// document.write('The Smallest Item Is: ' + SmallestArray[0]);
// // 12. Write a program to print multiples of 5 ranging 1 to 100
// document.write('<hr>');
// for (var v = 1; v <= 100; v++) {
//     if (v % 5 == 0) {
//         document.write(v + ', ');
//     }
// }
// document.write('<hr>');
// 13. You have given the following arrays:
// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];
// Write a program to generate the following HTML table in your
// browser using JS.
// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];
// var scores = [58, 73, 89, 90];
// document.write('<table border=2px><tr><th>Students</th><th>Scores</th></tr><tr><td>' + students[0] + '</td><td>' + scores[0] + '</td></tr><tr><td>' + students[1] + '</td><td>' + scores[1] + '</td></tr><tr><td>' + students[2] + '</td><td>' + scores[2] + '</td></tr><tr><td>' + students[3] + '</td><td>' + scores[3] + '</td></tr></table>');
// document.write('<hr>');
// 14. Write a program that prints number from start of the array
// to desired stop value. Given array:
// var scores = [12, 45, 3, 22, 34, 50];
// (Hint: take stop value from user)
// E.g. if user gives 3 as input value print 12, 45, 3
// if user gives 34 as input value print 12, 45, 3, 22, 34
// var scores = [12, 45, 3, 22, 34, 50];
// var stopValue = +prompt('Enter Any STop value In Number here: ');
// scores.push(stopValue);
// for (var w = 0; w < scores.length; w++) {
//     console.log(scores[w]);
//     document.write(scores[w]);
//     document.write('<br/>');
// }
// 15. You have an array
// A = [ [1,2,3] , [4,5,6] , [7,8,9] ]
// Write each element on new line with the help of nested for
// loops.
// document.write('<hr>');
// var multiArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// for (var x = 0; x < 3; x++) {
//     document.write(multiArray[x]);
//     document.write('<br/>');
// }
// 16. Write a program to repeatedly print the value of the variable
// num which is input by user. Value should be decreasing by 0.5
// each time, as long as x Value remains positive.
// document.write('<hr>');
// var input = +prompt('Enter A Value In Number: ');
// for (var y = input; y > 0; y--) {
//     var answer = y - 0.5;
//     if (answer !== 0) {
//         document.write(answer + ', ');
//     }
// }
// 17. The even/odd reporter
// Write a for loop that will iterate from 0 to 20. For each
// iteration, it will check if the current number is even or odd, and
// report that to the screen (e.g. "2 is even").
// document.write('<hr>');
// for (var z = 0; z <= 20; z++) {
//     if (z % 2 == 0) {
//         document.write(z + ' is even');
//         document.write('<br/>');
//     } else {
//         document.write(z + ' is odd');
//         document.write('<br/>');
//     }
// }
// 18. Write a program to calculate the product of the odd integers
// from 1 to 7.
// var ans = 1;
// for (var a = 1; a <= 7; a++) {
//     if (a % 2 !== 0) {
//         ans = ans * a;
//     }
// }
// console.log(ans);



// 19. Write a program that will write out a wedge of stars. The user
// will enter the initial number of stars, and the program will write
// out lines of stars where each line has one few star than the
// previous line. Initial number of stars: 7
// for (var b = 0; b < 7; b++) {
//     for (var c = 7; c > b; c--) {
//         document.write('*');
//     }
//     document.write('<br/>');
// }
// 20. Write a program to create the following patterns in your
// browser. Take number of lines as an input.
// a. *****
//    *****
//    *****
//    *****
// document.write('<hr>');
// for (var d = 0; d < 5; d++) {
//     for (var e = 0; e < 5; e++) {
//         document.write('*');
//     }
//     document.write('<br/>');
// }
// b. *
//    **
//    ***
//    ****
//    *****
// document.write('<hr>');
// for (var f = 0; f <= 5; f++) {
//     for (var g = 0; g < f; g++) {
//         document.write('*');
//     }
//     document.write('<br/>');
// }
// c. *****
//    ****
//    ***
//    **
//    *
// document.write('<hr>');
// for (var h = 0; h <= 5; h++) {
//     for (var aa = 5; aa > h; aa--) {
//         document.write('*');
//     }
//     document.write('<br/>');
// }