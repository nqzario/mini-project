export let loadReviews = function (selector) {
  let itemList = document.querySelectorAll(selector);
  let starIndex = 1;

  if (768 < innerWidth && innerWidth < 1280) {
    starIndex = 2;
  } else if (innerWidth > 1280) {
    starIndex = 3;
  }
  for (let i = starIndex; i < itemList.length; i++) {
    itemList[i].classList.add('js-load-more');
  }
};
export let loadMore = function (selector) {
  let itemList = document.querySelectorAll(selector);
  let loadLimit = 1;
  let timeout = 500;
  //перевіряємо чи є у нас елементи для завантаження
  if (itemList.length !== 0) {
    //для кожного елемента проходимо ітерацію (цикл)
    for (let i = 0; i < loadLimit; i++) {
      //встановлюємо таймер для виконання, щоб симулювати завантаження з сервера
      setTimeout(() => {
        //додаємо елемент до відображення (знімаємо клас який його приховує)
        itemList[i].classList.remove('js-load-more');
      }, timeout);
    }
  } else {
    document.querySelector('.reviews-btn').innerText = 'No more reviews!';
  }
};
