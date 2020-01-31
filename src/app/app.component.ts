import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import * as globals from './globals';

@Component({
  selector: 'andi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'andi-service';

  constructor(private meta: Meta) {
    const metaTag = this.meta.getTag('name=andi_id')
    if (metaTag) {
        globals.setSessionId(metaTag.content);
    }
  }
}
