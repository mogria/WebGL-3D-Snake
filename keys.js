// Key Handling
var key = {
    2: 50, // up
    W: 87,
    S: 83,
    A: 65,
    D: 39,
    X: 88, // down

    Q: 81, // turning camera
    E: 69, //
};

var keyDirection = {
    2: vec3.fromValues(0, 0, 1),
    W: vec3.fromValues(1, 0, 0),
    A: vec3.fromValues(0, 1, 0),
    S: vec3.fromValues(-1, 0, 0),
    D: vec3.fromValues(0, -1, 0),
    X: vec3.fromValues(1, 0, -1),
};

var pressed = { }

var pressedDirection = keyDirection.W;

function isDown (keyCode) {
    return pressed[keyCode];
}

function onKeydown(event) {
    pressed[event.keyCode] = true;

    // TODO: check if this actually works
    if(typeof keyDirection[event.keyCode] !== 'undefined') {
        pressedDirection = keyDirection[event.keyCode];
    }
}

function onKeyup(event) {
    delete pressed[event.keyCode];
}

// -1 -> turn camera left
// 0 don't turn
// 1 -> turn camera right
function getPressedCameraTurn() {
    return pressed[keys.Q] ? -1 : (pressed[keys.E] ? 1 : 0);
}

// always assumes last pressed key
function getPressedDirection() {
    return pressedDirection;
}
