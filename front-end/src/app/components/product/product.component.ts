import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { param } from 'jquery';
import { HttpServiceService } from 'src/app/Service/http-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  public products: Product = {
    id: '',
    namebook: '',
    category: '',
    publishingCompany: '',
    price: 0,
    status: false,
    sales: 0,
    review: '',
    picture: '',
  };
  constructor(
    private httpServiceService: HttpServiceService,
    private route: ActivatedRoute
  ){}
  productID: string = '';
public ngOnInit(): void {
  this.route.params.subscribe(param => {
    this.productID = param['ProductId'];
  });

    //let test = `https://localhost:7147/Controller/GetBookById?id=${this.productID}`;
    this.httpServiceService.fetchData(`https://localhost:7147/Controller/GetBookById?id=${this.productID}`)
    .subscribe((data: Product) =>{
      this.products = data;
    })
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