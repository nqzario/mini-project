import { Modal } from './js/modal.js';
import { loadReviews, loadMore } from './js/reviews.js';
// import slider from './js/slider';

globalThis.Modal = Modal;

loadReviews('.reviews-list-item');
globalThis.loadMore = loadMore;

// slider('.mySwiper');

function changePhotoSale(e) {
  let sale = document.querySelector('.sale-images-list');
  sale.addEventListener('click', e => {
    console.log(e.target.dataset.src);

    let src = e.target.dataset.src;
    let mainImage = document.querySelector('.sale-image');
    let child = mainImage.querySelector('picture');
    let newImg = `
        <picture>
            <source srcset="
                ${src}.png,
                ${src}@2x.png 2x
                ">
            <img src="${src}" alt="Preview image">
        </picture>
                `;
    console.log(newImg);
    mainImage.removeChild(child);
    mainImage.insertAdjacentHTML('beforeend', newImg);
  });
}
// changePhotoSale();
