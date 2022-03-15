
class Snake {
    constructor(x, y, xSpeed, ySpeed, cell, tail) {
        this.x = x;
        this.y = y;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.cell = cell;
        this.tail = tail;

    }

    drawSnake() {


        for (let i = 0; i < this.tail.length; i++) {
            ctx.fillStyle = "blue";
            ctx.fillRect(this.tail[i].x, this.tail[i].y, grid, grid);
        }
        ctx.fillStyle = "yellow"
        ctx.fillRect(this.x, this.y, grid, grid);
    }

    update() {
        // for (let i= 0;i<this.tail.length;i++){
        //     if(this.x === this.tail[i].x && this.y ===this.tail[i].y){
        //         // alert("game over");
        //         return true;
        //     }
        // }

        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1]
        }
        this.tail[this.cell - 1] = { x: this.x, y: this.y};

        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if (this.x > canvas.width) {
            this.x = 0
        }
        if (this.y > canvas.height) {
            this.y = 0
        }
        if (this.x < 0) {
            this.x = canvas.width
        }
        if (this.y < 0) {
            this.y = canvas.height
        }
    }

    change(direction) {
        switch (direction) {
            case "Up":
                if(this.ySpeed===0){
                    this.xSpeed = 0;
                    this.ySpeed = -grid;
                }

                break;
            case "Down":
                if(this.ySpeed===0){
                    this.xSpeed = 0;
                    this.ySpeed = grid;
                }
                break;
            case "Left":
                if(this.xSpeed===0){
                    this.xSpeed = -grid;
                    this.ySpeed = 0;
                }
                break;
            case "Right":
                if(this.xSpeed===0){
                    this.xSpeed = grid;
                    this.ySpeed = 0;
                }
                break;
        }
    }

    eatFood(food) {
        if (this.x === food.x && this.y === food.y) {
            this.cell++;
            cnt ++;
            return true;
        }
        return false;
    }

}