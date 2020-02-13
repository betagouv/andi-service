import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { MatomoTracker, MatomoInjector } from 'ngx-matomo';
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
    private meta: Meta,
    private matomoInjector: MatomoInjector,
    private matomoTracker: MatomoTracker
  ) {
    const metaTag = this.meta.getTag('name=andi_id');
    if (metaTag) {
      globals.setSessionId(metaTag.content);
    }
    this.matomoTracker.setUserId(globals.SessionId);
    this.matomoInjector.init('//stats.data.gouv.fr/', 94);
  }
  /* tslint:disable:no-string-literal */
  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter(route => route.outlet === 'primary'),
        mergeMap(route => {
            const newpage =  route.snapshot['_routerState'].url;
            this.matomoTracker.trackPageView(newpage);
            return route.data;
        })
      )
      .subscribe((event) => {
        this.titleService.setTitle(event['title']);
      });
  }
}
