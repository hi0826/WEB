const title = document.getElementById("title");
title.innerHTML = "Hi! From JS";
title.style.color = "red";
document.title = "I own you now";

function handleResize() {
  console.log(`handleResize`);
}

function handleClick() {
  title.style.color = "green";
}

window.addEventListener("resize", handleResize);
title.addEventListener("click", handleClick);

//DOM
//Document Object Model
