//Create Hex Color.
const hexBtn = document.querySelector(".hex-btn");
const hexColorValue = document.querySelector(".hex-color-value");
const hexColorContainer = document.getElementById("hex-color-div");
const hexCopyBtn = document.querySelector(".hex-copy-color");

const rgbBtn = document.querySelector(".rgb-btn");
const rgbColorValue = document.querySelector(".rgb-color-value");
const rgbColorContainer = document.getElementById("rgb-color-div");
const rgbCopyBtn = document.querySelector(".rgb-copy-color");

hexBtn.addEventListener("click", () => {
  const charSet = "0123456789ABCDEF";
  let randomHexColor = "";
  for (let i = 0; i < 6; i++) {
    randomHexColor += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  hexColorContainer.style.backgroundColor = `#${randomHexColor}`;
  hexColorValue.innerText = `#${randomHexColor}`;
  hexBtn.style.color = `#${randomHexColor}`;
});

hexCopyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(hexColorValue.textContent);
  alert("Hex Color is copied to clipboard");
});

//Create RGB Color.
rgbBtn.addEventListener("click", () => {
  const red = document.getElementById("red").value;
  const green = document.getElementById("green").value;
  const blue = document.getElementById("blue").value;

  const generateRGBColor = `rgb(${red},${green},${blue})`;
  console.log(generateRGBColor);

  rgbColorContainer.style.backgroundColor = generateRGBColor;
  rgbColorValue.innerText = generateRGBColor;
  rgbBtn.style.color = generateRGBColor;
});
rgbCopyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(rgbColorValue.textContent);
  alert("RGB Color is copied to clipboard");
});
