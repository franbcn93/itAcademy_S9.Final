export class Weather{
    public name: string;
    public long: number;
    public lat: number;
    public temp: number;
    public max: number;
    public min: number;
    public humidity: number;
    public description: string;
    // temp: number;

    constructor(name:string, long:number, lat:number, temp: number, max: number,
        min:number, humidity:number, description:string){
        this.name = name;
        this.long = long;
        this.lat = lat;
        this.temp = temp;
        this.max = max;
        this.min = min;
        this.humidity = humidity;
        this.description = description;
    }


}