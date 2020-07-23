// 1. Create a signup form and display form data in your web
// page on submission.

// let firstName = document.getElementById('fName');
// let lastName = document.getElementById('lName');
// let emailAddress = document.getElementById('emailAddress');
// let passWordOfUser = document.getElementById('password');
// let userGender = document.getElementById('male');
// let userGender1 = document.getElementById('Female');
// let userGender2 = document.getElementById('custom');
// let userBirthday = document.getElementById('birthday');
// var body = document.childNodes[1].childNodes[2];
// console.log(body);
// let firstNameDisplay = document.createElement('h1');
// let lastNameDisplay = document.createElement('h1');
// let emailAddressDisplay = document.createElement('h1');
// let passWordOfUserDisplay = document.createElement('h1');
// let userGenderDisplay = document.createElement('h1');
// let userBirthdayDisplay = document.createElement('h1');

// function getOutput() {
//     body.innerHTML = '';
//     var firstNameDisplayText = document.createTextNode(firstName.value);
//     var lastNameDisplayText = document.createTextNode(lastName.value);
//     var emailAddressDisplayText = document.createTextNode(emailAddress.value);
//     var passWordOfUserDisplayText = document.createTextNode(passWordOfUser.value);
//     var userBirthdayDisplayText = document.createTextNode(userBirthday.value);
//     firstNameDisplay.appendChild(firstNameDisplayText);
//     lastNameDisplay.appendChild(lastNameDisplayText);
//     emailAddressDisplay.appendChild(emailAddressDisplayText);
//     passWordOfUserDisplay.appendChild(passWordOfUserDisplayText);
//     if (userGender.selected) {
//         var userGenderDisplayText = document.createTextNode(userGender.value);
//         userGenderDisplay.appendChild(userGenderDisplayText);
//     } else if (userGender1.selected) {
//         var userGenderDisplayText = document.createTextNode(userGender1.value);
//         userGenderDisplay.appendChild(userGenderDisplayText);
//     } else if (userGender2.selected) {
//         var userGenderDisplayText = document.createTextNode(userGender2.value);
//         userGenderDisplay.appendChild(userGenderDisplayText);
//     }
//     userBirthdayDisplay.appendChild(userBirthdayDisplayText);
//     body.appendChild(firstNameDisplay);
//     body.appendChild(lastNameDisplay);
//     body.appendChild(emailAddressDisplay);
//     body.appendChild(passWordOfUserDisplay);
//     body.appendChild(userGenderDisplay);
//     body.appendChild(userBirthdayDisplay);
// }

// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.

// var remainingText = `The launch of the Infinity Display, the Galaxy S8 and S8+ revolutionized
// the way phones were crafted, breaking through the confines of the smartphone screen.It 's the beginning of a
// stunning, immersive screen that 's easy to hold in one hand.`;
// var firstPara = document.getElementById('firstPara');

// function getMore() {
//     firstPara.innerText = remainingText;
// }



// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.
var row = 1;
var firstName = document.getElementById('fName');
var lastName = document.getElementById('lName');
var emailAddress = document.getElementById('emailAddress');
var address = document.getElementById('address');
var mobileNumber = document.getElementById('mbNumber');
var birthdayDate = document.getElementById('birthday');
var className = document.getElementById('className');
var tableBioDataShow = document.getElementById('tableShowBioData');
var tableBody = tableBioDataShow.childNodes[1];
var submitFormButton = document.getElementById('submitBTN');
console.log(tableBody);
var firstNameAddress;
var lastNameAddress;
var emailAddressPath;
var addressPath;
var mobileNumberAddress;
var birthdayAddress;
var classNameAddress;
// var createTableRow = tableBioDataShow.insertRow(row);
// var firstNameDisplayArea = createTableRow.insertCell(0);
// var lstNameDisplayArea = createTableRow.insertCell(1);
// var emailAddressDisplayArea = createTableRow.insertCell(2);
// var addressDisplayArea = createTableRow.insertCell(3);
// var mobileNumberDisplayArea = createTableRow.insertCell(4);
// var birthdayDateDisplayArea = createTableRow.insertCell(5);
// var classNameDisplayArea = createTableRow.insertCell(6);
// var deleteBtnDisplayArea = createTableRow.insertCell(7);
// var editBtnDisplayArea = createTableRow.insertCell(8);
var deleteBtn = document.createElement('button');
var deletValue = document.createTextNode('DELETE');
var editBtn = document.createElement('button');
var editValue = document.createTextNode('EDIT');

