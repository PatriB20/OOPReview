export class Mobile{
    private name:string;
    private model: string;
    private trademark: string;
    private sdSize: number;
    private color; string;
    private is5G: boolean;
    private cameraNumber:number;
    private price:number

    constructor(name:string,model:string,trademark:string,sdSize:number,
                color:string,is5G:boolean,cameraNumber:number,price:number)
    {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize =sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    //get
    public getName():string
    {
        return this.name
    }
    public getModel():string
    {
        return this.model
    }
    public getTrademark():string
    {
        return this.trademark
    }
    public getSdSize():number
    {
        return this.sdSize
    }
    public getColor():string
    {
        return this.color
    }
    public getIs5G():boolean
    {
        return this.is5G
    }
    public getCameraNumber():number
    {
        return this.cameraNumber
    }
    public getPrice():number
    {
        return this.price
    }
    //SET
    public setName(nameNew:string)
    {
        this.name = nameNew
    }
    public setModel(modelNew:string)
    {
        this.model=modelNew
    }
    public setTrademark(trademarkNew:string)
    {
        this.trademark =trademarkNew
    }
    public setSdSize(SdSizeNew:number)
    {
        this.sdSize = SdSizeNew
    }
    public setColor(colorNew:string)
    {
         this.color = colorNew
    }
    public setIs5g(is5GNew:boolean)
    {
        this.is5G = is5GNew
    }
    public setCameraNumber(cameraNumberNew:number)
    {
        this.cameraNumber = cameraNumberNew
    }
    public setPrice(priceNew:number)
    {
         this.price = priceNew
    }

    public  printall():string
    {
       return "The characteristics of the mobile " + this.name +" are:" +"\n"+
        "Name: " + this.name + "\n"+ 
        "Model: " + this.model + "\n" +
        "TradeMark: " + this.trademark + "\n" + 
        "SD Size(GB): " + this.sdSize + "\n"+
        "Color: " + this.color + "\n" + 
        "Is 5g?: "+ this.is5G + "\n"+
        "Number of Cameras: " + this.cameraNumber
    }
}