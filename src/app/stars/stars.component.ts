import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nga-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input() count: number = 5;
  @Input() rating: number;
  stars: boolean [] = [];

  constructor() { }

  ngOnInit() {
    for(let i = 1; i <= this.count; i+=1){
      this.stars.push(i < this.rating)
    }
  }

}
