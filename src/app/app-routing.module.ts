import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LandingComponent} from "./landing/landing.component";
import {PagesRouting} from "./pages/pages.routing";

const routes: Routes = [
  {
    path: '', component: LandingComponent
  }
]

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    PagesRouting,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
