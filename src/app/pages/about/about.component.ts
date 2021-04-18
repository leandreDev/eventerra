import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  public features = [
    {
      title: 'LA GENESE',
      // tslint:disable-next-line:max-line-length
      desc: 'Créée en Avril 2021, EVENTERRA s’est construite autour de cette réflexion.. Comment se réunir en tous lieux en limitant nos impacts ?',
      img: 'assets/img/pikip-scene.png',
      isImgRight: true,
      link: '/'
    },
    {
      title: 'LA PHILOSOPHIE',
      // tslint:disable-next-line:max-line-length
      desc: 'Nous pensons que c’est la volonté de chacun et les gestes de tous qui feront changer des petites choses nécessaires à limiter nos impacts, tout en préservant le lien social, la convivialité et l’expression artistique.',
      img: 'assets/img/pikip-scene.png',
      isImgRight: false,
      link: '/'
    },
    {
      title: 'LA POSTURE',
      // tslint:disable-next-line:max-line-length
      desc: 'Garder les pieds sur terre ! EVENTERRA s’engage au plus dans une recherche de réponses low-tech favorisant l’humain par ses savoir-faire et le sens pratique. L’ensemble des partenaires et solutions du projet sont réalisés par des concepteurs fabricants ’’Made in France’’, ou appartenant à l’économie sociale et solidaire',
      img: 'assets/img/pikip-scene.png',
      isImgRight: true,
      link: '/'
    },

    {
      title: 'NOTRE METIER',
      desc: `Loueur des systèmes, prestataire de services et de créateur d’évènements à jauge raisonnée.`,
      img: 'assets/img/booth-pioneer.jpg',
      isImgRight: false,
      link: '/'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
