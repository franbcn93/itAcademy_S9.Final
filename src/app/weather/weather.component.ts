import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/Weather';
import { WeatherTaskService } from '../weather-task.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  arrayWeather: Array<Weather> = [];
  allFields: any;
  kelvin: number = 273.15;
  temp:number=0;
  max: number = 0;
  min: number = 0;
  

  constructor(private weatherService: WeatherTaskService) { }

  ngOnInit(): void {
  }

  getWeatherBcn(){
    this.weatherService.getWeather()
    .subscribe(all =>{
      console.log(all);
      this.allFields = all;
      const field = this.allFields;
      console.log((field.main.temp - this.kelvin).toFixed(2))
      
      this.temp = parseFloat((field.main.temp - this.kelvin).toFixed(2));
      this.max = parseFloat((field.main.temp_max - this.kelvin).toFixed(2));
      this.min = parseFloat((field.main.temp_min - this.kelvin).toFixed(2));

      let data:Weather = new Weather(field.name, field.coord.lon, field.coord.lat, this.temp,
      this.max, this.min, field.main.humidity, field.weather[0].description);
      this.arrayWeather.push(data);
      
    })
  }

}
