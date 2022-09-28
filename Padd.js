class Padd {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.paddX = (canvas.width -this.width)/2;

        this.controls = new Controls();
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.rect((canvas.width-this.x)/2, canvas.height-this.height, this.width, this.height);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();

    }

    move() {
        if (this.controls.left) {
            this.x += 10;
            // this.paddX += 10;
        }

        if (this.controls.right) {
            this.x -= 10;
            // this.paddX -= 10;
        }
    }
}