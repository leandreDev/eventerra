import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  public features = [
    {
      title: 'LA GÉNÈSE',
      // tslint:disable-next-line:max-line-length
      desc: 'Créée en Avril 2021, EVENTERRA s’est construite autour de cette réflexion... <strong>Comment se réunir en tous lieux en limitant nos impacts ?</strong>',
      img: 'assets/img/fat-pack.png',
      isImgRight: true,
      link: '/'
    },
    {
      title: 'LA PHILOSOPHIE',
      // tslint:disable-next-line:max-line-length
      desc: 'Nous pensons que c’est la volonté de chacun et les gestes de tous qui feront changer des petites choses nécessaires à limiter nos impacts, tout en préservant le lien social, la convivialité et l’expression artistique.',
      img: 'assets/img/energy.png',
      isImgRight: false,
      link: '/'
    },
    {
      title: 'LA POSTURE',
      // tslint:disable-next-line:max-line-length
      desc: 'Garder les pieds sur terre ! EVENTERRA s’engage dans une recherche de réponses low-tech favorisant l’humain par ses savoir-faire. L’ensemble des partenaires et solutions du projet sont réalisés par des concepteurs fabricants "Made in France", ou appartenant à l’économie sociale et solidaire.',
      img: 'assets/img/agile.png',
      isImgRight: true,
      link: '/'
    },

    {
      title: 'NOTRE MÉTIER',
      desc: `Loueur de systèmes, prestataire de services et de créateur d’évènements à jauge raisonnée.`,
      img: 'assets/img/technique.png',
      isImgRight: false,
      link: '/'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
