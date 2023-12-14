import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from '../model/alumno';
import { AlumnosService } from '../services/alumnos.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-modal-editar',
  templateUrl: './modal-editar.page.html',
  styleUrls: ['./modal-editar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule]
})
export class ModalEditarPage implements OnInit {

  @Input() idAlumno: number = 0;
  formulario: FormGroup;

  constructor(
    private modalController: ModalController,  private service: AlumnosService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.formulario = formBuilder.group<Alumno>({
      id:0,
      apellido : '',
      nombre : '',
      fecha:new Date()
    });
    console.log(this.formulario);
    this.formulario.get('apellido')?.addValidators(Validators.required);
    this.formulario.get('nombre')?.addValidators(Validators.required);
   }
  ngOnInit() {
    this.service.getAlumnobyId(this.idAlumno).subscribe((alumno: Alumno)=>{
      console.log('--------------'+alumno.fecha.toLocaleDateString);
      this.formulario.patchValue(alumno);
    });
   }
  async closeModel() {
    const close = 'Modal Removed';
    this.service.updateAlumno(this.idAlumno,this.formulario.value).subscribe(()=>{

    });
    await this.modalController.dismiss(close);
  }



}
