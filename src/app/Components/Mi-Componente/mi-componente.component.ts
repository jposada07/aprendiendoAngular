import  { Component }  from '@angular/core';


@Component ({

    selector :"Mi-Componente",

    templateUrl: './mi-componente.component.html'
   
})

export class MiComponente{

    public titulo: string ;
    public comentarios : string ;
    public year: number;


constructor(){
this.comentarios = "Nuestro primer Component";
this.titulo = "Bienvenido al:"; 
this.year=2020;

    
     console.log(this.comentarios);
     console.log(this.titulo,this.year);
}

}
