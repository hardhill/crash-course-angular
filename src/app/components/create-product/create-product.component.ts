import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  form = new FormGroup({
    title : new FormControl<string>('',[Validators.required, Validators.minLength(3)])
  })

  constructor(private productService:ProductsService, private modalService:ModalService) {

  }

  get titleError(){
    return this.form.controls.title as FormControl
  }
  submit() {
    if(!this.form.valid){
      return
    }
    this.productService.create({
      id:0,
      title: this.form.value.title as string,
      price: 23.75,
      description: 'Это новейший продукт',
      category:'chip',
      image:'https://i.pravatar.cc',
      rating:{
        rate: 3.54,
        count: 87
      }
    }).subscribe(()=>{
      this.modalService.close()
    })
  }
}
