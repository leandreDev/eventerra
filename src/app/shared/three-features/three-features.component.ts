import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-three-features',
  templateUrl: './three-features.component.html',
  styleUrls: ['./three-features.component.less']
})
export class ThreeFeaturesComponent implements OnInit {

  @Input() features = [
    {
      name: 'Technique',
      desc: 'PUISSANCE ET QUALITÉ ACCOUSTIQUE',
      icon: 'icon-Loudspeaker'
    },
    {
      name: 'Écologique',
      desc: 'AUTONOME EN ÉNERGIE SOLAIRE',
      icon: 'icon-Green-Energy'
    },
    {
      name: 'Agile',
      desc: 'INSTALLATION RAPIDE ET SIMPLE: \nTOUT TERRAIN',
      icon:  'icon-Arrow-Circle' // 'icon-Arrow-Circle' 'icon-Plug-In' 'icon-Plug-In2'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
