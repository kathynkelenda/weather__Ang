import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,RouterOutlet,Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {path:'/', pathMatch: 'full', redirectTo: ''},
  {path:'weather', component: WeatherComponent}
]
  
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    RouterOutlet
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
