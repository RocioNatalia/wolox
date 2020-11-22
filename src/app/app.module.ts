import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {ApiWoloxService} from "./services/apiWolox.service";
import {PagesModule} from "./pages/pages.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PagesModule,
    BrowserModule,
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
