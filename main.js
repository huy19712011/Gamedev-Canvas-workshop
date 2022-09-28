const canvas = document.getElementById("myCanvas");
canvas.width = 500;
// canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

const ball = new Ball(canvas.width / 2, 10, 10);

const padd = new Padd(canvas.width / 2, canvas.height - 50, 100, 10);


// animate();
setInterval(animate, 10);

function animate() {
    canvas.height = window.innerHeight;

    padd.draw(ctx);
    padd.move();
    check();

    ball.draw(ctx);
}

function check() {
    if (ball.y + ball.dy > canvas.height - ball.radius - padd.height && ball.x < padd.x + padd.width && ball.x > padd.x)
    // if (ball.y + ball.dy > canvas.height - ball.radius - padd.height && true)
    {
        ball.dy = -ball.dy;
    }
}