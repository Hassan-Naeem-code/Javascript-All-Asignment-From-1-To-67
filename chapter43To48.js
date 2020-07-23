console.log('Muhammad Hassan Naeem');
// 1. Show an alert box on click on a link.

// function getAlert() {
//     alert('Hello! My dear how are you...');
// }

// 2. Display some Mobile images in browser. On click on an image Show the message in alert to user.

// function getResult() {
//     alert('Thanks For Purchasing From uS...');
// }

// 3. Display 10 student records in table and each row should contain a delete button. If you click on a button to delete a record, entire row should be deleted.
// let tableContent = `<table border="5" cellspacing="5" cellpadding="5" id="tableID">
// <tr>
//     <th>INDEX</th>
//     <th>NAME</th>
//     <th>CLASS</th>
//     <th> </th>
// </tr>
// <tr>
//     <td>1</td>
//     <td>Muhammad Ahmed</td>
//     <td>10</td>
//     <td><button type="button" onclick="deleteTheRow(this)">DELETE</button></td>
// </tr>
// <tr>
//     <td>2</td>
//     <td>Muhammad Raheel</td>
//     <td>10</td>
//     <td><button type="button" onclick="deleteTheRow(this)">DELETE</button></td>
// </tr>
// <tr>
//     <td>3</td>
//     <td>Muhammad Ashraf</td>
//     <td>9</td>
//     <td><button type="button" onclick="deleteTheRow(this)">DELETE</button></td>
// </tr>
// <tr>
//     <td>4</td>
//     <td>Muhammad Rashid</td>
//     <td>10</td>
//     <td><button type="button" onclick="deleteTheRow(this)">DELETE</button></td>
// </tr>
// <tr>
//     <td>5</td>
//     <td>Muhammad Hamid</td>
//     <td>8</td>
//     <td><button type="button" onclick="deleteTheRow(this)">DELETE</button></td>
// </tr>
// <tr>
//     <td>6</td>
//     <td>Muhammad Wajid</td>
//     <td>10</td>
//     <td><button type="button" onclick="deleteTheRow(this)">DELETE</button></td>
// </tr>
// <tr>
//     <td>7</td>
//     <td>Muhammad Hassan Naeem</td>
//     <td>14</td>
//     <td><button type="button" onclick="deleteTheRow(this)">DELETE</button></td>
// </tr>
// <tr>
//     <td>8</td>
//     <td>Muhammad Usman</td>
//     <td>7</td>
//     <td><button type="button" onclick="deleteTheRow(this)">DELETE</button></td>
// </tr>
// <tr>
//     <td>9</td>
//     <td>Muhammad Izhan</td>
//     <td>6</td>
//     <td><button type="button" onclick="deleteTheRow(this)">DELETE</button></td>
// </tr>
// <tr>
//     <td>10</td>
//     <td>Muhammad Wazeer</td>
//     <td>5</td>
//     <td><button type="button" onclick="deleteTheRow(this)">DELETE</button></td>
// </tr>
// </table>`;

// var body = document.childNodes[1].childNodes[2];
// console.log(body);
// body.innerHTML = tableContent;
// let tableIdentification = document.getElementById('tableID');
// console.log(tableIdentification);
// let newDimension = tableIdentification.childNodes[1];
// console.log(newDimension);

// function deleteTheRow(element) {
//     console.log(element);
//     let newDimensionOfParentOfChildnodes = element.parentNode.parentNode;
//     newDimension.removeChild(newDimensionOfParentOfChildnodes);
//     tableIdentification.appendChild(newDimension);
//     body.appendChild(tableIdentification);
//     console.log(newDimensionOfParentOfChildnodes);
// }

// 4. Display an image in browser. Change the picture on mouseover and set the first picture on mouseout.

// function picSwapping(imageGet) {
//     imageGet.src = './afridi.jpg';
//     imageGet.title = 'Mr.Shahid Afridi In An Press Conference';
//     imageGet.style.width = '500px';
//     imageGet.style.height = '400px';
//     imageGet.style.cursor = 'pointer';
// }

// function picRevert(imageChange) {
//     imageChange.src = './afridi1.webp';
//     imageGet.title = 'Mr.Shahid Afridi In An Press Conference And Giving Anoying Reaction';
//     imageGet.style.width = '500px';
//     imageGet.style.height = '400px';
//     imageGet.style.cursor = 'pointer';

// }
// 5. Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button. And show updated counter value in browser.
// let i = 0;
// let interval;
// let showTimer = document.getElementById('timer');
// let increaseButton = document.getElementById('increaseButton');
// let decreaseButton = document.getElementById('decreasebutton')

// function timer() {
//     if (i >= 100000) {
//         i = 0;
//         showTimer.innerHTML = i;
//     } else {
//         showTimer.innerHTML = i;
//         i++;
//     }
// }

// function increaseTimer() {
//     clearInterval(interval);
//     interval = setInterval(timer, 100);
//     increaseButton.disabled = true;
//     decreaseButton.disabled = false;
// }

// function secondTimer() {
//     if (i == 0) {
//         i = 10000;
//         showTimer.innerHTML = i;
//         i--;
//     } else {
//         showTimer.innerHTML = i;
//         --i;
//     }
// }

// function decreaseTimer() {
//     increaseButton.disabled = false;
//     decreaseButton.disabled = true;
//     clearInterval(interval);
//     interval = setInterval(secondTimer, 100);
// }