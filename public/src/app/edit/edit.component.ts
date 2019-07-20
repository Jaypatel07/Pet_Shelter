import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editPet: any;
  uniqueErrorMessage: string;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.editPet = {
      "name": "",
      "type": "",
      "description": "",
      "skills": []
    };
    this._route.params.subscribe((params: Params) => {
      this.getOnePetThroughService(params['id']);
    });
  }

  getOnePetThroughService(id) {
    let observable = this._httpService.getOnePet(id);
    observable.subscribe( (data) => {
      // console.log(data);
      this.editPet = data["data"];
    });
  }

  updatePetThroughService() {
    let observable = this._httpService.updatePet(this.editPet);
    observable.subscribe( (data) => {
      if (data["error"] != undefined) {
        if (data["error"]["code"] == 11000) {
          this.uniqueErrorMessage = "Pet name must be unique.";
        }
      }
      else {
        this._router.navigate(['/pets']);
      }
    });
  }
}