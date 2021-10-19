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
        this.totalPrice
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
   public totalPriceCalculation()
   {   
    let sumaPrice:number=0
    for (let i=0;i<this.mobiles.length; i++)
       {
           
            sumaPrice += this.mobiles[i].getPrice()

         }   
         return sumaPrice
        
   }
   public allPrint():string{
   return
}

}


