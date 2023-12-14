import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators,ReactiveFormsModule  } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Alumno } from '../model/alumno';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnosService } from '../services/alumnos.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-editar-alumnoss',
  templateUrl: './editar-alumnos.page.html',
  styleUrls: ['./editar-alumnos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule ]
})
export class EditarAlumnosPage implements OnInit {

  formulario: FormGroup;
  id: any;

  constructor(
    private service: AlumnosService,
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
    this.activatedRoute.params.subscribe((params: any)=>{
      const id = params.id;
      this.service.getAlumnobyId(id).subscribe((alumno: Alumno)=>{
        console.log('--------------'+alumno.fecha.toLocaleDateString);
        this.formulario.patchValue(alumno);
      });
    });
  }

  updateAlumno(){
    console.log('-------'+this.id+'-----'+ this.formulario);
		this.service.updateAlumno(this.id,this.formulario.value).subscribe(()=>{
      this.router.navigate(['/tabs/tab1']);
    });
	}



}
