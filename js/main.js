import {modal} from "./modal.js";
import {alertError} from "./alert-error.js";
import {notANumber, calculateIMC} from "./utils.js";

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

form.onsubmit = (event) => {
  event.preventDefault()
  
  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrheightIsnotAnumber = notANumber(weight) || notANumber(height)
  if(weightOrheightIsnotAnumber) {
    alertError.open()
    return;
  }

  alertError.close()

  const result = calculateIMC(weight, height)

  displayResultMenssage(result)
}

function displayResultMenssage(result) {
  const message = `Seu IMC é de ${result}`
  modal.open()
  modal.menssage.innerText = message
}

inputHeight.oninput =  () => alertError.close()
inputWeight.oninput =  () => alertError.close()

