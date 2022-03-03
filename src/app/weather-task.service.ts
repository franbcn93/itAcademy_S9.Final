import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Weather } from '../Weather';
import api from '../apiKey'


@Injectable({
  providedIn: 'root'
})
export class WeatherTaskService {

  constructor(private http:HttpClient) { }

  getWeather() {
    const path = `http://api.openweathermap.org/data/2.5/weather?lat=${api.lat}&lon=${api.lon}&appid=${api.apiKey}`
    return this.http.get<Weather[]>(path);
  }
}
