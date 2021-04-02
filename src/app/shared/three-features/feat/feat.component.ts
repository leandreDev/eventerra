import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feat',
  templateUrl: './feat.component.html',
  styleUrls: ['./feat.component.less']
})
export class FeatComponent implements OnInit {

  @Input() name = '';
  @Input() desc = '';
  @Input() icon = '';

  public classes: any;

  constructor() { }

  ngOnInit(): void {
    this.classes = {
      icon: true,
      'icon--lg': true,
      'color--primary': true,
      [this.icon]: true
    };

  }

}
