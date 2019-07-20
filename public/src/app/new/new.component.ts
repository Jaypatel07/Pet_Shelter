import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newPet: any;
  uniqueErrorMessage: string;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.newPet = {
      "name": "",
      "type": "",
      "description": "",
      "skills": []
    };
  }

  createPetThroughService() {
    let observable = this._httpService.postNewPet(this.newPet);
    observable.subscribe((data) => {
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