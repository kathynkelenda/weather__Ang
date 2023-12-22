import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  // standalone: true,
  // imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {

  myWeather:any;
  temperature: number = 0;
  feelsLikeTemperature: number = 0;
  humidity: number = 0;
  pressure: number = 0;
  summary: string = '';
  iconUrl: string ='';
  city: string = 'Minneapolis';
  units: string = 'imperial'

  constructor(private weatherService: WeatherService){}

  ngOnInit(){
    this.weatherService.getWeather(this.city, this.units).subscribe({
      next: (res)=>{
        //console.log(res);
        this.myWeather = res;
        //console.log(this.myWeather);
        this.temperature = this.myWeather.main.temp;
        this.feelsLikeTemperature = this.myWeather.main.feels_like;
        this.humidity = this.myWeather.main.humidity;
        this.pressure = this.myWeather.main.pressure;
        this.summary = this.myWeather.weather[0].main;
        this.iconUrl = 'https://openweathermap.org/img/wn/' + this.myWeather.weather[0].icon + '@2x.png'
      },
      error: (error)=>console.log(error.message),

      complete: () => console.info('API call completed')
    })
  }

}
