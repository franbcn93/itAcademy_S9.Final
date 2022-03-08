import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StationBicingService } from '../station-bicing.service';


@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {
  allFields: any;
  arrayNames:Array<string>[]=[];
  lista:string[]=["hola","que","tal", "estas"];

  constructor(private service:StationBicingService, public fb: FormBuilder) {
    this.getNamesStations();
   }

  ngOnInit(): void {
  }

  getNamesStations(){
    this.service.getStations()
    .subscribe(names =>{
      this.allFields = names;
      this.allFields.data.stations.map((result: any)=>{
        this.arrayNames.push(result.name);
      })
    })
    console.log(this.arrayNames);
  }

  getStationsBcn(id:any){
    console.log(typeof(id))
    this.service.getStations()
    .subscribe(all =>{
      this.allFields = all;
      this.allFields.data.stations.map((result: any)=>{
        if(result.station_id === parseInt(id)){
          console.log(result)
        }
      })
      console.log(this.allFields.data.stations);
      // this.allFields = all;
      // const field = this.allFields;
      // console.log((field.main.temp - this.kelvin).toFixed(2))
      
      // this.temp = parseFloat((field.main.temp - this.kelvin).toFixed(2));
      // this.max = parseFloat((field.main.temp_max - this.kelvin).toFixed(2));
      // this.min = parseFloat((field.main.temp_min - this.kelvin).toFixed(2));

      // let data:Weather = new Weather(field.name, field.coord.lon, field.coord.lat, this.temp,
      // this.max, this.min, field.main.humidity, field.weather[0].description);
      // this.arrayWeather.push(data);
      
    })
  }
 
}
