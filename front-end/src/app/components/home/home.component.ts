import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}

function show_right(): void{
  let currentIndex = 0;
  var items = document.querySelectorAll<HTMLElement>("#item");
  
  items[currentIndex].style.display = "none"; // Ẩn thẻ hiện tại
  currentIndex = (currentIndex + 1) % items.length; // Di chuyển đến thẻ tiếp theo
  items[currentIndex].style.display = "block"; // Hiển thị thẻ tiếp theo
}
// const left = document
// const right 
// const imageContainer = document.getElementById('item-img') as HTMLElement;

// function slideImage() {
//   imageContainer.style.top = '0';
// }

// // Gọi hàm slideImage sau khi trang đã tải
// window.addEventListener('load', slideImage);
