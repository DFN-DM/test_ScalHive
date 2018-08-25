import {Component, OnInit} from '@angular/core';
import {APIService} from "../../services/api.service";

@Component({
  selector: 'app-repository-info',
  templateUrl: './repository-info.component.html',
  styleUrls: ['./repository-info.component.scss']
})
export class RepositoryInfoComponent implements OnInit {


  constructor(private  _apiService: APIService) {
  }

  contributors: Array<any> = [];
  paginationValue: number;
  returnedArray: Array<any> = [];
  selectedRepository;
  selectedContributor = JSON.parse(sessionStorage.getItem('selectedContributor'));
  showInfo = !!this.selectedContributor;


  ngOnInit() {

    this._apiService.getSelectedRepositoryData()
      .subscribe((data: Array<any>) => {
        if (data.length > 1) {
          data.reverse();
        }
        this.contributors = data;
        if (this.contributors.length > 10) {
          this.paginationValue = Math.round(this.contributors.length / 10);
          this.returnedArray = this.contributors.slice(0, 10);
        } else {
          this.returnedArray = this.contributors;
        }
      });

    this.selectedRepository = this._apiService.selectedRepository;

  }

  selectContributor(i) {
    this.selectedContributor = this.returnedArray[i];
    this.showInfo = true;
    sessionStorage.setItem('selectedContributor', JSON.stringify(this.selectedContributor));
  }

  pageChanged(event): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.contributors.slice(startItem, endItem);
  }
}
