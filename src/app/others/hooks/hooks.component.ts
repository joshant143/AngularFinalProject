import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  constructor() { }
 
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Invoked every time there is a change in one of th input properties of the component.');
  }
  ngOnInit(): void {
    console.log('Invoked when given component has been initialized.This hook is only called once after the first ngOnChanges');
  }
  ngDoCheck(): void {
    console.log('Invoked when the change detector of the given component is invoked. It allows us to implement our own change detection algorithm for the given component.');
  }
  ngAfterContentInit(): void {
    console.log('Invoked after Angular performs any content projection into the component’s view (see the previous lecture on Content Projection for more info).');
  }
  ngAfterContentChecked(): void {
    console.log('Invoked each time the content of the given component has been checked by the change detection mechanism of Angular');
  }
  ngAfterViewInit(): void {
    console.log('Invoked when the component’s view has been fully initialized.');
  }
  ngAfterViewChecked(): void {
    console.log('Invoked each time the view of the given component has been checked by the change detection mechanism of Angular.');
  }
  
  ngOnDestroy(): void {
    console.log('This method will be invoked just before Angular destroys the component.Use this hook to unsubscribe observables and detach event handlers to avoid memory leaks.');
  }
 
}
