const btn1 = document.querySelector('.btn1');                //declare four const variables
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const imgTexts = document.querySelectorAll('.img-text');
const increaseBtn = document.getElementById('Increase');
const decreaseBtn = document.getElementById('Decrease');



const body = document.querySelector('body');

btn1.addEventListener('click', function () {   //add event listner to click function
  body.style.backgroundColor = '#111';    //change webpage background colors
  body.style.color = '#fff';
  imgTexts.forEach((imgText) => {
    imgText.style.backgroundColor = '#52527a';     //change text box background colors
    imgText.style.color = '#fff';
  });
});
btn2.addEventListener('click', function () {
  body.style.backgroundColor = '#00ABE4';
  body.style.color = 'white';
  imgTexts.forEach((imgText) => {
    imgText.style.backgroundColor = '#99ebff';
    imgText.style.color = 'black';
  });
});
btn3.addEventListener('click', function () {
  body.style.backgroundColor = '#2D283E';
  body.style.color = '#802BB1';
  imgTexts.forEach((imgText) => {
    imgText.style.backgroundColor = '#D1D7E0';
    imgText.style.color = '#802BB1';
  });
});
btn4.addEventListener('click', function () {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);    //generate random color
  body.style.backgroundColor = "#" + randomColor;
  const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
  body.style.color = "#" + randomColor2;

  imgTexts.forEach((imgText) => {
    imgText.style.backgroundColor = "#" + randomColor;
    imgText.style.color = "#" + randomColor2;
  });
});
increaseBtn.addEventListener('click', () => {
  const imgText = document.querySelectorAll('.img-text');

  imgText.forEach((text) => {
    const currentFontSize = window.getComputedStyle(text).getPropertyValue('font-size');     
    const newFontSize = parseInt(currentFontSize) + 2;     //add two to current font size
    text.style.fontSize = `${newFontSize}px`;
  });

});
decreaseBtn.addEventListener('click', () => {
  const imgText = document.querySelectorAll('.img-text');
  imgText.forEach((text) => {
    const currentFontSize = window.getComputedStyle(text).getPropertyValue('font-size');
    const newFontSize = parseInt(currentFontSize) - 2;
    text.style.fontSize = `${newFontSize}px`;
  });
});