function getOutput() {
    console.log(tableBioDataShow);
    console.log(tableBioDataShow.childNodes[1].childNodes[1].childNodes);
    var createTableRow = tableBioDataShow.insertRow(row);
    var firstNameDisplayArea = createTableRow.insertCell(0);
    var lstNameDisplayArea = createTableRow.insertCell(1);
    var emailAddressDisplayArea = createTableRow.insertCell(2);
    var addressDisplayArea = createTableRow.insertCell(3);
    var mobileNumberDisplayArea = createTableRow.insertCell(4);
    var birthdayDateDisplayArea = createTableRow.insertCell(5);
    var classNameDisplayArea = createTableRow.insertCell(6);
    var deleteBtnDisplayArea = createTableRow.insertCell(7);
    var editBtnDisplayArea = createTableRow.insertCell(8);
    var deleteBtn = document.createElement('button');
    var deletValue = document.createTextNode('DELETE');
    var editBtn = document.createElement('button');
    var editValue = document.createTextNode('EDIT');
    deleteBtn.setAttribute('onclick', 'deleteItem(this)');
    editBtn.setAttribute('onclick', 'editItem(this)');
    deleteBtn.appendChild(deletValue);
    editBtn.appendChild(editValue);
    firstNameDisplayArea.innerHTML = firstName.value;
    lstNameDisplayArea.innerHTML = lastName.value;
    emailAddressDisplayArea.innerHTML = emailAddress.value;
    addressDisplayArea.innerHTML = address.value;
    mobileNumberDisplayArea.innerHTML = mobileNumber.value;
    birthdayDateDisplayArea.innerHTML = birthdayDate.value;
    classNameDisplayArea.innerHTML = className.value;
    deleteBtnDisplayArea.appendChild(deleteBtn);
    editBtnDisplayArea.appendChild(editBtn);
    firstName.value = '';
    lastName.value = '';
    emailAddress.value = '';
    address.value = '';
    mobileNumber.value = '';
    birthdayDate.value = '';
    className.value = '';
    row++;
}

function deleteItem(getElementHere) {
    console.log(getElementHere);
    console.log(getElementHere.parentNode.parentNode);
    var targetToRemove = getElementHere.parentNode.parentNode;
    tableBody.removeChild(targetToRemove);
}


function editItem(elementHere) {
    // console.log(elementHere);
    // console.log(elementHere.parentNode.previousSibling.previousSibling.innerHTML);
    // classNameAddress = elementHere.parentNode.previousSibling.previousSibling.innerHTML;
    // className.value = classNameAddress;
    // console.log(elementHere.parentNode.previousSibling.previousSibling.previousSibling.innerHTML);
    // birthdayAddress = elementHere.parentNode.previousSibling.previousSibling.previousSibling.innerHTML;
    // birthdayDate.value = birthdayAddress;
    // console.log(elementHere.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML);
    // mobileNumberAddress = elementHere.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML;
    // mobileNumber.value = mobileNumberAddress;
    // console.log(elementHere.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML);
    // addressPath = elementHere.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML;
    // address.value = addressPath;
    // console.log(elementHere.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML);
    // emailAddressPath = elementHere.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML;
    // emailAddress.value = emailAddressPath;
    // console.log(elementHere.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML);
    // lastNameAddress = elementHere.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML;
    // lastName.value = lastNameAddress;
    // console.log(elementHere.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML);
    // firstNameAddress = elementHere.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML;
    // firstName.value = firstNameAddress;
    // submitFormButton.innerHTML = 'SAVE DATA';
    // submitFormButton.setAttribute('onclick', 'saveData()');
    console.log(elementHere);
    console.log(elementHere.parentNode.previousSibling.previousSibling.innerHTML);
    classNameAddress = elementHere;
    className.value = elementHere.parentNode.previousSibling.previousSibling.innerHTML;
    console.log(elementHere.parentNode.previousSibling.previousSibling.previousSibling.innerHTML);
    birthdayAddress = elementHere;
    birthdayDate.value = elementHere.parentNode.previousSibling.previousSibling.previousSibling.innerHTML;
    console.log(elementHere.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML);
    mobileNumberAddress = elementHere;
    mobileNumber.value = elementHere.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML;
    console.log(elementHere.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML);
    addressPath = elementHere;
    address.value = elementHere.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML;
    console.log(elementHere.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML);
    emailAddressPath = elementHere;
    emailAddress.value = elementHere.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML;
    console.log(elementHere.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML);
    lastNameAddress = elementHere;
    lastName.value = elementHere.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML;
    console.log(elementHere.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML);
    firstNameAddress = elementHere;
    firstName.value = elementHere.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML;
    submitFormButton.innerHTML = 'SAVE DATA';
    submitFormButton.setAttribute('onclick', 'saveData()');
}

function saveData() {
    console.log(firstNameAddress);
    console.log(lastNameAddress);
    console.log(emailAddressPath);
    console.log(addressPath);
    console.log(mobileNumberAddress);
    console.log(birthdayAddress);
    console.log(classNameAddress);
    firstNameAddress.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML = firstName.value;
    lastNameAddress.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML = lastName.value;
    emailAddressPath.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML = emailAddress.value;
    addressPath.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML = address.value;
    mobileNumberAddress.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML = mobileNumber.value;
    birthdayAddress.parentNode.previousSibling.previousSibling.previousSibling.innerHTML = birthdayDate.value;
    classNameAddress.parentNode.previousSibling.previousSibling.innerHTML = className.value;
    submitFormButton.innerHTML = 'SUBMIT';
    submitFormButton.setAttribute('onclick', 'getOutput()');
    firstName.value = '';
    lastName.value = '';
    emailAddress.value = '';
    address.value = '';
    mobileNumber.value = '';
    birthdayDate.value = '';
    className.value = '';
    firstNameAddress = undefined;
    lastNameAddress = undefined;
    emailAddressPath = undefined;
    addressPath = undefined;
    mobileNumberAddress = undefined;
    birthdayAddress = undefined;
    classNameAddress = undefined;
}