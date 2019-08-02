import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: []
})
export class TestComponent implements OnInit {
  public name = "";
  public greeting = "";
  public hasError = false;
  public highlight = "orange";
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"

  }

  displayName = false;
  displayBlock = false;
  public color = "brown";
  public colors = ["red", "blue", "green", "yellow"];

  @Input('parentData')
  public parentName;

  constructor() { }

  ngOnInit() {
  }

  onClick(event){
    console.log(event);
    console.log("Welcome to " + this.name + "'s world");
    this.greeting = "Welcome to Area 50";
  }

  getMessage(value){ // Template Reference Variables
    console.log(value);
  }

}
