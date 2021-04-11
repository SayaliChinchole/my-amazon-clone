import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../SERVICES/shopping-cart.service';
//convert path for service import from 'src/app/SERVICES/shopping-cart.service' 
//to '../../SERVICES/shopping-cart.service'


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  items: any [];
  constructor(public shopping_cart: ShoppingCartService) { }

  ngOnInit() {
    this.getShoppingCart();
  }

  getShoppingCart(){
    this.items = this.shopping_cart.get_shopping_cart_items();
  }
  
  deleteEventHandler(p){
    console.log("event handled");
    this.getShoppingCart();
  }
  
}
