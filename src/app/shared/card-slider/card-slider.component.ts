import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.scss']
})
export class CardSliderComponent implements OnInit {

  public slides = [
    {
      name: 'PIKIP',
      img: 'assets/img/pikip.jpg',
      link: 'https://www.pikip-solarspeakers.com/fr'
    },
    {
      name: 'SWAP MUSIC',
      img: 'assets/img/swap.jpg',
      link: 'https://swap-music.com'
    },
    {
      name: 'SWAP MUSIC',
      img: 'assets/img/zfprod.jpg',
      link: 'http://zfprod.com/home/'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
