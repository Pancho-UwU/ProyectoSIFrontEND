import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'FrontEnd2';
  showFooter: boolean = false;
  constructor(private router: Router) {}
  ngOnInit() {
    // Detecta cambios en la ruta activa
    this.router.events.subscribe(() => {
      this.showFooter = this.router.url.startsWith('/auth');
    });
  }
}
