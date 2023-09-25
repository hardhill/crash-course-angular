import {Component, OnInit} from '@angular/core';
import {ProductsService} from "./services/products.service";
import {ModalService} from "./services/modal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
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
