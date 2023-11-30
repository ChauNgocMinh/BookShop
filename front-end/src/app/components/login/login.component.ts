import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { HttpServiceService } from 'src/app/Service/http-service.service';
import { AppComponent } from 'src/app/app.component';
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
  jwtToken: string | null = '';
  constructor(
    private httpServiceService: HttpServiceService,
    private route: ActivatedRoute,
    public router: Router,
    private appComponent: AppComponent,
  ){}
  
  public LoginFunction(): void{
    const pass = customEncodeURIComponent(this.login.Pass);
    const url = 'https://localhost:7147/Controller/SignIn?Email=' + encodeURIComponent(this.login.Email) + '&Password=' + pass;
    this.httpServiceService.postData(url, this.login).subscribe( response => {
      const token = response.message;
      // Lưu trữ token, có thể sử dụng localStorage hoặc sessionStorage
      sessionStorage.setItem('token', token);
      this.jwtToken = sessionStorage.getItem('token');
      this.appComponent.ngOnInit();
      // if(this.jwtToken != null){
      //   this.appComponent.IsLogin(this.jwtToken);
      // }
      this.router.navigate(['/']);  
    });
  }
}
function customEncodeURIComponent(value: string): string {
  return encodeURIComponent(value).replace(/!/g, '%21');
}
interface Login {
  Email: string;
  Pass: string;
}
