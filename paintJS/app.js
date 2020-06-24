const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");
const clearBtn = document.getElementById("jsClear");

const INIT_COLOR = "#2c2c2c";

canvas.width = 700;
canvas.height = 700;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = INIT_COLOR;
ctx.fillStyle = INIT_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;
let clear = false;

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCMClick);
}

function handleCMClick(event) {
  event.preventDefault();
}

function onMouseMove(event) {
  const pos = {
    x: event.offsetX,
    y: event.offsetY,
  };
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  } else {
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  }
}

function stopPainting(event) {
  painting = false;
}

function startPainting(event) {
  painting = true;
}

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);

function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.fillStyle = ctx.strokeStyle = color;
}

if (range) {
  range.addEventListener("input", handleRangeChange);
}

function handleRangeChange(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}

if (mode) {
  mode.addEventListener("click", handleModeChange);
}

function handleModeChange() {
  if (filling) mode.innerText = "Fill";
  else mode.innerText = "Paint";
  filling = !filling;
}

if (saveBtn) {
  saveBtn.addEventListener("click", handleSaveClick);
}

function handleSaveClick() {
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = image;
  link.download = "PaintJS[🎨]";
  link.click();
}

if (clearBtn) {
  clearBtn.addEventListener("click", handleClearClick);
}

function handleClearClick() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
