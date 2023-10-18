import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public currentIndex = 0;
  
  public items: any[] = [
    {
      imgSrc: '../../../assets/img/nav-1.png',
      title1: 'BIG SALE',
      title2: 'SUMMER',
      description: 'UP TO 50% ON SELECT ITEMS'
    },
    {
      imgSrc: '../../../assets/img/nav-2.png',
      title1: 'ANOTHER SALE',
      title2: 'WINTER',
      description: 'UP TO 50% ON SELECT ITEMS'
    },
    {
      imgSrc: '../../../assets/img/nav-3.png',
      title1: 'HOLIDAY SALE',
      title2: 'SUMMER',
      description: 'UP TO 50% ON SELECT ITEMS'
    }
  ];


  show_right() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  show_left() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
  }
}