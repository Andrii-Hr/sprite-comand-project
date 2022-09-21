// const refs = {
//   openModalBtn: document.querySelector('[data-modal-open]'),
//   closeModalBtn: document.querySelector('[data-modal-close]'),
//   modal: document.querySelector('[data-modal]'),
// };

// refs.openModalBtn.addEventListener('click', toggleModal);
// refs.closeModalBtn.addEventListener('click', toggleModal);

// function toggleModal() {
//   refs.modal.classList.toggle('is-hidden');
//   document.body.classList.toggle('is-hidden');
// }

// document.querySelector('.form-hero').addEventListener('submit', e => {
//   e.preventDefault();

//   new FormData(e.currentTarget).forEach((value, name) =>
//     console.log(`${name}: ${value}`)
//   );
//   e.currentTarget.reset();
// });

const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  openModalHeroBtn: document.querySelector('[data-modal-open-hero]'),
  openModalOfferBtn: document.querySelector('[data-modal-open-offerings]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};
refs.openModalBtn.addEventListener('click', toggleModal);
refs.openModalHeroBtn.addEventListener('click', toggleModal);
refs.openModalOfferBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
  document.body.classList.toggle('is-hidden');
}
document.querySelector('.form-hero').addEventListener('submit', e => {
  e.preventDefault();
  new FormData(e.currentTarget).forEach((value, name) =>
    console.log(`${name}: ${value}`)
  );
  e.currentTarget.reset();
});
