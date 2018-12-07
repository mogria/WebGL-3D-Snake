function Snake(gl, start_pos) {
    this.gl = gl;
    var parts = [start_pos];
    var direction = vec3.fromValues(0, 1, 0);
    var grow = 0;


    this.setDirection = function(direction) {
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

        // TODO: move last part to the second part where the head of
        //       the snake was before to simulate movment

        if(grow == 0){
            this.parts.pop()
        } else {
            // if we don't remove the last part of the snake it grows!
            grow--;
        }
    };

    this.draw = function(ctx) {
        for(var i = 0; i < parts.length; i++) {
        }
    };
}
