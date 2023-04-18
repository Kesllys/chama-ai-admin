import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PainelAdministracaoComponent } from './painel-administracao/painel-administracao.component';

const routes: Routes = [
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  { path: 'admin', component: PainelAdministracaoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
