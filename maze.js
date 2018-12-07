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

    this.draw = function(ctx) {
        //TODO: draw wireframe of the maze?
        // translate and rotate objects
        // mat4.translate(modelViewMatrix, viewMatrix, [1.0, 0, 0]);
        // mat4.rotate(modelViewMatrix, modelViewMatrix, scene.angle, [0, 1, 0]);
        // gl.uniformMatrix4fv(ctx.uModelViewMatrixId, false, modelViewMatrix);
        // mat3.normalFromMat4(normalMatrix, modelViewMatrix);
        // gl.uniformMatrix3fv(ctx.uNormalMatrixId, false, normalMatrix);
        // drawingObjects.wiredCube.draw(gl, ctx.aVertexPositionId, ctx.aVertexColorId);
        // drawingObjects.solidCube.draw(gl, ctx.aVertexPositionId, ctx.aVertexColorId, ctx.aVertexNormalId);

        this.snake.draw(ctx);

        //TODO: draw fruits
    };
}
