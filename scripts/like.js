/* Этот скрипт использует такие имена классов:
✦ heart-icon — для svg-иконки анимированного сердца
✦ post__like-btn — для кнопки Like
✦ post__heart-btn — для кнопки сердца
✦ heart-active — для обозначения состояния лайкнутой иконки
✦ btn-label — для текста внутри кнопки Like
*/

document.addEventListener('DOMContentLoaded', function() {
  // Находим все элементы сердечек и кнопок
  const heartButtons = document.querySelectorAll('.post__heart-btn');
  const likeButtons = document.querySelectorAll('.post__like-btn');

  // Обработчик для кнопок сердца
  heartButtons.forEach((heartBtn, index) => {
    heartBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();

      const heartIcon = this.querySelector('.heart-icon');
      if (heartIcon) {
        heartIcon.classList.toggle('heart-active');
        updateLikeButtonText(index);
      }
    });
  });

  // Обработчик для кнопок Like
  likeButtons.forEach((likeBtn, index) => {
    likeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();

      const heartIcon = heartButtons[index].querySelector('.heart-icon');
      if (heartIcon) {
        heartIcon.classList.toggle('heart-active');
        updateLikeButtonText(index);
      }
    });
  });

  // Функция для обновления текста кнопки Like
  function updateLikeButtonText(index) {
    const heartIcon = heartButtons[index].querySelector('.heart-icon');
    const likeBtn = likeButtons[index];
    const btnLabel = likeBtn.querySelector('.btn-label');

    if (!heartIcon || !btnLabel) return;

    if (heartIcon.classList.contains('heart-active')) {
      setTimeout(() => {
        btnLabel.textContent = 'Unlike';
      }, 500);
    } else {
      setTimeout(() => {
        btnLabel.textContent = 'Like';
      }, 500);
    }
  }

  // Обработка модального окна
  const saveBtn = document.querySelector('.page-footer__btn');
  const saveDialog = document.getElementById('saveDialog');
  const okBtn = document.querySelector('.modal-dialog__btn');
  const modalForm = document.querySelector('.modal-dialog__form');

  // Открытие модального окна
  if (saveBtn) {
    saveBtn.addEventListener('click', function(e) {
      e.preventDefault();
      if (saveDialog) {
        saveDialog.showModal();
      }
    });
  }

  // Закрытие модального окна при клике на ОК
  if (okBtn) {
    okBtn.addEventListener('click', function(e) {
      e.preventDefault();
      if (saveDialog) {
        saveDialog.close();
      }
    });
  }

  // Закрытие модального окна при отправке формы
  if (modalForm) {
    modalForm.addEventListener('submit', function(e) {
      e.preventDefault();
      if (saveDialog) {
        saveDialog.close();
      }
    });
  }

  // Закрытие модального окна при клике вне его
  if (saveDialog) {
    saveDialog.addEventListener('click', function(e) {
      if (e.target === this) {
        this.close();
      }
    });
  }
});