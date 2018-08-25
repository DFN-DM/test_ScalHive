import {Component, OnInit} from '@angular/core';
import {APIService} from "../../services/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-repositories-list',
  templateUrl: './repositories-list.component.html',
  styleUrls: ['./repositories-list.component.scss']
})
export class RepositoriesListComponent implements OnInit {

  constructor(private  _apiService: APIService,
              private _router: Router) {
  }

  repositories: Array<any>;
  currentRepository;

  ngOnInit() {
    this._apiService.getRepositories()
      .subscribe((data: Array<any>) => {
        this.repositories = data;
      });
  }

  selectRepository(selectedRepository) {
    if (this.currentRepository === selectedRepository) {
      return;
    } else {
      sessionStorage.removeItem('selectedContributor');
      this.currentRepository = selectedRepository;
      this._apiService.selectedRepository = this.currentRepository;
      this._router.navigate(['/repository-info']);
    }
  }

}
