import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  inicio: string = '';
  fin: string = '';
  resultados: any[] = [];

  loading = false;
  error = '';

  constructor(private api: ApiService, private cd: ChangeDetectorRef) { }

  buscar() {
    this.error = '';

    if (!this.inicio || !this.fin) {
      this.error = 'Selecciona ambas fechas';
      return;
    }

    this.loading = true;

    this.api.getComisiones(this.inicio, this.fin)
      .subscribe({
        next: (data) => {
          this.resultados = data;
          this.loading = false;
          this.cd.detectChanges();
        },
        error: () => {
          this.error = 'Error al conectar con el backend';
          this.loading = false;
        }
      });
  }

}