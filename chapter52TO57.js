// var modal = document.getElementById('modal');
// var container = document.getElementById('show');
// console.log(modal);
// console.log(container);
// var Images = ['./1.jpg', './3.jpg', './4.png', './6.jpg', './7.png', './9.jpg', './10.jpg']
// for (var i = 0; i < Images.length; i++) {
//     var img = document.createElement('img');
//     img.src = Images[i];
//     img.className = 'format';
//     img.setAttribute('onclick', 'doSomething(this)');
//     container.appendChild(img);
//     console.log(img);
// }

// var modalImage = document.getElementById('modal-img');

// function doSomething(ele) {
//     console.log('Hello');
//     // alert('Hello');
//     console.log(ele);
//     modal.classList.add('modal-open')
//     modal.classList.remove('modal-close');
//     modal.style.display = 'block';
//     modalImage.src = ele.src;
//     modalImage.setAttribute('onclick', 'onClosedImagModal(this)');
// }

// function onClosedImagModal(findIt) {
//     modal.classList.add('modal-close')
//     modal.classList.remove('modal-open');
//     setTimeout(() => {
//         modal.style.display = "none";
//     }, 550)
// }


// 2. Create a paragraph and two buttons“ zoom in ”(+) and“ zoom out”(-).
// On each click on“ zoom in ”(+), add 10 px in font size of paragraph.
// And on each click on“ zoom out”(-), minus 10 px in font size of paragraph.

// var para1 = document.getElementById('para');
// var fontSize = 15;
// para1.style.fontSize = fontSize + 'px';

// function zoomIn() {
//     fontSize += 10;
//     para1.style.fontSize = fontSize + 'px';
// }

// function zoomOut() {
//     fontSize -= 10;
//     para1.style.fontSize = fontSize + 'px';
// }