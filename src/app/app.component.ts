import { filter, map, mergeMap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import * as globals from './globals';

@Component({
  selector: 'andi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'andi-service';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private meta: Meta
  ) {
      const metaTag = this.meta.getTag('name=andi_id');
      if (metaTag) {
        globals.setSessionId(metaTag.content);
      }
    }
  /* tslint:disable:no-string-literal */
  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) { route = route.firstChild; }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data)
      )
      .subscribe((event) => this.titleService.setTitle(event['title']));
  }
}
