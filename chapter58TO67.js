// console.log('Muhammad Hassan Naeem');
// i. Get element of id “main-content” and assign them in a variable.
var mainContent = document.getElementById('main-content');
// console.log(mainContent);
// ii. Display all child elements of “main-content” element.
// console.log(mainContent.innerHTML);
// document.write('<br/>');
// document.write('<br/>');
// document.write(mainContent.innerHTML);

// iii. Get all elements of class “render” and show their innerHTML
// in browser.
// document.write('<br/>');
// document.write('<br/>');

// var paragraphRender = document.getElementsByClassName('render');
// for (var i = 0; i < paragraphRender.length; i++) {
//     document.write(paragraphRender[i].innerHTML);
//     document.write('<br/>');
// }
// console.log(paragraphRender);

// iv. Fill input value whose element id first-name using javascript.
// var firstNameUser = document.getElementById('first-name');
// console.log(firstNameUser);
// firstNameUser.value = paragraphRender[0].innerHTML;

// // v. Repeat part iv for id ”last-name” and “email”.
// var lastNameUser = document.getElementById('last-name');
// console.log(lastNameUser);
// lastNameUser.value = paragraphRender[1].innerHTML;
// var emailAddressUser = document.getElementById('email');
// console.log(emailAddressUser);
// emailAddressUser.value = paragraphRender[2].innerHTML;

// 2. use HTML code of question 1 and show the result on browser.
// i. What is node type of element having id “form-content”.

var formNodeChecker = document.getElementById('form-content');
console.log(formNodeChecker.nodeType);
document.write('<br/>');
document.write(formNodeChecker.nodeType);

// ii. Show node type of element having id “lastName” and its child node.
var paragraphIdLastName = document.getElementById('lastName');
console.log(paragraphIdLastName.nodeType);
document.write('<br/>');
document.write(`Last Name NodeTyper => ${paragraphIdLastName.nodeType}`);
document.write('<br/>');
document.write(`Last Name ChildNode type => ${paragraphIdLastName.nextSibling.nodeType}`);
console.log(paragraphIdLastName.nextSibling.nodeType);


// iii. Update child node of element having id “lastName”.
var updatedVersion = paragraphIdLastName.nextSibling.value = 'bankalex@example.com';
document.write('<br/>');
document.write('<br/>');
document.write(`Updated Child Node OF Element Whose ID is Last-Name is => ${updatedVersion}`);

// iv. Get First and last child of id “main-content”.
var firstChildOfMainContent = mainContent.firstChild;
var lastChildOfMainContent = mainContent.lastChild;
console.log(`First Child Of Id Mian-Content Is => ${firstChildOfMainContent.nodeName} Node Type Is => ${firstChildOfMainContent.nodeType}`);
console.log(`Last Child Of Id Main-Content Is => ${lastChildOfMainContent.nodeName} Node Type Is => ${lastChildOfMainContent.nodeType}`);

// v. Get next and previous siblings of id “lastName”.
var lastName = document.getElementById('last-name');
var nextSiblingOfLastName = lastName.nextSibling;
var previousSiblingOfLastName = lastName.previousSibling;
console.log(lastName);
console.log(nextSiblingOfLastName);
console.log(previousSiblingOfLastName);

// vi. Get parent node and node type of element having id “email”

var emailID = document.getElementById('email');
var parentNodeOfEmailId = emailID.parentNode;
var nodeTypeOfEmailId = emailID.nodeType;
console.log(parentNodeOfEmailId);
console.log(`Node Type Of Element Having Id Of email => ${nodeTypeOfEmailId}`);