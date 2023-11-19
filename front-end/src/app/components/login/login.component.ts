import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { HttpServiceService } from 'src/app/Service/http-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})


export class LoginComponent {
  login: Login = {
    Email: '',
    Pass: ''
  };
  constructor(
    private httpServiceService: HttpServiceService,
    private route: ActivatedRoute,
    public router: Router,
  ){}
  public LoginFunction(): void{
    
    const url = 'https://localhost:7147/Controller/SignIn?Email=' + encodeURIComponent(this.login.Email) + '&Password=' + encodeURIComponent(this.login.Pass);
    this.httpServiceService.postData(url, this.login).subscribe((data: Login[]) => {
      this.router.navigate(['/']);
    })
  }
}

interface Login {
  Email: string;
  Pass: string;
}
