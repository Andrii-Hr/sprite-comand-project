var refs={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function toggleModal(){refs.modal.classList.toggle("is-hidden"),document.body.classList.toggle("is-hidden")}refs.openModalBtn.addEventListener("click",toggleModal),refs.closeModalBtn.addEventListener("click",toggleModal),document.querySelector(".form-hero").addEventListener("submit",(function(e){e.preventDefault(),new FormData(e.currentTarget).forEach((function(e,o){return console.log("".concat(o,": ").concat(e))})),e.currentTarget.reset()}));
//# sourceMappingURL=index.fa457de0.js.map
