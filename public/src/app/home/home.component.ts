import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allPets: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getAllPetsThroughService();
  }

  getAllPetsThroughService() {
    let observable = this._httpService.getAllPets();
    observable.subscribe( (data) => {
      this.allPets = data["data"];
    });
  }

  redirectToEdit(id) {
    this._router.navigate([`/pets/${id}/edit`]);
  }
}