import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class APIService {
  API_URL = 'https://api.github.com';
  storedRepository = sessionStorage.getItem('selectedRepository');
  private _selectedRepository = this.storedRepository ? JSON.parse(this.storedRepository) : {name: ''};


  constructor(private  httpClient: HttpClient) {
  }

  get selectedRepository() {
    return this._selectedRepository;
  }

  set selectedRepository(repository) {
    this._selectedRepository = repository;
    sessionStorage.setItem('selectedRepository', JSON.stringify(this._selectedRepository));
  }

  getRepositories() {
    return this.httpClient.get(`${this.API_URL}/users/Scalhive/repos`);
  }

  getSelectedRepositoryData() {
    return this.httpClient.get(`${this.API_URL}/repos/Scalhive/${this._selectedRepository.name}/stats/contributors`);
  }
}
