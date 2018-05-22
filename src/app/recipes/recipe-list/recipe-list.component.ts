import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe []=[
  new Recipe('grøt', 'rømmegrøt','https://www.google.no/imgres?imgurl=https%3A%2F%2Fimg.gfx.no%2F1493%2F1493102%2Foriginal.956x390c.jpg&imgrefurl=https%3A%2F%2Fwww.aperitif.no%2Foppskrifter%2Foppskrift%2Frommegrot-og-spekemat%2F63605&docid=VYArClbN8mXbIM&tbnid=PKkimVRmP190CM%3A&vet=10ahUKEwj0g7POpJnbAhVJOpoKHZcMC3EQMwgyKAAwAA..i&w=956&h=390&bih=803&biw=1440&q=r%C3%B8mmegr%C3%B8t&ved=0ahUKEwj0g7POpJnbAhVJOpoKHZcMC3EQMwgyKAAwAA&iact=mrc&uact=8')
];

  constructor() { }

  ngOnInit() {
  }

}

