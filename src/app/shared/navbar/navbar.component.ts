import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @Output() busqueda = new EventEmitter<string>();

  palabraBuscada !: string;

  enviarPalabraBuscar() {
    this.busqueda.emit(this.palabraBuscada);
  }
}
