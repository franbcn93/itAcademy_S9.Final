import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bicing } from 'src/Bicing';

@Injectable({
  providedIn: 'root'
})
export class StationBicingService {

  constructor(private http:HttpClient) { }

  getStations() {
    const path = `https://api.bsmsa.eu/ext/api/bsm/gbfs/v2/en/station_information`
    return this.http.get<Bicing[]>(path);
  }
}
