import { Injectable } from '@angular/core';
import doc from '../pokemon.json';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor() {}


  getPokemon(str){
    console.log(doc);
    let ind = doc.docs.findIndex(item => {return item.name == str});
    if(ind<0){
      return null;
    }
    else{
      return doc.docs[ind];
    }
  }

  getAllPokemons(){
    return doc.docs;
  }

}
