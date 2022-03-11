import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StationBicingService } from '../station-bicing.service';
import { codes } from 'src/PostalCode';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})

export class StationsComponent implements OnInit {
  allFields: any;
  arrayNames:Array<string>[]=[];
  arrayCodes:Array<string>[]=[];
  arrayById:Array<DataById>=[];
  data:DataById;
  public stations$ = new BehaviorSubject<boolean>(false);
  public stationById$ = new BehaviorSubject<boolean>(false);

  contactForm: FormGroup;
  codes = codes;
  example: string;

  constructor(private service:StationBicingService, public fb: FormBuilder) {
    this.getNamesStations();
   }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      postalCode: [null]
    });
    console.log(this.contactForm)
  }

  getByCode() {
    this.counterCero();
    this.service.getStations()
    .subscribe(names =>{
      this.allFields = names;
      console.log(this.contactForm.value.postalCode)
      this.allFields.data.stations.map((result: any) =>{
        if(result.post_code === this.contactForm.value.postalCode){
          console.log(result)
          this.arrayCodes.push(result.name);
        }
      })
      this.stations$.next(true);
    })
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
    this.counterCero();
    this.service.getStations()
    .subscribe(all =>{
      this.allFields = all;
      this.allFields.data.stations.map((result: any)=>{
        if(result.station_id === parseInt(id)){
          console.log(result)
          this.data={station_id: result.station_id, name: result.name, post_code: result.post_code, 
            physical_configuration: result.physical_configuration};
          this.arrayById.push(this.data)
          console.log(this.data)
        }
        this.stationById$.next(true);
      })      
    })
    console.log(this.arrayById);
  }

  counterCero(){
    this.stations$.next(false);
    this.stationById$.next(false);
    this.arrayCodes = [];
    this.arrayById = [];
  }
 
}

interface DataById {
  station_id:string;
  name:string;
  post_code:string;
  physical_configuration:string;
}
