import { Component, NgModule } from '@angular/core';
import { param } from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from 'src/app/Service/http-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],

})


export class RegisterComponent {
  public register: Person = {
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    confirmpassword:'',
  };

  
  constructor(private httpServe: HttpServiceService,
              private route:ActivatedRoute,
              public router: Router,
    ){}
  
  
  public RegisterId(): void {
    
    
    const url = 'https://localhost:7147/Controller/SignUp?'+ 
    'Firstname=' + encodeURIComponent(this.register.firstname)
   +'&Lastname=' + encodeURIComponent(this.register.lastname)
   +'&Email=' + encodeURIComponent(this.register.email) 
   +'&Password=' + encodeURIComponent(this.register.password)
   +'&Confirmpassword=' + encodeURIComponent(this.register.confirmpassword)
     // Xử lý dữ liệu nhận được từ API ở đây
    this.httpServe.postData(url, this.register).subscribe((message:string) => {
      
      alert(JSON.stringify(message));
      this.router.navigate(['/']);
    });
    }
  }

  // isClassAdded: boolean = false;
  // public addClass() {
  //   this.isClassAdded = !this.isClassAdded;
  // }


interface Person {
  firstname:string
  lastname:string
  email:string
  password:string
  confirmpassword:string
}




