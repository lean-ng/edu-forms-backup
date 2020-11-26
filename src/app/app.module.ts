import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { PlainFormComponent } from './pages/plain-form/plain-form.component';
import { TemplateFormComponent } from './pages/template-form/template-form.component';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';
import {FormsModule} from '@angular/forms';
import { BsFeedbackDirective } from './directives/bs-feedback.directive';
import { MatchDirective } from './validators/match.directive';
import { UniqueAccountDirective } from './validators/unique-account.directive';

const appRoutes: Route[] = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'plain', component: PlainFormComponent },
  { path: 'template', component: TemplateFormComponent },
  { path: 'reactive', component: ReactiveFormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PlainFormComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    BsFeedbackDirective,
    MatchDirective,
    UniqueAccountDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
