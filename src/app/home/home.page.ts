import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
name = "helloo"
hello(){
  this.name= "bhsdk!!!1"
}
onChange(e:any){
  this.name = e.target.value
  console.log(this.name)
}
}
