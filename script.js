let count = 0;
const countDisplay = document.getElementById("count");
document.getElementById("increment").addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});
document.getElementById("decrement").addEventListener("click", () => {
  if (count > 0) {
    count--;
    countDisplay.textContent = count;
  }
});

const colors = ["red", "blue", "green", "purple", "orange"];
document.getElementById("changeColor").addEventListener("click", () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById("colorBox").style.backgroundColor = randomColor;
});

const quotes = [
  "Believe in yourself!",
  "Every day is a second chance.",
  "You are stronger than you think.",
  "Dream big and dare to fail.",
  "Push yourself, because no one else will."
];
document.getElementById("showQuote").addEventListener("click", () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quoteDisplay").textContent = randomQuote;
});
