import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.less']
})
export class FeatureComponent implements OnInit {

  @Input() title = '';
  @Input() desc = '';
  @Input() link = '';
  @Input() img = '';
  @Input() imgRight = true;

  constructor() { }

  ngOnInit(): void {
  }

}
