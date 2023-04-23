import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {
  isShow:boolean = true;
  DummyData=[
    {"Name":"Ashok"},
    {"Name":"Rahul"},
    {"Name":"Mahipal"},
    {"Name":"Krishna"}
  ]
  constructor() { }

  ngOnInit(): void {
   alert("structural directive component loaded.");

  }
  
  
}


