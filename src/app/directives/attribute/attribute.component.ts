import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {
  TextColor: string = "Green";
  constructor() { }

  ngOnInit(): void {
    alert("Attribute directive component loaded.");
  }

}
