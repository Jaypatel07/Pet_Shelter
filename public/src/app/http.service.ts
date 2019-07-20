import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllPets() {
    return this._http.get("/api/pets");
  }

  getOnePet(id: number) {
    return this._http.get(`/api/pets/${id}`);
  }

  postNewPet(newPet: any) {
    return this._http.post("/api/pets", newPet);
  }

  updatePet(PetToUpdate: any) {
    return this._http.put(`/api/pets/${PetToUpdate._id}`, PetToUpdate);
  }

  deletePet(id: number) {
    return this._http.delete(`/api/pets/${id}`);
  }

  likePet(id: number) {
    return this._http.get(`/api/pets/${id}/like`);
  }
}