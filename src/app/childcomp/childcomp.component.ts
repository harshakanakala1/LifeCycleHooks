import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-childcomp',
  templateUrl: './childcomp.component.html',
  styleUrls: ['./childcomp.component.css']
})
export class ChildcompComponent {

  @Input() val:string='sunil';

  constructor(){
    console.log("constructor invoked");
    console.log(this.val);
  }

  ngOnInit(){
    console.log("ngOnInit Invoked");
    console.log(this.val);
  }

  ngOnChanges(change:SimpleChange){
    console.log("ngOnChanges Invoked");
    console.log(this.val);
    console.log(change);
  }

  ngDoCheck(){
    console.log("ngDoCheck getting invoked");
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit is triggered");
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked is invoked")
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit is getting called");
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked is getting called");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy is getting invoked");
  }
}
