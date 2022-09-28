class Controls {
    constructor() {
        this.left = false;
        this.right = false;

        this.#addKeyboardListeners();
    }

    #addKeyboardListeners() {
        document.onkeydown = (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    this.left = true;
                    break;
                case "ArrowRight":
                    this.right = true;
                    break;
            }
            // only for debugg
            console.table(this);
        }
        document.onkeyup = (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    this.left = false;
                    break;
                case "ArrowRight":
                    this.right = false;
                    break;
            }
            // only for debugg
            console.table(this);
        }
    }
}