import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifecyclehooks';
  message:string="kiran";
  name="Sunil"
  dest=true;
  passtochild(inputel:HTMLInputElement){
    this.message=inputel.value;
  }

  changeName(){
    this.name="Prashant"
  }

  Destroy(){
    this.dest=false;
  }
}
