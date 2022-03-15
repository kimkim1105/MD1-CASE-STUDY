class Food{
constructor(x,y) {
    this.x = x;
    this.y = y;
}
appear(){
    this.x = (Math.floor(Math.random()*canvas.width/grid-1)+1)*grid;
    this.y = (Math.floor(Math.random()*canvas.height/grid-1)+1)*grid;

}
drawFood(){
    ctx.fillStyle = "red";
    ctx.fillRect(this.x,this.y,grid,grid)
}
}