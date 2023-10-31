import { Component, Input } from '@angular/core';

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

  ngOnChanges(){
    console.log("ngOnChanges Invoked");
    console.log(this.val);
  }

  ngDoCheck(){
    console.log("ngDoCheck getting invoked");
  }

}
