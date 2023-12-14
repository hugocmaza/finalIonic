import { Injectable } from '@angular/core';
import { Alumno } from '../model/alumno';
import {HttpClient, HttpClientModule, HttpHeaders, HttpErrorResponse} from '@angular/common/http'
import { Observable, of, throwError } from 'rxjs';
import {retry, catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  alumnos!: Alumno[];
  nuevaAlumno = new Alumno(0,new Date(),'','');
  url = 'http://localhost:3000/alumnos';
  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(public http: HttpClient) { }

  getAllAlumnos( ): Observable<Alumno[]>{

    return this.http.get<Alumno[]>(`${this.url}/`).pipe(
      tap((Student) => console.log('Listado de Alumnos')),
      catchError(this.handleError<Alumno[]>('Error al Obtener Alumnos', []))
    );


  }

  getAlumnobyId(id: number): Observable<Alumno>{
    return this.http.get<Alumno>(this.url+ '/' +id); //"http://localhost:3000/alumno/+3"
  }

  addAlumno(alumno: Alumno): Observable<any>{
    //REALIZAR
  }

  updateAlumno(id: number,alumno: Alumno): Observable<any>{

    //REALIZAR
  }

  deleteAlumno(id: number): Observable<any>{
    //REALIZAR
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
