function Snake(gl, start_pos) {
    this.gl = gl;
    this.parts = [start_pos];
    this.direction = vec3.fromValues(0, 1, 0);
    this.grow = 0;


    this.setDirection = function(direction) {
        // TODO: find a way to get the direction
        //       from keys.js
    };

    cubeColors = [[1.0, 0.0, 0.0],
                  [0.0, 1.0, 0.0],
                  [0.0, 0.0, 1.0],
                  [1.0, 1.0, 0.0],
                  [0.0, 1.0, 1.0],
                  [1.0, 0.0, 1.0]];


    var drawingObjects = {
        solidCube: new SolidCube(gl, ...cubeColors),
    };

    this.tick = function() {
        var direction = this.direction;
        // movement of snake
        // move head
        vec3.add(this.parts[0], this.parts[0], this.direction)
        // TODO: check for eat here maybe? and increase grow
        //       possibly get this from maze js?

        // TODO: move last part to the second part where the head of
        //       the snake was before to simulate movment

        if(this.grow == 0){
            this.parts.pop()
        } else {
            // if we don't remove the last part of the snake it grows!
            this.grow--;
        }
    };

    this.draw = function(ctx) {
        for(var i = 0; i < this.parts.length; i++) {
            // TODO: draw snake with solid cube
        }
    };
}
