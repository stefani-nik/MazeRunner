window.mazeModule = (function () {
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');
  context.lineWidth = 20;
  context.lineCap = "square";

  function drawMaze() {
    context.beginPath();
    context.moveTo(400, 50);
    context.lineTo(50, 50);
    context.lineTo(50, 750);
    context.lineTo(400, 750);
    context.moveTo(450, 750);
    context.lineTo(750, 750);
    context.lineTo(750, 50);
    context.lineTo(400, 50);
    context.moveTo(300, 50);
    context.lineTo(300, 150);
    context.moveTo(300, 100);
    context.lineTo(350, 100);
    context.moveTo(200, 50);
    context.lineTo(200, 100);
    context.lineTo(250, 100);
    context.lineTo(250, 300);
    context.lineTo(300, 300);
    context.lineTo(300, 350);
    context.lineTo(350, 350);
    context.moveTo(250, 300);
    context.lineTo(200, 300);
    context.lineTo(200, 350);
    context.moveTo(250, 250);
    context.lineTo(550, 250);
    context.lineTo(550, 100);
    context.lineTo(600, 100);
    context.lineTo(600, 150);
    context.moveTo(600, 200);
    context.lineTo(400, 200);
    context.moveTo(450, 200);
    context.lineTo(450, 150);
    context.moveTo(500, 50);
    context.lineTo(500, 150);
    context.moveTo(500, 100);
    context.lineTo(400, 100);
    context.lineTo(400, 150);
    context.lineTo(350, 150);
    context.lineTo(350, 200);
    context.lineTo(300, 200);
    context.moveTo(650, 50);
    context.lineTo(650, 150);
    context.lineTo(700, 150);
    context.moveTo(650, 150);
    context.lineTo(650, 250);
    context.lineTo(600, 250);
    context.lineTo(600, 450);
    context.lineTo(650, 450);
    context.moveTo(600, 450);
    context.lineTo(550, 450);
    context.moveTo(600, 350);
    context.lineTo(550, 350);
    context.lineTo(550, 300);
    context.lineTo(450, 300);
    context.lineTo(450, 350);
    context.lineTo(400, 350);
    context.lineTo(400, 450);
    context.lineTo(450, 450);
    context.lineTo(450, 400);
    context.lineTo(550, 400);
    context.moveTo(500, 400);
    context.lineTo(500, 350);
    context.moveTo(400, 250);
    context.lineTo(400, 300);
    context.lineTo(350, 300);
    context.moveTo(750, 100);
    context.lineTo(700, 100);
    context.moveTo(750, 200);
    context.lineTo(700, 200);
    context.lineTo(700, 300);
    context.lineTo(650, 300);
    context.lineTo(650, 400);
    context.moveTo(750, 350);
    context.lineTo(700, 350);
    context.lineTo(700, 400);
    context.moveTo(750, 550);
    context.lineTo(700, 550);
    context.lineTo(700, 700);
    context.moveTo(650, 750);
    context.lineTo(650, 600);
    context.lineTo(600, 600);
    context.moveTo(650, 600);
    context.lineTo(650, 500);
    context.lineTo(700, 500);
    context.lineTo(700, 450);
    context.moveTo(650, 500);
    context.lineTo(550, 500);
    context.moveTo(600, 700);
    context.lineTo(600, 650);
    context.lineTo(500, 650);
    context.moveTo(550, 650);
    context.lineTo(550, 550);
    context.moveTo(600, 550);
    context.lineTo(500, 550);
    context.lineTo(500, 450);
    context.moveTo(500, 500);
    context.lineTo(300, 500);
    context.moveTo(350, 500);
    context.lineTo(350, 600);
    context.lineTo(400, 600);
    context.moveTo(350, 500);
    context.lineTo(350, 400);
    context.lineTo(250, 400);
    context.lineTo(250, 350);
    context.moveTo(250, 400);
    context.lineTo(200, 400);
    context.lineTo(200, 450);
    context.moveTo(200, 400);
    context.lineTo(150, 400);
    context.lineTo(150, 300);
    context.lineTo(100, 300);
    context.moveTo(150, 300);
    context.lineTo(150, 200);
    context.lineTo(100, 200);
    context.moveTo(50, 150);
    context.lineTo(150, 150);
    context.lineTo(150, 100);
    context.lineTo(100, 100);
    context.moveTo(150, 150);
    context.lineTo(200, 150);
    context.lineTo(200, 250);
    context.moveTo(50, 250);
    context.lineTo(100, 250);
    context.moveTo(50, 350);
    context.lineTo(100, 350);
    context.moveTo(50, 400);
    context.lineTo(100, 400);
    context.moveTo(50, 650);
    context.lineTo(100, 650);
    context.lineTo(100, 550);
    context.lineTo(200, 550);
    context.moveTo(100, 550);
    context.lineTo(100, 450);
    context.moveTo(100, 650);
    context.lineTo(150, 650);
    context.lineTo(150, 700);
    context.moveTo(100, 750);
    context.lineTo(100, 700);
    context.moveTo(200, 750);
    context.lineTo(200, 650);
    context.moveTo(350, 750);
    context.lineTo(350, 700);
    context.moveTo(450, 750);
    context.lineTo(450, 700);
    context.lineTo(550, 700);
    context.moveTo(450, 700);
    context.lineTo(450, 600);
    context.lineTo(500, 600);
    context.moveTo(450, 600);
    context.lineTo(450, 550);
    context.lineTo(400, 550);
    context.moveTo(450, 700);
    context.lineTo(400, 700);
    context.lineTo(400, 650);
    context.lineTo(300, 650);
    context.moveTo(300, 600);
    context.lineTo(300, 700);
    context.lineTo(250, 700);
    context.lineTo(250, 600);
    context.lineTo(150, 600);
    context.moveTo(250, 600);
    context.lineTo(250, 550);
    context.lineTo(300, 550);
    context.moveTo(250, 550);
    context.lineTo(250, 450);
    context.lineTo(300, 450);
    context.moveTo(250, 500);
    context.lineTo(150, 500);
    context.lineTo(150, 450);

    context.stroke();
  } 

  return {
    drawMaze: drawMaze
  };
})();