function Maze(gl) {
    this.gl = gl;
    this.size = 10;
    this.snake = new Snake(gl, vec3.fromValues(this.size / 2, this.size / 2, this.size / 2 ));

    this.drawingObjects = {
        wireFrameCube: new WireFrameCube(gl, [1.0, 1.0, 0.0]),
    };

    this.tick = function() {
        snake.tick();
    };

    this.draw = function() {
        this.snake.draw();
    };
}
