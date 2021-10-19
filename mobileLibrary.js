"use strict";
exports.__esModule = true;
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(name, location, mobiles) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
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
    Library.prototype.printLibrary = function () {
        for (var i = 0; i < this.mobiles.length; i++)
            return "The characteristics of the mobile " + this.mobiles[i].getName() + " are:" + "\n" +
                "Name: " + this.mobiles[i].getName() + "\n" +
                "Model: " + this.mobiles[i].getModel() + "\n" +
                "TradeMark: " + this.mobiles[i].getTrademark() + "\n" +
                "SD Size(GB): " + this.mobiles[i].getSdSize() + "\n" +
                "Color: " + this.mobiles[i].getColor() + "\n" +
                "Is 5g?: " + this.mobiles[i].getIs5G() + "\n" +
                "Number of Cameras: " + this.mobiles[i].getCameraNumber() + "\n" +
                "Price overal: " + this.totalPrice;
    };
    return Library;
}());
exports.Library = Library;
