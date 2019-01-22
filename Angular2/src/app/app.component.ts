import { Component } from '@angular/core';
import { PokeService } from './poke.service';
import { Data } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  foundPokemon;
  pokemonReq;

  start = {};
  start_day;
  start_month;
  start_year;

  end = {};
  end_day;
  end_month;
  end_year;

  pokList: Array<Data> = [];

  constructor(
    public pokeService: PokeService
  ) { }

  findPokemon() {
    this.foundPokemon = this.pokeService.getPokemon(this.pokemonReq);
  }

  showPokemon() {
    return this.foundPokemon.type;
  }

  getPokemons() {
    this.pokList = [];
    let poks = this.pokeService.getAllPokemons();
    if (this.start && this.end) {
      var startDate = new Date(this.start_year, this.start_month, this.start_day);
      var endDate = new Date(this.end_year, this.end_month, this.end_day);

      for (let pok of poks) {
        if (new Date(pok.owned) > startDate && new Date(pok.owned) < endDate) {
          let jsonstring = '{ "name" : ' + pok.name + '; "type" : ' + pok.type + '; "trainer" : ' + pok.trainer + '; "gender" : ' + pok.gender + '; "owned" : ' + pok.owned + '}';
          localStorage.setItem(pok.name, jsonstring);
          this.pokList.push(pok);
        }
      }

    }

  }

}
