function Maze() {
    this.size = 10;
    this.snake = new Snake(vec3.fromValues(size / 2, size / 2, size / 2 ));

    this.tick = function() {
        snake.tick();
    };

    this.draw = function() {
        this.snake.draw();
    };
}
