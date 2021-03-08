import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingCartService } from '../../SERVICES/shopping-cart.service';

@Component({
  selector: 'app-checkout-products',
  templateUrl: './checkout-products.component.html',
  styleUrls: ['./checkout-products.component.css']
})
export class CheckoutProductsComponent implements OnInit {
  @Input() checkout_products: any [];
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter();
  //@Input -> parent component -> ckeckout
  //child component -> checkout-products
  //sending 'items' from 
  //parent component to child component
  //ie getting 'input' in child
  // in '[checkout_products]'  
  //@Output -> tell/notify parent component(emit notification) 
  //that changes that have been made 
  //and now fetch the new products
  constructor(public shopping_cart_service: ShoppingCartService) { }

  ngOnInit(): void {
    console.log('products',this.checkout_products);
  }

  removeItem(p){
    this.shopping_cart_service.removerItem(p);
    this.deleteEvent.emit(p);
  }


}
