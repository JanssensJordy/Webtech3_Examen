import { Injectable } from '@angular/core';
import {Recept} from './Recept'

@Injectable({
  providedIn: 'root'
})
export class ReceptenService {

  constructor() { }

  SaveRecept(recept: Recept, recepten: Recept[]): Recept[]{
    let al_in_storage = false;
    if(localStorage.length > 0){
      for (let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        if (key == recept.naam){
          al_in_storage = true;
        }
      }
    }
    if(!al_in_storage){
      localStorage.setItem(recept.naam, JSON.stringify(recept));
      recepten.push(recept);
    }
    return recepten;
  }  
}
