// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.
// var num1 = +prompt('Enter The First Number For Addition: ');
// var num2 = +prompt('Enter The Second Number For Addition: ');
// var sum = num1 + num2;
// document.write('Sum of '+num1+' and '+num2+' is: '+sum);
// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
// var num1 = +prompt('Enter The First Number For Subtraction: ');
// var num2 = +prompt('Enter The Second Number For Subtraction: ');
// var subtraction;
// if(num1>num2){
//     subtraction = num1 - num2;
//     document.write('<br/>');
//     document.write('After Subtraction of '+num1+' and '+num2+' is: '+subtraction);
// }
// else if(num2>num1){
//     subtraction = num2 - num1;
//     document.write('<br/>');
//     document.write('After Subtraction of '+num1+' and '+num2+' is: '+subtraction);
// }
// else if(num1 == num2){
//     subtraction = num1 - num2;
//     document.write('<br/>');
//     document.write('After Subtraction of '+num1+' and '+num2+' is: '+subtraction);
// }
// else{
//     console.log('No use Please Enter a valid number for this type of calculation.');
// }
// var num3 = +prompt('Enter The First Number For Multiplication');
// var num4 = +prompt('Enter The Second Number For Multiplication');
// var multiplication = num3 * num4;
// document.write('<br/>');
// document.write('After Multiplication Of ' + num3 + ' and ' + num4 + ' is: ' + multiplication);

// var num5 = +prompt('Enter The First Number For Modulus: ');
// var num6 = +prompt('Enter The Second Number For Modulus: ');
// var modulus = num5 % num6;
//     document.write('<br/>');
// document.write('After Modulus Of ' + num5 + ' and ' + num6 + ' is: ' + modulus);
// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”. i. Decrement the variable. j. Show the value of variable in your browser like “Value after decrement is: 12”. k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.
// var declaration;
// document.write('Value after declaration of variable is: ' + declaration);
// declaration = 5;
// document.write('<br/>');
// document.write('Initial value is: ' + declaration);
// declaration += 1;
// document.write('<br/>');
// document.write('value after increment is: ' + declaration);
// declaration += 7;
// document.write('<br/>');
// document.write('Value after adding 7 to it is: ' + declaration);
// declaration -= 1;
// document.write('<br/>');
// document.write('Value after decrement is: ' + declaration);
// declaration = declaration % 3;
// document.write('<br/>');
// document.write('The Remainder is: ' + declaration);
// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
// var ticket = 600;
// var buyTickets = 5;
// document.write('<br/>');
// document.write('Total cost to buy 5 Movie Tickets is: ', ticket * buyTickets + ' PKR.');
// // 5. Write a script to display multiplication table of any number in your browser.
// var noOfTable = +prompt('Enter a number to print it whole table by the machine: ');
// document.write('<br/>');
// document.write('Table of Number Inputted By You Is: ' + noOfTable);
// document.write('<br/>');
// for (var i = 1; i <= 10; i++) {
//     document.write(noOfTable + ' * ' + i + ' = ' + noOfTable * i);
//     document.write('<br/>');
// }
// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// var temperature = prompt('Enter the Temperature in Celsius: ');
// var conversionToFarhenheit = (temperature * 9 / 5) + 32;
// console.log(temperature + 'C ' + 'in farhenheit is: ' + conversionToFarhenheit + 'F');
// var temperature = prompt('Enter The Temperature In Farhenheit: ');
// var conversionToCelsius = (temperature - 32) * 5 / 9;
// console.log(temperature + 'F ' + 'In Celsius Is: ' + conversionToCelsius + 'C');
// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1 b. Price of item 2 c. Ordered quantity of item 1 d. Ordered Quantity of item 2 e. Shipping charges
// Compute the total cost & show the receipt in your browser.
// var priceOfProduct1 = +prompt('Enter the Price of the Product One: ');
// var quantityFirstProduct = +prompt('Enter the Quantity of the Product You Buy: ');
// var priceOfProduct2 = +prompt('Enter The Price Of Product Second: ');
// var quantitySecondProduct = +prompt('Enter the Quantity of The Product Second: ');
// document.write('<h1>SHOPPING CART</h1>');
// document.write('Price Of Item 1 Is: ' + priceOfProduct1);
// document.write('<br/>');
// document.write('Quantity Of Item 1 Is: ' + quantityFirstProduct);
// document.write('<br/>');
// document.write('Price Of Item 2 Is: ' + priceOfProduct2);
// document.write('<br/>');
// document.write('Quantity Of Second Product Is: ' + quantitySecondProduct);
// document.write('<br/>');
// document.write('<br/>');
// document.write('Total Cost Of Your Order Is:', (priceOfProduct1 * quantityFirstProduct) + (priceOfProduct2 * quantitySecondProduct));
// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
// var totalMarks = +prompt('Enter The Total Marks Here: ');
// var obtainedMarks = +prompt('Enter the Obtained Marks Here: ');
// document.write('Total Marks: ' + totalMarks);
// document.write('<br/>');
// document.write('Obatined Marks: ' + obtainedMarks);
// document.write('<br/>');
// document.write('Percentage: ', (obtainedMarks * 100) / totalMarks);
// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
// var usDollar = 164.21;
// var saudiRiyal = 28;
// document.write("<br/>");
// document.write('Total Pakistani Currency You have: ', (usDollar * 10) + (saudiRiyal * 25));
// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence: a. Add 5 b. Multiply by 10 c. Divide the result by 2 Perform all calculations in a single expression
// var calculation = (5 + 5 * 10 / 2);
// console.log(calculation);
// 11. The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. b. Store their birth year in a variable. c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN years old”.
// var currentYear = 2020;
// var birthYear = +prompt('Enter your Birth Year Here: ');
// document.write('<br/>');
// document.write('<h1>Age Calculator</h1>');
// document.write('Current Year: ' + currentYear);
// document.write('<br/>');
// document.write('Bith Year: ' + birthYear);
// document.write('Your Age Is: ', currentYear - birthYear);
// 12. The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
// var radius = +prompt('Enter the Radius Of the Circle Here: ');
// var Pi = 3.142;
// document.write('<br/>');
// document.write('Circumference Of Circle Is: ', 2 * Pi * radius);
// document.write('<br/>');
// document.write('Area Of Circle IS: ', Pi * (radius * radius));
// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. a. Store your favorite snack into a variable b. Store your current age into a variable. c. Store a maximum age into a variable. d. Store an estimated amount per day (as a number). e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
// var favSnacks = 'Kurkure';
// var age = 20;
// var maxAge = 63;
// var estimatedSnackPerDay = 3;
// document.write('<h1>The LifeTime Supply Calculator.</h1>');
// document.write('Favourite Snack: ' + favSnacks);
// document.write('<br/>');
// document.write('Current Age: ' + age);
// document.write('<br/>');
// document.write('Estimated Maximum Age: ' + maxAge);
// document.write('<br/>');
// document.write('Amount Of Snacks Per Day: ' + estimatedSnackPerDay);
// document.write('<br/>');
// document.write('You will need ' + (estimatedSnackPerDay * maxAge) + ' ' + favSnacks + ' to Last you untill you ripe old age of ' + maxAge + '.');