// // Add your scripts here
// // JS to change image opacity on hover
//
// const images = document.querySelectorAll('.theme > img'); // all images inside <div theme>
// console.log(images);
//
// function changeOpacity() {
//   for (let i = 0; i < images.length; i += 1) {
//     images[i].style.opacity = '0.4'; // change opacity
//   }
//   this.style.opacity = '1'; // keep current image opaque
// }
//
// function resetOpacity() {
//   for (let i = 0; i < images.length; i += 1) {
//     images[i].style.opacity = '1'; // reset opacity of each image
//   }
// }
//
// // // apply event listeners with a loop instead of one at a time
// for (let i = 0; i < images.length; i += 1) {
//   images[i].addEventListener('mouseover', changeOpacity);
//   images[i].addEventListener('mouseout', resetOpacity);
// }
