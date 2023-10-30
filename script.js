const views = document.querySelector(".views");
const cost = document.querySelector(".cost");

const range = document.querySelector("#range");
const discountCheck = document.querySelector("#checkbox");

const monthly_yearly = document.querySelector(".monthly");
const leftWhite = document.querySelector(".leftWhite");

const checkbox = document.querySelector(".check");

range.addEventListener("input", () => generator(event));

function generator(event) {
  let number = Number(event.target.value);
  if (number === 8 || number === 72) {
    views.innerHTML = "10K pageviews";
  } else if (number === 12 || number === 108) {
    views.innerHTML = "50K pageviews";
  } else if (number === 16 || number === 144) {
    views.innerHTML = "75K pageviews";
  } else if (number === 20 || number === 180) {
    views.innerHTML = "100K pageviews";
  } else if (number === 24 || number === 216) {
    views.innerHTML = "500K pageviews";
  } else if (number === 28 || number === 252) {
    views.innerHTML = "750K pageviews";
  } else if (number === 32 || number === 288) {
    views.innerHTML = "1M pageviews";
  }
  cost.textContent = "$" + number.toFixed(2);

  let value = event.target.value;
  let min = event.target.min;
  let max = event.target.max;

  let percentage = ((value - min) / (max - min)) * 100 + "%";

  document.documentElement.style.setProperty("--thumb-position", percentage);
}

discountCheck.addEventListener("change", (event) => {
  let originalValue = Number(range.value);
  if (event.target.checked) {
    range.min = "72";
    range.max = "288";
    range.step = "36";
    range.value = (originalValue * 12 * 75) / 100;

    cost.innerHTML = `$${parseInt(range.value).toFixed(2)}`;
    monthly_yearly.innerHTML = "/ year";
    checkbox.style.background = "#7aeadf";
  } else {
    range.min = "8";
    range.max = "32";
    range.step = "4";
    range.value = (originalValue * 100) / 75 / 12;

    cost.innerHTML = `$${parseInt(range.value).toFixed(2)}`;
    monthly_yearly.innerHTML = "/ month";
    checkbox.style.background = "#cfd8ef";
  }
});
