export class Recept{
    naam: string;
    aantal_calorien: number;
    ingredienten: string;
    benodigde_tijd: number;
    constructor(naam: string, aantal_calorien: number, ingredienten: string, benodigde_tijd: number) {
        this.naam = naam;
        this.aantal_calorien = aantal_calorien;
        this.ingredienten = ingredienten;
        this.benodigde_tijd = benodigde_tijd;
    }
}