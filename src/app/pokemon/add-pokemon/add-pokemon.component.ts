import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../pokemon";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "app-add-pokemon",
  template: `
    <h2 class="center">Ajouter un pokémon</h2>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"> </app-pokemon-form>
  `,
  styles: [],
})
export class AddPokemonComponent implements OnInit {
  pokemon: Pokemon;

  constructor(private PokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemon = new Pokemon();
  }
}
