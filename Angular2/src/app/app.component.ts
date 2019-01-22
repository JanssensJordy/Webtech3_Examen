import { Component } from '@angular/core';
import { ReceptenService } from './recepten.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  recept: FormGroup;

  ngOnInit() {
    this.recept = new FormGroup({
      naam: new FormControl(''),
      aantal_calorien: new FormControl(''),
      ingredienten: new FormControl(''),
      benodigde_tijd: new FormControl('')
    });
  }

  constructor(
    public ReceptenService: ReceptenService
  ) { }

    nieuwRecept(){
      ReceptenService.SaveRecept()
    }

}
