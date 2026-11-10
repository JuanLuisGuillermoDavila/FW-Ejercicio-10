import { Component } from '@angular/core';

@Component({
  selector: 'app-presentacion',
  imports: [],
  templateUrl: './presentacion.html',
  styleUrl: './presentacion.css'
})
export class Presentacion {

  nombre: string = 'Juan Luis Guillermo Dávila Carrillo';
  carrera: string = 'Ingeniería en Sistemas Computacionales';
  semestre: number = 7;
  edad: number = 26; // Actividad Adicional 2: Propiedad edad
  institucion: string = 'UPIIZ - IPN';
  correo: string = 'jdavilac2300@alumno.ipn.mx';
  
  descripcion: string =
    'Soy estudiante de Ingeniería en Sistemas Computacionales. Me interesa el desarrollo de software, las nuevas tecnologías y la creación de soluciones digitales eficientes.';

  habilidades: string[] = [
    'Java',
    'Python',
    'HTML',
    'CSS',
    'JavaScript',
    'Bases de datos'
  ];

  idiomas: string[] = [
    'Español (Nativo)',
    'Inglés (Intermedio B2)'
  ]; // Actividades Adicionales 3 y 4: Idiomas y su renderizado

  intereses: string[] = [
    'Desarrollo Web',
    'Inteligencia Artificial',
    'Ciberseguridad',
    'Videojuegos'
  ]; // Actividad Adicional 5: Sección Intereses

  githubUrl: string = 'https://github.com/JuanLuisGuillermoDavila'; // Actividad Adicional 6: Enlace a perfiles
}