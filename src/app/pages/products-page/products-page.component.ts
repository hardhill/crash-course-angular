import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit{
  title = 'application course';

  loading = false
  textSearch: string = '';

  constructor(public productsService:ProductsService, public modalService:ModalService) {
  }
  ngOnInit(): void {
    this.loading = true
    this.productsService.getAll().subscribe(()=>{
      this.loading = false
    })
  }
}
