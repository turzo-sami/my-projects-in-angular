import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Components

import { Home } from './Components/Home/Home';
import { Navbar } from './Components/Navbar/Navbar';
import { NotFound } from './Components/NotFound/NotFound';

const APP_ROUTES: Routes = [

  { path: '', component: Home },
  { path: '**', component: NotFound },

];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
