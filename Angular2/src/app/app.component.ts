import { Component } from '@angular/core';
import { ReceptenService } from './recepten.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Recept } from './Recept';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Recepten';
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
      let recept: Recept;
      recept = this.recept.value;
      this.ReceptenService.SaveRecept(recept);
    }

}
