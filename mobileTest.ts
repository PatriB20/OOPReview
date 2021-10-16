import{Mobile} from "./Mobile"

let nokia : Mobile = new Mobile("Nokia 3210","3210","Nokia",3,"black",false,0,100);
let iphone: Mobile = new Mobile("Iphone3G","3G","Apple",12,"white",false,2,200);
let samsung: Mobile = new Mobile("Samsung S10","S10","Samsung",128,"black",false,3,300);

console.log(nokia);
console.log(iphone);
console.log(samsung);

nokia.is5G=true
nokia.cameraNumber=5

console.log(nokia)