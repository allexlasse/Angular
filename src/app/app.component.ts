import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  constructor(
    private route:ActivatedRoute,
    private titleService: Title,
    private router: Router
  ){}

  ngOnInit(): void {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .pipe(map(() => this.route))
    .pipe(map(route => {
      while(route.firstChild) route = route.firstChild;
      return route;
    }))
    .pipe(switchMap(route => route.data))
    .subscribe(event => this.titleService.setTitle(event.title));
  }
  
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
  