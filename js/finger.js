function startAnimation() {
  const img = document.querySelector('#finger1 img');
  const fingerContainer = img.parentElement;
  const box = document.getElementById('textOn');

  fingerContainer.style.transform = 'translate(-15rem, -50%)';

  setTimeout(() => {
    img.src = './image/finger2.png';
    box.style.backgroundColor = '#9dabb6';
    box.style.color = '#ffffff';

    setTimeout(() => {
      img.src = './image/finger1.png';

      setTimeout(() => {
        fingerContainer.style.transform = 'translate(0, -50%)';
      }, 500);
    }, 500);
  }, 1000);
}

window.onload = function () {
  setTimeout(startAnimation, 2000);
};
