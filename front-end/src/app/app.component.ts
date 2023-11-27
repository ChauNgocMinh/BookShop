import { Component, getNgModuleById } from '@angular/core';
import * as $ from "jquery";
import { HttpServiceService } from './Service/http-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-project';
  isUserLoggedIn: boolean = false;
  myEmail: string = '';
  constructor(private httpServiceService: HttpServiceService) {
    
  }

  public ngOnInit(): void {
    const jwtToken = sessionStorage.getItem('token');
    if (jwtToken !== null) {
      console.log(jwtToken);
      this.isUserLoggedIn = true;

      const decodedToken = this.httpServiceService.decodeJwt(jwtToken);

      if (decodedToken) {
        console.log('Decoded Token Header:', decodedToken.header);
        console.log('Decoded Token Payload:', decodedToken.payload.Email);
        this.myEmail = decodedToken.payload.Email;
      } else {
        console.error('Invalid JWT format');
      }
    
    } else {
      console.log('No JWT Token');
      this.isUserLoggedIn = false;
    }
  }

  }

$(function () {
  $('nav ul li > a:not(:only-child)').on('click', function (e) {
      $(this)
          .siblings('.nav-dropdown')
          .slideToggle();
      $('.nav-dropdown')
          .not($(this).siblings())
          .hide();
      e.stopPropagation();
  });

  $('html').on('click', function () {
      $('.nav-dropdown').hide();
  });

  // Toggle open and close nav styles on click
  $('#nav-toggle').on('click', function () {
      $('nav ul').slideToggle();
  });

  $('#nav-toggle').on('click', function () {
      this.classList.toggle('active');
  });
});
