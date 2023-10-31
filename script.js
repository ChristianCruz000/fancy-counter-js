const counterEl = document.querySelector(".counter");

const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const resetButtonEl = document.querySelector(".counter__reset-button");
const counterValueEl = document.querySelector(".counter__value");
const counterTitleEl = document.querySelector(".counter__title");

resetButtonEl.addEventListener("click", function () {
  // set counter value to 0
  counterValueEl.textContent = 0;

  // reset backgriund color:
  counterEl.classList.remove("counter--limit");

  //renable increase and decrease buttons:
  increaseButtonEl.disabled = false;
  decreaseButtonEl.disable = false;

  // unfocus (blur = oposite of focus)
  resetButtonEl.blur();
});

decreaseButtonEl.addEventListener("click", function () {
  // get current value of counter
  const currentValue = counterValueEl.textContent;

  //convert value to number type
  const currentValueAsNumber = +currentValue;

  // Decrement by 1
  let newValue = currentValueAsNumber - 1;

  // If newValue is less than 0:
  if (newValue < 0) {
    newValue = 0;
  }

  // set counter with new value
  counterValueEl.textContent = newValue;

  decreaseButtonEl.blur();
});

function incrementCounter() {
  // get current value of counter
  const currentValue = counterValueEl.textContent;

  //convert value to number type
  const currentValueAsNumber = +currentValue;

  // increment by 1
  let newValue = currentValueAsNumber + 1;

  //check if newValue is greather than 5
  if (newValue > 5) {
    newValue = 5;

    // visual indicator that limit has been reached
    counterEl.classList.add("counter--limit");

    // update counter title to indicate counter limit has been reached
    // counterTitleEl.textContent = "Oops! Limit has been reached";

    // update counter title and add inner style:
    counterTitleEl.innerHTML = "<b>Oops!</b><br/>Limit reached";

    // Disable buttons when limit has been reached:
    increaseButtonEl.disabled = true;
    decreaseButtonEl.disabled = true;
  }

  // set counter with new value
  counterValueEl.textContent = newValue;

  increaseButtonEl.blur();
}

increaseButtonEl.addEventListener("click", incrementCounter);
document.addEventListener("keydown", incrementCounter);
