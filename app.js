const body = document.querySelector("body");
const button = document.querySelector("button");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");

body.style.textAlign = "center";
//once button is clicked pass it in the function
button.addEventListener("click", () => {
  //call the colorPicker function to get RGB and HEX values and save it to the variable
  const rgb = colorPicker();
  const hex = hexColor();
  //assign the received value to the backgroundColor
  document.body.style.backgroundColor = rgb;
  //assign the text of RGB to the h1 and hex to h2
  h1.innerText = rgb;
  h2.innerText = hex;
});

//randomise 3 numbers for each RGB
const colorPicker = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  //return rgb values
  return `rgb(${red},${green},${blue})`;
};

//randomise 3 numbers for each RGB
const hexColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  //return hex values
  return (
    "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)
  );
};
