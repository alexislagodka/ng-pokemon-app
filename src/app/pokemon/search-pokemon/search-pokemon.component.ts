import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from "rxjs";
import { Pokemon } from "../pokemon";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "app-search-pokemon",
  templateUrl: "./search-pokemon.component.html",
})
export class SearchPokemonComponent implements OnInit {
  searchTerms = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;
  constructor(private PokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term) => this.PokemonService.searchPokemonList(term))
    );
  }

  search(term: string) {
    this.searchTerms.next(term)
  }

  gotoDetail(pokemon: Pokemon) {
    const link = ["pokemon", pokemon.id];
    this.router.navigate(link);
  }
}
