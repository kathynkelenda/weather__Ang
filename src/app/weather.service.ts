import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor( private http: HttpClient) { }

  getWeather() {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Minneapolis&appid=918d99740a7cdf4f395abcc31f786b1d&units=imperial');
  }
}
