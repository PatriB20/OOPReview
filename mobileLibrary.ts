import{Mobile} from "./Mobile"

export class Library{
    private name:string;
    private location:string;
    private mobiles: Mobile[];
    private totalPrice: number;
  
   
        
    

    constructor(name:string,location:string,mobiles:Mobile[]) 
    {
        this.name=name
        this.location=location
        this.mobiles= mobiles
        this.totalPrice =this.totalPriceCalculation()
      
    }

//getter
    public getName():string
    {
        return this.name
    }
    public getLocation():string
    {
        return this.location
    }
    public getMobiles():Mobile[]
    {
        return this.mobiles
    }
    public getTotalPrice ():number
    {
        return this.totalPrice
    }
    // setter
    public setName(nameNew:string)
    {
        this.name = nameNew
    }
    public setLocation(locationNew:string)
   {
       this.location = locationNew
   } 
   public setMobiles(mobilesNew:Mobile[])
   {
        this.mobiles = mobilesNew
   }
   public setTotalMobiles(totalMobilesNew:number)
   {
       this.totalPrice = totalMobilesNew
   }
   // funciones
  private totalPriceCalculation():number
   {   
    let sumaPrice:number=0
    for (let i=0;i<this.mobiles.length; i++)
       {
           
            sumaPrice += this.mobiles[i].getPrice()

         }   
         return sumaPrice
        
   }
   public printLibrary():string{
       for(let i=0; i<this.mobiles.length; i++)
    return "The characteristics of the mobile " + this.mobiles[i].getName() +" are:" +"\n"+
        "Name: " + this.mobiles[i].getName() + "\n"+ 
        "Model: " + this.mobiles[i].getModel() + "\n" +
        "TradeMark: " + this.mobiles[i].getTrademark()+ "\n" + 
        "SD Size(GB): " + this.mobiles[i].getSdSize()+ "\n"+
        "Color: " + this.mobiles[i].getColor() + "\n" + 
        "Is 5g?: "+ this.mobiles[i].getIs5G() + "\n"+
        "Number of Cameras: " + this.mobiles[i].getCameraNumber() + "\n" +
        "Price overal: " + this.totalPrice

}

}
