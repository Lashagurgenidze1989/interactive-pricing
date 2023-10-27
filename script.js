const views = document.querySelector(".views");
const cost = document.querySelector(".cost");

const range = document.querySelector("#range");
const discountCheck = document.querySelector("#checkbox");

console.log(Number(range.value));

range.addEventListener("input", () => generator(event));

function generator(event) {
  if (Number(event.target.value) === 8) {
    views.innerHTML = "10K pageviews";
  }

  if (Number(event.target.value) === 12) {
    views.innerHTML = "50K pageviews";
  }

  if (Number(event.target.value) === 16) {
    views.innerHTML = "75K pageviews";
  }

  if (Number(event.target.value) === 20) {
    views.innerHTML = "100K pageviews";
  }

  if (Number(event.target.value) === 24) {
    views.innerHTML = "500K pageviews";
  }

  if (Number(event.target.value) === 28) {
    views.innerHTML = "750K pageviews";
  }

  if (Number(event.target.value) === 32) {
    views.innerHTML = "1M pageviews";
  }

  cost.textContent = "$" + Number(event.target.value).toFixed(2);

  /* if (discountCheck.checked) {
    event.target.min = "72";
    event.target.max = "288";
    event.target.step = "36";

    event.target.value = 100;

    Number(event.target.value) * 12 -
      (Number(event.target.value) * 12 * 25) / 100;
  } */
}

discountCheck.addEventListener("change", (event) => {
  if (event.target.checked) {
    range.min = "72";
    range.max = "288";
    range.step = "36";
    console.log(range.value);
    range.value = (Number(range.value) * 12 * 75) / 100;
    console.log(range.value);
  }
});
