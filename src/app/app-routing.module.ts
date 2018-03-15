import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pessoas/home/home.component';
import { EditarPessoaComponent } from './pessoas/editar-pessoa/editar-pessoa.component';
import { NgModule } from '@angular/core';


const routes : Routes = [
  {    path: '', redirectTo : 'pessoas', pathMatch : 'full'  },
  {    path: 'pessoas', component: HomeComponent  },
  {    path: 'pessoas/editar/:id', component: EditarPessoaComponent  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
