import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true, // 👈 Esto es clave
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
