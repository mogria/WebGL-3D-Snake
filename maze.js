function Maze(gl) {
    this.gl = gl;
    this.size = 10;
    this.snake = new Snake(gl, vec3.fromValues(this.size / 2, this.size / 2, this.size / 2 ));

    this.drawingObjects = {
        wireFrameCube: new WireFrameCube(gl, [1.0, 1.0, 0.0]),
    };

    // TODO: implement fruits here?

    this.tick = function() {
        this.snake.tick();

        //TODO: check collisions here maybe instead of in snake.js, maybe split it into methods?

        //TODO: spawn fruits if required?
    };

    this.draw = function() {
        this.snake.draw();
        //TODO: draw wireframe of the maze?
        //TODO: draw fruits
    };
}
