import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  pet: any;
  buttonDisabled: boolean;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.pet = {
      "name": "",
      "type": "",
      "description": "",
      "skills": []
    };
    this.buttonDisabled = false;
    this._route.params.subscribe((params: Params) => {
      this.getOnePetThroughService(params['id']);
    });
  }

  getOnePetThroughService(id) {
    let observable = this._httpService.getOnePet(id);
    observable.subscribe( (data) => {
      // console.log(data);
      this.pet = data["data"];
    });
  }

  deletePetThroughService() {
    let observable = this._httpService.deletePet(this.pet._id);
    observable.subscribe((data) => {
      this._router.navigate(['/pets']);
    });
  }

  likePetThroughService() {
    let observable = this._httpService.likePet(this.pet._id);
    observable.subscribe((data) => {
      this.buttonDisabled = true;
      this._route.params.subscribe((params: Params) => {
        this.getOnePetThroughService(params['id']);
      });
    });
  }
}