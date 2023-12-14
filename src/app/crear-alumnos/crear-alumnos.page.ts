import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { Alumno } from '../model/alumno';
import { AlumnosService } from '../services/alumnos.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-crear-alumnos',
  templateUrl: './crear-alumnos.page.html',
  styleUrls: ['./crear-alumnos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule]
})
export class CrearAlumnosPage implements OnInit {

  formulario: FormGroup;

  constructor(private alumnosService: AlumnosService,
 private router: Router, formBuilder: FormBuilder) {
    /*this.form = new FormGroup({
     id: new FormControl(0),
   titulo : new FormControl(""),
   fecha : new FormControl(new Date())
 })*/

 this.formulario = formBuilder.group<Alumno>({
   id:0,
   apellido : '',
   nombre : '',
   fecha:new Date()
 });
 console.log(this.formulario);
 this.formulario.get('apellido')?.addValidators(Validators.required);
 this.formulario.get('nombre')?.addValidators(Validators.required);
 this.formulario.get('fecha')?.addValidators([Validators.required]);
 }

ngOnInit(): void {
}

show(producto: Alumno){
 this.formulario.patchValue(producto);
}

formSubmit(){
 if (this.formulario.valid){
   this.alumnosService.addAlumno(this.formulario.value).subscribe(()=>{
     this.router.navigate(['']);
   });
 }else{
 }
}


}
