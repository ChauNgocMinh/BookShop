import { Component } from '@angular/core';

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
      description: 'DISCOUNTS ON WINTER COLLECTION'
    },
    {
      imgSrc: '../../../assets/img/nav-3.png',
      title1: 'HOLIDAY SALE',
      title2: 'FALL',
      description: 'FALL SEASON DISCOUNTS'
    }
  ];

  show_right() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  show_left() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
  }
}

// const left = document
// const right 
// const imageContainer = document.getElementById('item-img') as HTMLElement;

// function slideImage() {
//   imageContainer.style.top = '0';
// }

// // Gọi hàm slideImage sau khi trang đã tải
// window.addEventListener('load', slideImage);
