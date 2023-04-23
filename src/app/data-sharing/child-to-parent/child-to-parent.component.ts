import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-to-parent',
  templateUrl: './child-to-parent.component.html',
  styleUrls: ['./child-to-parent.component.css']
})
export class ChildToParentComponent implements OnInit {
 
    constructor() { }
  childvar:any
  ngOnInit(): void {
    
  }
  receivedata($event: any)
  {
    this.childvar = $event
  }
 
 

}
