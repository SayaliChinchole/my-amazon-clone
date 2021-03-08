import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../SERVICES/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: any [];

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    //if you have observable 
    //you will subscribe to it
    //to get back the information 
    this.api.getJson().subscribe(resp=>{
      console.log('resp',resp)
      this.items = resp;
      console.log("items", this.items);
    });
  }


}
 