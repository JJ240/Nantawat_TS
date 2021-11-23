//2.1
interface Car{
    id: number,
    brand: string,
    color: string,
    distanceUsed: any,
    showCar() : string,
    use() : number
}
//2.2
class EuropeCar implements Car{
    id: number;
    brand: string;
    color: string;
    distanceUse: any;

    constructor(id: number, brand: string, color: string){
        this.id = id;
        this.brand = brand;
        this.color = color;
    }

    showCar(){
        return `${this.brand} ${this.brand} ${this.brand}`;
    }
    use(distance:Number) :number{
        {this.distanceUse};
    }

}
const euCar1 = new EuropeCar (1001,"Honda","Black");
console.log(euCar1.id)
console.log(euCar1.brand)
console.log(euCar1.color)
console.log(euCar1.showCar())
console.log(euCar1.use(2500))