import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ApiWoloxService} from './services/apiWolox.service';
import {PagesModule} from './pages/pages.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PagesModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ApiWoloxService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
