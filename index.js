function receivesAFunction (thing) {
    return thing(); 
}

function returnsANamedFunction() {
    return function name() {}
}

function returnsAnAnonymousFunction() {
    return function() {}
}