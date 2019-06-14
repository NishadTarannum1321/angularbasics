import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
@Output()sendDetails=new EventEmitter()
  constructor() { }

  ngOnInit() {
    
    }
    sendDataToAppComp(val:string){
      this.sendDetails.emit(val);
  }

}
