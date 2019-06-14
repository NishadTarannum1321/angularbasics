import { Component ,ViewChild,ElementRef, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('userContent')elemmentsfromTemplate:ElementRef;
showCustomer=false;
showOrders=false;

  receiveDataFromNavbar(val){
    if(val=="customers"){
      this.showCustomer=true;
      this.showOrders=false;
    }
    else{
this.showCustomer=false;
this.showOrders=true;
    }
    
  }
  testClick(val){
    console.log(val);
    this.elemmentsfromTemplate.nativeElement.style.color='green';
    this.elemmentsfromTemplate.nativeElement.style.backgroundColor='grey';

  }
  title = 'app';
  data;
  sampleData=[1,2,3,4,5,6];
  ngData:string;
  blurdata:string;
  updateInputVal(val){
    console.log(val);
    this.data=val;
  }
  blurfn(val){
    console.log(val);
    this.blurdata=val;
  }
  color='red';
  constructor(){
    this.title='angular';
    console.log(this.title);
  }
  widthVal='200px';
}
