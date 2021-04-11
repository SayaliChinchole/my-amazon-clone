import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../SERVICES/shopping-cart.service';
//import { AuthService } from '../../SERVICES/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   

  constructor(public shopping_cart:ShoppingCartService,
 //   public auth: AuthService
 ) { }

  ngOnInit() {
  }
  
  signOut(){
   // this.auth.logOut();
  }
  
}
