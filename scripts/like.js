/* этот скрипт использует такие имена классов:
✦ heart-icon — для svg-иконки анимированного сердца
✦ post__like-btn — для кнопки Like рядом с иконкой
✦ post__heart-btn — для кнопки, оборачивающей иконку
✦ heart-active — для обозначения состояния лайкнутой иконки в виде сердца
✦ btn-label — для обозначения текстового элемента внутри кнопки
Если эти классы поменять в HTML, скрипт перестанет работать. Будьте аккуратны.
*/

const likeHeartArray = document.querySelectorAll('.heart-icon');
const likeButtonArray = document.querySelectorAll('.post__like-btn');
const iconButtonArray = document.querySelectorAll('.post__heart-btn');

iconButtonArray.forEach((iconButton, index) => {
  iconButton.onclick = (e) => {
    e.preventDefault();
    toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
  };
});

likeButtonArray.forEach((button, index) => {
  button.onclick = (e) => {
    e.preventDefault();
    toggleIsLiked(likeHeartArray[index], button);
  };
});

function toggleIsLiked(heart, button) {
  heart.classList.toggle('heart-active');
  setButtonText(heart, button);
}

function setButtonText(heart, button) {
  if ([...heart.classList].includes('heart-active')) {
    setTimeout(
        () => (button.querySelector('.btn-label').textContent = 'Unlike'),
        500
    );
  } else {
    setTimeout(
        () => (button.querySelector('.btn-label').textContent = 'Like'),
        500
    );
  }
}