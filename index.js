function receivesAFunction(callback) {
    return callback();

}

function returnsANamedFunction() {
    return function name(name) 
    {
        return !name;
    }
}

function returnsAnAnonymousFunction() {
    return function(name){

    };
}
    

