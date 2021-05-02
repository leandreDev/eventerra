import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {

  public isBlack = false;
  @HostListener('window:scroll', ['$event'])
  OnScroll() {
    if (window.pageYOffset > 300) {
      this.isBlack = true;
    }

    if (window.pageYOffset < 300 && this.router.url.indexOf('product') === -1) {

      this.isBlack = false;
    }
  }
  constructor(protected router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(evt => {
      if (evt instanceof NavigationEnd && evt.url.indexOf('product') > -1) {
        this.isBlack = true;
      }
    });


  }

}
