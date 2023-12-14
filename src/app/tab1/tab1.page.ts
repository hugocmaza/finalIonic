import { Component } from '@angular/core';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Alumno } from '../model/alumno';
import { AlumnosService } from '../services/alumnos.service';
import { FormBuilder, FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { IonContent, IonHeader, IonIcon, IonTitle, IonToolbar,
  IonItemOptions, IonItemOption, IonLabel, IonItem, IonItemSliding, IonList
 } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,
    IonIcon, IonItemOptions, IonItemOption, RouterModule, IonLabel, IonItem,
    IonItemSliding, IonList, CommonModule,
    ExploreContainerComponent],
})
export class Tab1Page {
  alumnos: Alumno[] = [];

  constructor(
    private service: AlumnosService,
    public formBuilder: FormBuilder, private router: Router)
    { }

  ngOnInit(): void {
    this.service.getAllAlumnos().subscribe((resp: Alumno[])=>{
      this.alumnos = resp;
    });
  }

  borrar(id: number){
    this.service.deleteAlumno(id)
    .subscribe((response) => {
      this.ngOnInit();
        this.router.navigate(['/tabs/tab1']);

    });
  }

}
