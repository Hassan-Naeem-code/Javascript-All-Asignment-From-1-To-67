// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).
// var enterUserInput = prompt('Enter Anything Here: ');
// if (enterUserInput.toLowerCase() === enterUserInput) {
//     console.log('You have Entered A Lower Case character');
// } else if (enterUserInput.toUpperCase() === enterUserInput) {
//     console.log('You have Entered A Upper Case Character');
// } else if (enterUserInput !== enterUserInput.toLowerCase() && enterUserInput !== enterUserInput.toUpperCase() && enterUserInput > 0 && enterUserInput <= 100000) {
//     console.log('Ypu Have Entered A Number');
// } else {
//     console.log('No uSe enter the given element only.');
// }
// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
// var num1 = +prompt('Enter FIrst Number Here: ');
// var num2 = +prompt('Enter Second Number Here: ');
// if(num1>num2){
//     console.log('First Number is GREATER than SECOND NUMBER.');
// }
// else if(num2>num2){
//     console.log('Second Number is GREATER than FIRST NUMBER.');
// }
// else if(num1 == num2){
//     console.log('Both Entered Number are Equal.');
// }
// else{
//     console.log('No use enter a valid number or string');
// }
// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.
// num1 = +prompt("Enter a number here: ");
// if(num1>0){
//     console.log('Number Is POSITIVE');
// }
// else if(num1<=-1){
//     console.log('Number Is NEGATIVE');
// }
// else if(num1 == 0){
//     console.log('Number is ZERO');
// }
// else{
//     console.log('No use.');
// }
// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
// var charEnteredByTheUser = prompt('Enter a STRING of lenght 1 here to check it is VOWEL or CONSONANT: ');
// if(charEnteredByTheUser == 'A' || charEnteredByTheUser == 'E' || charEnteredByTheUser == 'I' || charEnteredByTheUser == 'O' || charEnteredByTheUser == 'U' || charEnteredByTheUser == 'a' || charEnteredByTheUser == 'e' || charEnteredByTheUser == 'i' || charEnteredByTheUser == 'o' || charEnteredByTheUser == 'u'){
//     console.log('Your Entered Character is A VOWEL');
// }
// else{
//     console.log('Your Entered CHARACTER IS A CONSONANT');
// }
// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.
// var correctPassword = 'done';
// var userPassword = prompt('Enter Your Password here: ');
// if(correctPassword == userPassword){
//     alert('Correct! The password you entered matched the orignal password');
// }
// else{
//     alert('Please enter your Password');
// }
// 6. This if/else statement does not work. Try to fix it: 
// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
//     greeting = "Good day"; 
// }
// else{
//      greeting = "Good evening";
// }
// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements
// var time = +prompt('Enter the Time In 24 Hour Format: ');
// if(time>=0000 && time< 1200){
//     console.log('GOOD MORNING.');
// }
// else if(time>=1200 && time< 1700){
//     console.log('GOOD AFTERNOON!');
// }
// else if(time>=1700 && time < 2100){
//     console.log('GOOD EVENING..');
// }
// else if(time>=2100 && time<2359){
//     console.log('GOOD NIGHT..');
// }