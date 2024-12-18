import { Component } from '@angular/core';

@Component({
  selector: 'app-footerr',
  templateUrl: './footerr.component.html',
  styleUrls: ['./footerr.component.css']
})
export class FooterrComponent {
  currentYear: number = new Date().getFullYear();
}
