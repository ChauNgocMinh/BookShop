import { Component } from '@angular/core';
import { HttpServiceService } from 'src/app/Service/http-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  constructor(private httpServeService: HttpServiceService){}
  products: Product[] = [];
  public ngOnInit(): void {
    this.httpServeService.fetchData('https://localhost:7147/Controller/GetAll').subscribe((data: Product[]) => {
      // Xử lý dữ liệu nhận được từ API ở đây
      this.products = data;
    })
  }

  isClassAdded: boolean = false;

  public addClass() {
    this.isClassAdded = !this.isClassAdded;
  }
}

interface Product {
  id: string;
  namebook: string;
  category: string;
  publishingCompany: string;
  price: number;
  status: boolean;
  sales: number;
  review: string;
  picture: string
}