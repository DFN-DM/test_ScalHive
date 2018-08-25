import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RepositoriesListComponent} from './components/repositories-list/repositories-list.component';
import {RepositoryInfoComponent} from './components/repository-info/repository-info.component';
import {HttpClientModule} from "@angular/common/http";
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {AppRoutingModule} from "./app-routing.module";
import {NavbarComponent} from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RepositoriesListComponent,
    RepositoryInfoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PaginationModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
