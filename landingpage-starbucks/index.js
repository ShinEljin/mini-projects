function imgSlider(anything) {
  document.querySelector(".starbucks").src = anything;
}

function changeCircleColor(color) {
  const circle = document.querySelector(".circle");
  circle.style.backgroundColor = color;
}

function changeBG(color) {
  const section = document.querySelector("section");
  const thumb = document.querySelector(".thumb");

  if (color === "green") {
    section.style.backgroundColor = "rgb(1, 113, 67, 0.2)";
    thumb.style.backgroundColor = "rgb(1, 113, 67, 0.5)";
  } else if (color === "pink") {
    section.style.backgroundColor = "rgb(235, 116, 149, 0.2)";
    thumb.style.backgroundColor = "rgb(235, 116, 149, 0.5)";
  } else if (color === "purple") {
    section.style.backgroundColor = "rgb(215, 82, 177, 0.2)";
    thumb.style.backgroundColor = "rgb(215, 82, 177, 0.5)";
  }
}
