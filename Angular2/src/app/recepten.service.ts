import { Injectable } from '@angular/core';
import {Recept} from './Recept'

@Injectable({
  providedIn: 'root'
})
export class ReceptenService {

  constructor() { }

  SaveRecept(recept: Recept){
    let al_in_storage = false;
    for (let i = 0; i < localStorage.length; i++){
      let key = localStorage.key(i);
      let value = localStorage.getItem(key);
      let jvalue = JSON.parse(value);
      if (jvalue.naam == recept.naam){
        al_in_storage = true;
      }
    }
    if(!al_in_storage){
      localStorage.setItem(recept.naam, recept.receptToJsonString());
    }
  }  
}
