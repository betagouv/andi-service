import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxHotjarModule } from 'ngx-hotjar';
import { MatomoModule } from 'ngx-matomo';

// documentation matomo ngx https://www.npmjs.com/package/ngx-matomo
// documentation hotjar ngx https://www.npmjs.com/package/ngx-hotjar

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    NgxHotjarModule.forRoot('1404590'),
    MatomoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
