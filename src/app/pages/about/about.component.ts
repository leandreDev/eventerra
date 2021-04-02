import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  public features = [
    {
      title: 'Designed for companies, small teams and freelancers',
      desc: `Stack\'s visual style is simple yet distinct, making it an ideal
      starting point for your project whether it be a basic marketing site, or multi-page company presence.`,
      img: 'assets/img/pikip-scene.png',
      isImgRight: true,
      link: '/'
    },
    {
      title: 'Experience quality',
      desc: `Stack is built with customization and ease-of-use at its core — whether you're a seasoned
      developer or just starting out, you'll be making attractive sites faster than any traditional HTML template.`,
      img: 'assets/img/booth-pioneer.jpg',
      isImgRight: false,
      link: '/'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
