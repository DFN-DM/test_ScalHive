import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RepositoriesListComponent} from "./components/repositories-list/repositories-list.component";
import {RepositoryInfoComponent} from "./components/repository-info/repository-info.component";


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'repositories-list'
  },
  {
    path: 'repositories-list',
    pathMatch: 'full',
    component: RepositoriesListComponent
  },
  {
    path: 'repository-info',
    pathMatch: 'full',
    component: RepositoryInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
