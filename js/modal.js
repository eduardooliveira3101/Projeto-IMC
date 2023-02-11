export const modal = {

  wrapper: document.querySelector(".modal-wrapper"),

  menssage: document.querySelector(".modal-wrapper .title span"),
  btnClose: document.querySelector(".modal-wrapper button.close"),

  open() {
    modal.wrapper.classList.add("open")
  },

  close() {
    modal.wrapper.classList.remove("open")
  }
}

modal.btnClose.onclick = (remove) => {
  modal.close()
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
  if (event.key === "Escape") {
    modal.close()
  }

}