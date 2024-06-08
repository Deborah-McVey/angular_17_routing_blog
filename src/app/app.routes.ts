import { Routes } from '@angular/router';
/* import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component'; */

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/first-component',
    pathMatch: 'full'
  }, // this is for if you type http://localhost:4200 it with go to first component
  {
    path: 'first-component',
    loadComponent: () => import('./first/first.component').then((c) => c.FirstComponent),
  children: [
    {
      path: 'child-a',
      title: 'child-a',
      loadComponent: () => import('./child-a/child-a.component').then((c) => c.ChildAComponent)
    },
    {
      path: 'child-b',
      title: 'child-b',
      loadComponent: () => import('./child-b/child-b.component').then((c) => c.ChildBComponent)
    },
  ],
},
  {
    path: 'second-component',
    loadComponent: () => import('./second/second.component').then((c) => c.SecondComponent)
  },
];

/* export const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent }
]; */
