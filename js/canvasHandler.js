const canvas = document.getElementById("hangman_canvas");
const c = canvas.getContext("2d");

function drawLine(x, y) {
  c.lineTo(x, y);
  c.strokeStyle = "black";
  c.stroke();
}

export const drawOnCanvas = (wrongChecks) => {
  switch (wrongChecks) {
    case 1:
      c.beginPath();
      c.moveTo(0, 380);
      drawLine(100, 380);
      break;
    case 2:
      c.moveTo(50, 380);
      drawLine(50, 10);
      break;
    case 3:
      c.moveTo(50, 10);
      drawLine(200, 10);
      c.moveTo(200, 10);
      drawLine(200, 60);
      break;
    case 4:
      const circle = new Path2D();
      circle.arc(200, 90, 30, 0, 2 * Math.PI);
      c.stroke(circle);
      break;
    case 5:
      c.moveTo(200, 120);
      drawLine(200, 240);
      break;
    case 6:
      c.moveTo(200, 160);
      drawLine(140, 100);
      break;
    case 7:
      c.moveTo(200, 160);
      drawLine(260, 100);
      break;
    case 8:
      c.moveTo(200, 240);
      drawLine(140, 300);
      break;
    case 9:
      c.moveTo(200, 240);
      drawLine(260, 300);
      break;
  }
};

export const clearCanvas = () => {
  c.clearRect(0, 0, canvas.width, canvas.height);
};
