// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
var num = 5;
document.write('Results.');
document.write('<br/>');
document.write('The value Of Num Is:'+num);
document.write('<br/>');
document.write('................................');
document.write('<br/>');
num = ++num;
document.write('The Value of ++Num is: '+num);
document.write('<br/>');
document.write('Now the Value is: '+num);
document.write('<br/>');
// num = num++;
document.write('The Value of Num++ is: '+num++);
document.write('<br/>');
document.write('Now the value is: '+num++);
document.write('<br/>');
// num = --num;
document.write('The Value Of --Num Is: '+--num);
document.write('<br/>');
document.write('Now the value is: '+--num);
document.write('<br/>');
// num = num--;
document.write('The value Of Num--is: '+num--);
document.write('<br/>');
document.write('Now The value Is: '+num--);
// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
var a = 2;
var b = 1;
var result = --a + --b + ++b + b--;
document.write('<br/>');
document.write('A: '+a);
document.write('<br/>');
document.write('B: '+b);
document.write('<br/>');
document.write('The Result Is: '+result);
// 3. Write a program that takes input a name from user &
// greet the user.
var userName = prompt('Enter Your Name Here: ');
alert('Assalam o Alikom '+userName);
// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.
var multiplication  = +prompt('Enter A Number for which you want to print the table: ');
var initial = 5;
if(multiplication){
    document.write('<br/>');
    for(var i=1;i<=10;i++){
        document.write(multiplication+' * '+i+' = '+multiplication*i);
        document.write('<br/>');
    }
}
else{
    document.write('<br/>');
    for(var j = 1;j<=10;j++){
        document.write(initial+' * '+j+' = '+initial*j);
        document.write('<br/>');
    }
}
// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)
var subject1 = prompt('Enter The Name Of The First Subject: ');
var subject2 =prompt('Enter The Name Of The Second Subject: ');
var subject3 =prompt('Enter The Name Of The Third Subject: ');
var obtainedMarksInSubject1 = +prompt('Enter The Number Of First Subject: ');
var obtainedMarksInSubject2 = +prompt('Enter The Number Of Second Subject: ');
var obtainedMarksInSubject3 = +prompt('Enter The Number Of Third Subject: ');
document.write('<table cellspacing ="5" cellpadding="10" bgcolor="dodgerblue" border="5px"><tr><th>SR NO.</th><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th> <th>Percentage</th></tr><tr><td>1</td><td>'+subject1+'</td><td>100</td><td>'+obtainedMarksInSubject1+'</td><td>'+(obtainedMarksInSubject1*100)/100+'%</td></tr><tr><td>2</td><td>'+subject2+'</td><td>100</td><td>'+obtainedMarksInSubject2+'</td><td>'+(obtainedMarksInSubject2*100)/100+'%</td></tr><tr><td>3</td><td>'+subject3+'</td><td>100</td><td>'+obtainedMarksInSubject3+'</td><td>'+(obtainedMarksInSubject3*100)/100+'%</td></tr></table>');
