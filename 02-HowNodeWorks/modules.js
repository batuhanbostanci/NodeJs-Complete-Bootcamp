// console.log(arguments);

// console.log(require("module").wrapper);

//Module.exports
const C = require("./testmodule1");
const calc1 = new C();
console.log(calc1.add(7, 2));

//exports
//const calc2 = require("./testmodule2");
const { add, multiply } = require("./testmodule2");
console.log(add(2, 5));

//caching
require("./testmodule3")();
require("./testmodule3")();
require("./testmodule3")();
