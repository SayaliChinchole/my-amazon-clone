import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  shopping_cart_items: any[] = [];  

  constructor() { }

  addProduct = (product)=>{
    let items = this.get_shopping_cart_items();
    // 1st get what is in the shopping cart
    //if there are already items then 
    //push new item to it
    //if there are no items already in the cart
    //then create an array 'shopping_cart_item' 
    //add/push item to it.
    if(items){
      items.push(product);
      localStorage.setItem('shopping_cart', JSON.stringify(items));
    }else {
      this.shopping_cart_items.push(product);
      localStorage.setItem('shopping_cart', JSON.stringify(this.shopping_cart_items));
    }
    //console.log('added',product);
    //localstorage - store data on device eg.authentication
    //localStorage.setItem('shoping_cart', JSON.stringify(product))
  }

  get_shopping_cart_items = ()=>{
    let items = localStorage.getItem('shopping_cart');
    return JSON.parse(items);
  }

  getCartLength = ()=>{
    let items = this.get_shopping_cart_items();
    return items? this.get_shopping_cart_items().length: 0;
  }

  getTotal = ()=> {
    let items = this.get_shopping_cart_items();
    return items?.reduce((acc, item)=> acc+ item.price, 0)
  }

  removerItem=(p)=>{
    console.log('calling remover ', p)
    let items = this.get_shopping_cart_items();
    
    const index = items.findIndex(item=> item.id == p.id);
    if(index>=0){
      console.log('hitting if');
      //removing one item with index 'index' 
      items.splice(index, 1);
      return localStorage.setItem('shopping_cart', JSON.stringify(items));
    }

  }

}
