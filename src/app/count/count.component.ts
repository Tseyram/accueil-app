import { Component } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrl: './count.component.css'
})
export class CountComponent {
handleSave(arg0: number) {
throw new Error('Method not implemented.');
}
  value:number=0;
  save:boolean=false;
decrementer() {
if(this.value>0)
this.value--;
}
incrementer() {
  this.value++;
}

}
