"use strict";
exports.__esModule = true;
var Mobile_1 = require("./Mobile");
var nokia = new Mobile_1.Mobile("Nokia 3210", "3210", "Nokia", 3, "black", false, 0, 100);
var iphone = new Mobile_1.Mobile("Iphone3G", "3G", "Apple", 12, "white", false, 2, 200);
var samsung = new Mobile_1.Mobile("Samsung S10", "S10", "Samsung", 128, "black", false, 3, 300);
//Antes del cambio
console.log(nokia.printall());
nokia.setCameraNumber(5);
nokia.setIs5g(true);
//Despues del cambio
console.log(nokia.printall());
console.log(samsung.printall());
console.log(iphone.printall());
