"use strict";
exports.__esModule = true;
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(name, location, mobiles) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice;
    }
    //getter
    Library.prototype.getName = function () {
        return this.name;
    };
    Library.prototype.getLocation = function () {
        return this.location;
    };
    Library.prototype.getMobiles = function () {
        return this.mobiles;
    };
    Library.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    // setter
    Library.prototype.setName = function (nameNew) {
        this.name = nameNew;
    };
    Library.prototype.setLocation = function (locationNew) {
        this.location = locationNew;
    };
    Library.prototype.setMobiles = function (mobilesNew) {
        this.mobiles = mobilesNew;
    };
    Library.prototype.setTotalMobiles = function (totalMobilesNew) {
        this.totalPrice = totalMobilesNew;
    };
    // funciones
    Library.prototype.totalPriceCalculation = function () {
        var sumaPrice = 0;
        for (var i = 0; i < this.mobiles.length; i++) {
            sumaPrice += this.mobiles[i].getPrice();
        }
        return sumaPrice;
    };
    Library.prototype.allPrint = function () {
        return;
    };
    return Library;
}());
exports.Library = Library;
