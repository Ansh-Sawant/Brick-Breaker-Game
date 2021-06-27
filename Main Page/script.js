let paddlePos = ;
let leftArrow = false;
let rightArrow = false;

document.addEventListener("keydown", (e) => {
  if (e.key == "ArrowLeft") {
    leftArrow = true;
  } else if (e.key == "ArrowRight") {
    rightArrow = true;
  }
  movePaddle();
});

document.addEventListener("keyup", (e) => {
  if (e.key == "ArrowLeft") {
    leftArrow = false;
  } else if (e.key == "ArrowRight") {
    rightArrow = false;
  }
  movePaddle();
});

const paddle = document.querySelector(".paddle").style;
function movePaddle() {
  if (rightArrow) {
    paddlePos += 1;
  } else if (leftArrow) {
    paddlePos -= 1;
  }
  paddle.left = paddlePos + "%";
}
