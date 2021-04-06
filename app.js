const body = document.querySelector("body");
const button = document.querySelector("button");
const h1 = document.querySelector("h1");

body.style.textAlign = "center";
//once button is clicked pass it in the function
button.addEventListener("click", () => {
  //call the colorPicker function to get RGB value and save it to the variable
  const rgb = colorPicker();
  //assign the received value to the backgroundColor
  document.body.style.backgroundColor = rgb;
  //assign the text(numbers) of RGB to the h1
  h1.innerText = rgb;
});

//randomise 3 numbers for each RGB
const colorPicker = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red},${green},${blue})`;
};
