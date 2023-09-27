import { Component, OnInit } from '@angular/core';


interface Categorias {
  tipo:number;
  name:string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {




  categorias:Categorias[] | undefined;

  selectedCategoria: Categorias | undefined

  ngOnInit(): void {

    this.categorias = [

      {tipo:1,name:'Categoria-1'},
      {tipo:2,name:'Categoria-2'},
      {tipo:3,name:'Categoria-3'},

    ];
  }

}
