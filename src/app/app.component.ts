import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  
}
/** Sintaxe para exibir fotos --
 http.get<Object[]>('http://localhost:3000/flavio/photos')
 .subscribe(photos => this.photos = photos);
 */
/** Alternativamente, para exibir o log de cada foto no array, ou lançar uma exception caso haja alguma bomba
 .subscribe(photos => {
   console.log(photos);
   this.photos = photos;
  },
  err => console.log(err.message) 
  );
  */
  