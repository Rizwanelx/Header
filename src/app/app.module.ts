import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent} from './header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BackgroundSliderComponent } from './background-slider/background-slider.component';
import {animation} from '../animation.js';


@NgModule({
  declarations: [AppComponent, HeaderComponent, BackgroundSliderComponent],
  bootstrap: [AppComponent],

  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    NgbModule.forRoot()
  ],
  providers: [],
})
export class AppModule {}

