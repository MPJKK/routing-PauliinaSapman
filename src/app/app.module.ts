import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';

import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SetupComponent } from './setup/setup.component';
import { RoutesComponent } from './routes/routes.component';
import {HttpClientModule} from '@angular/common/http';
import {DigitransitService} from './services/digitransit.service';
import {FormsModule} from '@angular/forms';
import { RouteDirectionPipe } from './pipes/route-direction.pipe';
import { RouteColorPipe } from './pipes/route-color.pipe';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FlexLayoutModule} from '@angular/flex-layout';
import {
    MatButtonModule, MatDividerModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule,
    MatTabsModule
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SetupComponent,
    RoutesComponent,
    RouteDirectionPipe,
    RouteColorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      HttpClientModule,
      FormsModule,
      AgmCoreModule.forRoot({
          apiKey: 'AIzaSyAxVeP4eBhU2lZmGN_6Oxizxoahl1W7pcY '
      }),
      BrowserAnimationsModule,
      FlexLayoutModule,
      MatTabsModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatListModule,
      MatIconModule,
      MatDividerModule,
      MatExpansionModule
  ],
  providers: [DigitransitService],
  bootstrap: [AppComponent]
})
export class AppModule { }


