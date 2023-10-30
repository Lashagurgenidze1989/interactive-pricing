const views = document.querySelector(".views");
const cost = document.querySelector(".cost");

const range = document.querySelector("#range");
const discountCheck = document.querySelector("#checkbox");

const monthly_yearly = document.querySelector(".monthly");
const leftWhite = document.querySelector(".leftWhite");
const rightWhite = document.querySelector(".rightWhite");

range.addEventListener("input", () => generator(event));

function generator(event) {
  if (Number(event.target.value) === 8) {
    views.innerHTML = "10K pageviews";
  } else if (Number(event.target.value) === 12) {
    views.innerHTML = "50K pageviews";
  } else if (Number(event.target.value) === 16) {
    views.innerHTML = "75K pageviews";
  } else if (Number(event.target.value) === 20) {
    views.innerHTML = "100K pageviews";
  } else if (Number(event.target.value) === 24) {
    views.innerHTML = "500K pageviews";
  } else if (Number(event.target.value) === 28) {
    views.innerHTML = "750K pageviews";
  } else if (Number(event.target.value) === 32) {
    views.innerHTML = "1M pageviews";
  }
  cost.textContent = "$" + Number(event.target.value).toFixed(2);

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

    cost.innerHTML = `$${range.value.toFixed(2)}`;
    monthly_yearly.innerHTML = "/ year";

    leftWhite.style.display = "none";
    rightWhite.style.display = "block";
  } else {
    cost.innerHTML = `$${range.value.toFixed(2)}`;
    monthly_yearly.innerHTML = "/ month";
    leftWhite.style.display = "block";
    rightWhite.style.display = "none";

    range.min = "8";
    range.max = "32";
    range.step = "4";
    range.value = (originalValue * 100) / 75 / 12;
  }
});
