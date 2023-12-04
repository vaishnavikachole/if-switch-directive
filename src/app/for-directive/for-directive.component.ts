import { Component } from '@angular/core';

@Component({
  selector: 'app-for-directive',
  templateUrl: './for-directive.component.html',
  styleUrls: ['./for-directive.component.css']
})
export class ForDirectiveComponent {

  colors = ['red','blue','green']

  biodata = [
    {name : "Radhika Sharma", id : 14},
    {name : "Shivam Dixit", id : 10},
    {name : "Megha Shrivastav",id:11} 
  ]

}
