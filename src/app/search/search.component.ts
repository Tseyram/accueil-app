import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  constructor(private fb:FormBuilder){}
handleSearch() {
throw new Error('Method not implemented.');
}
choice!:string;
searchFormGroup!: FormGroup;
ngOnit():void{
  this.searchFormGroup=this.fb.group({
    typeEvent:this.fb.control(''),
    filtre:this.fb.control(null),
    debut:this.fb.control(null,[Validators.required]),
    fin:this.fb.control(null,[Validators.required]),
    conducteur:this.fb.control("",[Validators.required,Validators.minLength(4)]),
    titre:this.fb.control("")


  });
}
}
