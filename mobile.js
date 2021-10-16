"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, model, trademark, sdSize, color, is5G, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    //get
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.getSdSize = function () {
        return this.sdSize;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.getIs5G = function () {
        return this.is5G;
    };
    Mobile.prototype.getCameraNumber = function () {
        return this.cameraNumber;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    //SET
    Mobile.prototype.setName = function (nameNew) {
        this.name = nameNew;
    };
    Mobile.prototype.setModel = function (modelNew) {
        this.model = modelNew;
    };
    Mobile.prototype.setTrademark = function (trademarkNew) {
        this.trademark = trademarkNew;
    };
    Mobile.prototype.setSdSize = function (SdSizeNew) {
        this.sdSize = SdSizeNew;
    };
    Mobile.prototype.setColor = function (colorNew) {
        this.color = colorNew;
    };
    Mobile.prototype.setIs5g = function (is5GNew) {
        this.is5G = is5GNew;
    };
    Mobile.prototype.setCameraNumber = function (cameraNumberNew) {
        this.cameraNumber = cameraNumberNew;
    };
    Mobile.prototype.setPrice = function (priceNew) {
        this.price = priceNew;
    };
    Mobile.prototype.printall = function () {
        return "The characteristics of the mobile " + this.name + " are:" + "\n" +
            "Name: " + this.name + "\n" +
            "Model: " + this.model + "\n" +
            "TradeMark: " + this.trademark + "\n" +
            "SD Size(GB): " + this.sdSize + "\n" +
            "Color: " + this.color + "\n" +
            "Is 5g?: " + this.is5G + "\n" +
            "Number of Cameras: " + this.cameraNumber;
    };
    return Mobile;
}());
exports.Mobile = Mobile;
