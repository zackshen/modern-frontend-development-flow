"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "hello", {
    enumerable: true,
    get: function() {
        return hello;
    }
});
var hello = function() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    console.log("Hello ".concat(args.join(" , ")));
};
