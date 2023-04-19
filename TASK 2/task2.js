class Device {
    constructor(brand, model, screenSize, batteryLevel, price, salePrice, discountPercentage) {
        this.brand = brand;
        this.model = model;
        this.screenSize = screenSize;
        this.batteryLevel = batteryLevel;
        this.price = price;
        this.salePrice = salePrice;
        this.discountPercentage = discountPercentage;
    }
}
class Phone extends Device {
    constructor(brand, model, screenSize, batteryLevel, price, salePrice, discountPercentage, isSmart) {
        super(brand, model, screenSize, batteryLevel, price, salePrice, discountPercentage)
        this.isSmart = isSmart;
    }
}
class Laptop extends Device {
    constructor(brand, model, screenSize, batteryLevel, price, salePrice, discountPercentage, isRGBkeyboard) {
        super(brand, model, screenSize, batteryLevel, price, salePrice, discountPercentage)
        this.isRGBkeyboard = isRGBkeyboard;
    }
}
const phone1= new Phone("Apple","Iphone 14 pro max","300mAh",100,3000,3500,0,true);
const laptop1= new Laptop("Apple","MacBook Pro 16",16,100,3500,4000,0,true);
let products=[]
products.push(phone1,laptop1)
console.log(products)