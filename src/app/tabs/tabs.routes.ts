import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () =>
          import('../tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'crear-alumnos',
        loadComponent: () =>
          import('../crear-alumnos/crear-alumnos.page').then((m) => m.CrearAlumnosPage),
      },
      {
        path: 'acerca-de',
        loadComponent: () =>
          import('../acerca-de/acerca-de.page').then((m) => m.AcercaDePage),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];
