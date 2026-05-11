import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadComponent: () => import('./features/auth/auth').then(m => m.Auth),
    title: 'Iniciar sesión - app global'
  },
  {
    path: 'chat',
    loadComponent: () => import('./features/chat/chat').then(m => m.Chat),
    title: 'Chat - Asistente'
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];
