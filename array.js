console.log('Muhammad Hassan Naeem');
// 1. Declare an empty array using JS literal notation to store
// student names in future.
var studentName = [];
// 2. Declare an empty array using JS object notation to store
// student names in future.
var studentName = new Array();
// 3. Declare and initialize a strings array.
var names = ['Khawar', 'Ayaz', 'Usm', 'Arhaam'];
// 4. Deare and initialize a Scores array.
var ScoresArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 5. Declare and initialize a boolean array.
var booleanArray = [true, false];
// 6. Declare and initialize a mixed array.
var mixedArray = ['School', 'Karachi', 1, 'Pakistan', 2020, true];
// 7. Declare and Initialize an array and store available mobile
// networks in Pakistan.
var mobileNetworks = ['Zong', 'Ufone', 'Jazz', 'Warid', 'Telenor'];
// 8. Declare and Initialize an array and store available education
// qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS,
// M. Phil., PhD). Show the listed qualifications in your browser
// like:
var educationInPakistan = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.Phil.', 'PhD'];
var head = document.getElementById('heading');
head.innerHTML = 'QUALIFICATIONS';
for (var i = 0; i < educationInPakistan.length; i++) {
    document.write(i + ') ' + educationInPakistan[i]);
    document.write('<br/>');
}
document.write('<br/>');
// 9. Declare and initialize an empty array to store top movies of
// 2015. Add movies one by one in an array. Display the elements
// & length of array in your browser. (Use array’s length method)
var movies = [];
var namesOfMovies = document.getElementById('movie');
namesOfMovies.innerHTML = 'Top Movies Of 2020';
var movie1 = prompt("Enter the Movie 1 Name: ");
var movie2 = prompt("Enter the Movie 2 Name: ");
var movie3 = prompt("Enter the Movie 3 Name: ");
var movie4 = prompt("Enter the Movie 4 Name: ");
movies.push(movie1);
movies.push(movie2);
movies.push(movie3);
movies.push(movie4);
var output = document.getElementsByClassName('output');
// var output1 = document.getElementsByClassName('output1');
// var output2 = document.getElementsByClassName('output2');
// var output3 = document.getElementsByClassName('output3');

