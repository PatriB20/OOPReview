import{Mobile} from "./Mobile"

let nokia : Mobile = new Mobile("Nokia 3210","3210","Nokia",3,"black",false,0,100);
let iphone: Mobile = new Mobile("Iphone3G","3G","Apple",12,"white",false,2,200);
let samsung: Mobile = new Mobile("Samsung S10","S10","Samsung",128,"black",false,3,300);

//Antes del cambio
console.log(nokia.printall())

nokia.setCameraNumber(5)
nokia.setIs5g(true);
//Despues del cambio



console.log(nokia.printall())
console.log(samsung.printall())
console.log(iphone.printall())