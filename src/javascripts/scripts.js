// // Add your scripts here
// // JS to change image opacity on hover

// let images = document.querySelectorAll('main > a > img'); // all images inside <a> inside <main>
// console.log(images);

// // apply event listeners with a loop instead of one at a time
// for (let i = 0; i < images.length; i++) {
//   images[i].addEventListener('mouseover', changeOpacity);
//   images[i].addEventListener('mouseout', resetOpacity);
// }

// function changeOpacity() {
//   for (let i = 0; i < images.length; i++) {
//     console.log(i);
//     images[i].style.opacity = '0.4'; // change opacity
//   }
//   this.style.opacity = '1'; // keep current image opaque
//   // in event handlers, â€œthisâ€ refer to the HTML element that received the event
//   // console.log(this);
// }

// function resetOpacity() {
//   for (let i = 0; i < images.length; i++) {
//     images[i].style.opacity = '1'; // reset opacity of each image
//   }
// }
