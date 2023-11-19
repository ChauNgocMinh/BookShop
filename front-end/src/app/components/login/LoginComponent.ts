import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { HttpService, HttpServiceService } from 'src/app/Service/http-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})


export class LoginComponent {
  constructor(private httpService: HttpService){}
  login: Login[] = [];
  public OnInit(): void{
    this.httpService.postData('https://localhost:7147/Controller/SignIn?Email='+ this.login +'&Password=123Aa%21').subscribe((data: Login[]) => {
      this.login = data;
    })
  }
}

interface Login {
  Email: string;
  Pass: string;
}
