export const Modal = {
  openModal: function (selector) {
    let modal = document.querySelector(selector);
    modal.addEventListener('click', this.removeModal);
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.toggle('no-scroll');
  },
  closeModal: function (selector) {
    let modal = document.querySelector(selector);
    modal.addEventListener('click', this.removeModal);
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.toggle('no-scroll');
  },
  openMobileMenu: function (selector) {
    let modal = document.querySelector(selector);
    modal.addEventListener('click', this.removeModal);
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.toggle('no-scroll');
  },
  closeMobileMenu: function (selector) {
    let modal = document.querySelector(selector);
    modal.addEventListener('click', this.removeModal);
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.toggle('no-scroll');
  },

  removeModal(e) {
    if (e.target === e.currentTarget) {
      e.currentTarget.classList.remove('is-open');
      document.body.classList.toggle('no-scroll');
    }
  },
};
