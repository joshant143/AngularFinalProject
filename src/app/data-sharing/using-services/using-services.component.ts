import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-using-services',
  templateUrl: './using-services.component.html',
  styleUrls: ['./using-services.component.css']
})
export class UsingServicesComponent implements OnInit {

  constructor(private service:ServicesService) { }

  ngOnInit(): void {
  }


  Onclick(){
    this.service.servicecall();
  }

}
