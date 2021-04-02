import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-three-features',
  templateUrl: './three-features.component.html',
  styleUrls: ['./three-features.component.less']
})
export class ThreeFeaturesComponent implements OnInit {

  @Input() features = [
    {
      name: 'Empower Youth',
      desc: 'Stack comes with integration for Mail Chimp and Campaign Monitor forms - ideal for launching modern marketing campaigns',
      icon: 'icon-Laughing'
    },
    {
      name: 'Provide Aid',
      desc: 'Stack comes with integration for Mail Chimp and Campaign Monitor forms - ideal for launching modern marketing campaigns',
      icon: 'icon-Medical-Sign'
    },
    {
      name: 'Strengthen Community',
      desc: 'Stack comes with integration for Mail Chimp and Campaign Monitor forms - ideal for launching modern marketing campaigns',
      icon: 'icon-Finger-Print'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
