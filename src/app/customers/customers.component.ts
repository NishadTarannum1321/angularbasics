import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  @Input() sampleNumbers: [Number]

  constructor() { }

  ngOnInit() {
    console.log(this.sampleNumbers);
  }

}
