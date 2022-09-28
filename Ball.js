// const canvas = document.querySelector('canvas')

class Ball {

    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;

        this.dx = 0.2;
        this.dy = -0.2;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
        // ctx.restore();



        if (this.x + this.dx > canvas.width - this.radius || this.x + this.dx < this.radius) {
            this.dx = -this.dx;
        }

        if (this.y + this.dy > canvas.height - this.radius || this.y + this.dy < this.radius) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;


    }
}