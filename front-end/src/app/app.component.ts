import { Component, getNgModuleById } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-project';
}

function add(x: string, y: number): void {
  // return x + y;
  
}
 
let myAdd = function (x: number, y: number): number {
  return x + y;
};

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
