import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-fake-api',
  templateUrl: './fake-api.component.html',
  styleUrls: ['./fake-api.component.css']
})
export class FakeApiComponent implements OnInit {
  
  constructor(private service:ServicesService) { }

  userdata:any
  ngOnInit(): void {
    this.service.Fake_api().subscribe(data=>{
      this.userdata=data
    });

  
 
  }
   
  // this.myservice.Getfakedataapi().subscribe(recivedata =>{
  //   this.Localvar=recivedata;

}
