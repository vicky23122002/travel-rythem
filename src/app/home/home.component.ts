import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lacus magnis nisl habitasse idLorem ipsum dolor sit amet, consectetur adipiscing elit.Lacus magnis nisl habitasse id'
}
