Array.prototype.myFilter = function(fun) {
    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== 'function') {
        throw new TypeError();
    }

    var res = [];
    var thisArg = arguments.length >= 2 ? arguments[1] : undefined;

    for (var i = 0; i < len; i++) {
        if (i in t) {
            var val = t[i];
            if (fun.call(thisArg, val, i, t)) {
                res.push(val);
            }
        }
    }

    return res;
};

function createDebounceFunction(fn, ms) {
    let timeout
    return function() {
        const fnCall = () => {
            fn.apply(this, arguments)
        };
        clearTimeout(timeout);
        timeout = setTimeout(fnCall, ms)
    };
};
