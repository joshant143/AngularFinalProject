import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-comp1',
  templateUrl: './child-comp1.component.html',
  styleUrls: ['./child-comp1.component.css']
})
export class ChildComp1Component implements OnInit {

  constructor() { }
  @Output()mypro=new EventEmitter();
  mypro2="panky";

  ngOnInit(): void {
  }
 senddata(){
    this.mypro.emit(this.mypro2);
  }
}
