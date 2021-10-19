import{Mobile} from "./Mobile"
import{Library} from "./mobileLibrary"

let nokia : Mobile = new Mobile("Nokia 3210","3210","Nokia",3,"black",false,0,100);
let iphone: Mobile = new Mobile("Iphone3G","3G","Apple",12,"white",false,2,200);
let samsung: Mobile = new Mobile("Samsung S10","S10","Samsung",128,"black",false,3,300);
let xiaomi: Mobile = new Mobile("xiaomi note 9","note 9","Xiamomi",100,"black",true,7,800);


let mobiles:Mobile[]=[nokia,samsung,iphone,xiaomi]

 let library1: Library = new Library ("libreria1","calle Mayor",mobiles)
  

console.log(library1.printLibrary())