var Dom = document.getElementById('lenght');
for (var i = 0; i < movies.length; i++) {
    document.write(i + ') ' + movies[i]);
    document.write('<br/>');
}
Dom.innerHTML = 'Lenght Of The Array: ' + movies.length;
// 10. Declare and Initialize an array with your favorite cars. Show
// a. First index of the array
// b. Car at first index of the array
// c. Last index of the array
// d. Car at last index of the array
var favoriteCarNames = ['TESLA', 'AUDI', 'LAMBORGHINI', 'PORSCHE'];
var carNames = document.getElementById('car');
carNames.innerHTML = 'Favourite CARS.';
document.write(favoriteCarNames);
document.write('<br/>');
document.write('First Index Of the Array: ' + favoriteCarNames.indexOf('TESLA'));
document.write('<br/>');
document.write('Car at First Index Of The Array: ' + favoriteCarNames[0]);
document.write('<br/>');
document.write('Last Index Of The Array: ' + favoriteCarNames.indexOf('PORSCHE'));
document.write('<br/>');
document.write('Car At The Last Index of The Array: ' + favoriteCarNames[3]);
// 11. Write a program to store 3 student names in an array. Take
// another array to store score of these three students. Assume
// that total marks are 500 for each student, display the scores &
// percentages of students like:
var studentName = [];
var studentsScores = [];
var totalMarks = 500;
var student1 = prompt("Enter The Name Of the First Student Here: ");
var student2 = prompt("Enter The Name Of the Second Student Here: ");
var student3 = prompt("Enter The Name Of the Third Student Here: ");
var scores = +prompt('Enter The Score of Student ' + student1 + ' here:');
var scores1 = +prompt('Enter The Score of Student ' + student2 + ' here:');
var scores2 = +prompt('Enter The Score of Student ' + student3 + ' here:');
studentName.push(student1);
studentName.push(student2);
studentName.push(student3);
studentsScores.push(scores);
studentsScores.push(scores1);
studentsScores.push(scores2);
var studentDOM = document.getElementById('student');
var studentDOM1 = document.getElementById('student1');
var studentDOM2 = document.getElementById('student2');
studentDOM.innerHTML = 'Score of ' + studentName[0] + ' is: ' + studentsScores[0] + '.Percentage is: ' + studentsScores[0] / totalMarks * 100;
studentDOM1.innerHTML = 'Score of ' + studentName[1] + ' is: ' + studentsScores[1] + '.Percentage is: ' + studentsScores[1] / totalMarks * 100;
studentDOM2.innerHTML = 'Score of ' + studentName[2] + ' is: ' + studentsScores[2] + '.Percentage is: ' + studentsScores[2] / totalMarks * 100;
// 12. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end &
// add that color to the end of the array. Display the updated
// array in your browser.
// c. Add two more color to the beginning of the array. Display
// the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color &
// color name. Then add the color to desired position/index.
// . Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
var colorName = ['Red', 'Yellow', 'Green', 'Blue'];
var addColor = prompt("Enter the color here which you want to Enter at the Beigning of the Array: ");
colorName.unshift(addColor);
console.log(colorName);
console.log(colorName.length);
var addColor1 = prompt("Enter the color which you want to Enter at the End of the ARRAY: ");
colorName.push(addColor1);
console.log(colorName);
console.log(colorName.length);
var addColor2 = prompt("Enter another color which you want to Enter at the Beigning of The Array:");
var addColor3 = prompt("Enter another color which you want to Enter at the Beigning of The Array:");
colorName.unshift(addColor2);
colorName.unshift(addColor3);
console.log(colorName);
console.log(colorName.length);
colorName.shift();
console.log(colorName);
console.log(colorName.length);
colorName.pop();
console.log(colorName);
console.log(colorName.length);
var indexNumber = +prompt("Please enter the index number at which you want to enter the color Name:");
var addColor4 = prompt("Enter the color Name Here: ");
colorName.splice(indexNumber, 0, addColor4);
console.log(colorName);
console.log(colorName.length);
var indexNumber1 = +prompt("Enter the index at which you want to delete the color name: ");
var addColor5 = +prompt("Enter how many color name you want to delete: ");
colorName.splice(indexNumber1, addColor5);
console.log(colorName);
console.log(colorName.length);
// 13. Write a program to store student scores in an array & sort
// the array in ascending order using Array’s sort method.
var scoresStudents = [];
var scoresStudent1 = +prompt("Enter the Score of the student1: ");
var scoresStudent2 = +prompt("Enter the Score of the student2: ");
var scoresStudent3 = +prompt("Enter the Score of the student3: ");
var scoresStudent4 = +prompt("Enter the Score of the student4: ");
var scoresStudent5 = +prompt("Enter the Score of the student5: ");
scoresStudents.push(scoresStudent1);
scoresStudents.push(scoresStudent2);
scoresStudents.push(scoresStudent3);
scoresStudents.push(scoresStudent4);
scoresStudents.push(scoresStudent5);
console.log(scoresStudents);
scoresStudents.sort();
console.log(scoresStudents);
// 14. Write a program to sort the below mentioned array:
// var fruits = [“strawberry”, “apple”, “orange”, “banana”];
var fruits = ['Strawberry', 'Apple', 'Orange', 'Banana'];
var fruitHeading = document.getElementById('fruitsUno');
fruitHeading.innerHTML = 'Fruits List: ';
var list = document.getElementById('listF');
list.innerHTML = fruits;
var fruitHeading1 = document.getElementById('fruitsOrd');
fruitHeading1.innerHTML = 'Ordered Fruits List';
var listOrder = document.getElementById('listOrdFruits');
fruits.sort();
listOrder.innerHTML = fruits;
// 15. Write a program to initialize an array with city names. Copy
// 3 array elements from cities array to selectedCities array.
var cities = ['Karachi', 'Islamabad', 'Lahore', 'Murree', 'Hyderabad', 'Sialkot'];
var headingCity = document.getElementById('cities');
headingCity.innerHTML = 'Cities List: ';
var listCity = document.getElementById('cityList');
listCity.innerHTML = cities;
var selectedCities = document.getElementById('selectedCity');
selectedCities.innerHTML = 'Selected Cities List: ';
var listCities = document.getElementById('citiesList');
var slect = cities.slice(1, 3);
listCities.innerHTML = slect;
// Write a program to create a single string from the below
// mentioned array:
var arr = ['This', ' is ', ' my ', 'cat'];
document.write(arr);
// (Use array’s join method)
document.write(arr.join(''));
// 17. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they were
// stored. (FIFO-First In First Out)
var array = [];
var arrayHeading = document.getElementById('heading');
arrayHeading.innerHTML = 'Devices';
var userInput = prompt('Enter any Device name Related To Computer Accessories: ');
var userInput1 = prompt('Enter any Device name Related To Computer Accessories: ');
var userInput2 = prompt('Enter any Device name Related To Computer Accessories: ');
var userInput3 = prompt('Enter any Device name Related To Computer Accessories: ');
array.unshift(userInput);
array.unshift(userInput1);
array.unshift(userInput2);
array.unshift(userInput3);
var outHeading = document.getElementById('outHead');
outHeading.innerHTML = 'Out';
document.write('<br/>');
outHeading.innerHTML = 'Out';
document.write(array.pop());
document.write('<br/>');
outHeading.innerHTML = 'Out';
document.write(array.pop());
document.write('<br/>');
outHeading.innerHTML = 'Out';
document.write(array.pop());
document.write('<br/>');
outHeading.innerHTML = 'Out';
document.write(array.pop());
// 18. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-First
// Out)
var array = [];
var arrayHeading = document.getElementById('heading');
arrayHeading.innerHTML = 'Devices';
var userInput = prompt('Enter any Device name Related To Computer Accessories: ');
var userInput1 = prompt('Enter any Device name Related To Computer Accessories: ');
var userInput2 = prompt('Enter any Device name Related To Computer Accessories: ');
var userInput3 = prompt('Enter any Device name Related To Computer Accessories: ');
array.push(userInput);
array.push(userInput1);
array.push(userInput2);
array.push(userInput3);
var outHeading = document.getElementById('outHead');
outHeading.innerHTML = 'Out';
document.write('<br/>');
outHeading.innerHTML = 'Out';
document.write(array.pop());
document.write('<br/>');
outHeading.innerHTML = 'Out';
document.write(array.pop());
document.write('<br/>');
outHeading.innerHTML = 'Out';
document.write(array.pop());
document.write('<br/>');
outHeading.innerHTML = 'Out';
document.write(array.pop());
// 19. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array. Display
//     the following dropdown/select menu in your browser using
//     document.write() method:
var smartPhoneManufaturer = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];
document.write('<select><option>' + smartPhoneManufaturer[0] + '</option><option>' + smartPhoneManufaturer[1] + '</option><option>' + smartPhoneManufaturer[2] + '</option><option>' + smartPhoneManufaturer[3] + '</option><option>' + smartPhoneManufaturer[4] + '</option><option>' + smartPhoneManufaturer[5] + '</option></select>');
// 20. Declare and initialize an empty multidimensional array.
// (Array of arrays)
var multiDimensionalArray = [{}, {}, {}];
// 21. Declare and initialize a multidimensional array representing
// the following matrix:
var arrayMultidimensional = [
    [1, 2],
    [0, 3],
    [4, 5]
];
console.log(arrayMultidimensional);