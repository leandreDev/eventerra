import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.less']
})
export class HeadingComponent implements OnInit {

  @Input() img = 'assets/img/pikip-enceinte.jpg';
  @Input() title = '';
  @Input() subtitle = '';
  constructor() { }

  ngOnInit(): void {
  }

}
