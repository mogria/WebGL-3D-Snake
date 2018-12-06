function Snake(gl, start_pos) {
    this.gl = gl;
    var parts = [start_pos];
    var direction = vec3.fromValues(0, 1, 0);


    this.setDirection = function(direction) {
    };

    var drawingObjects = [
        solidCube: new SolidCube(gl, [1.0, 0.0, 0.0],
                                     [0.0, 1.0, 0.0],
                                     [0.0, 0.0, 1.0],
                                     [1.0, 1.0, 0.0],
                                     [0.0, 1.0, 1.0],
                                     [1.0, 0.0, 1.0]);
    ];

    this.tick = function() {
        var direction = this.direction;
        // movement of snake
        for(var i = 0; i < parts.length; i++) {
            vec3.add(this.parts[i], this.parts[i], this.direction)
        };
    };

    this.draw = function(ctx) {
        
    };
}
