import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.page.html',
  styleUrls: ['./listado-alumnos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ListadoAlumnosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
