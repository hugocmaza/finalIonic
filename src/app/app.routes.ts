import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'listado-alumnos',
    loadComponent: () => import('./listado-alumnos/listado-alumnos.page').then( m => m.ListadoAlumnosPage)
  },
  {
    path: 'editar-alumnos/:id',
    loadComponent: () => import('./editar-alumnos/editar-alumnos.page').then( m => m.EditarAlumnosPage)
  },
  {
    path: 'crear-alumnos',
    loadComponent: () => import('./crear-alumnos/crear-alumnos.page').then( m => m.CrearAlumnosPage)
  },
  {
    path: 'acerca-de',
    loadComponent: () => import('./acerca-de/acerca-de.page').then( m => m.AcercaDePage)
  },
  {
    path: 'modal-editar',
    loadComponent: () => import('./modal-editar/modal-editar.page').then( m => m.ModalEditarPage)
  },

];
