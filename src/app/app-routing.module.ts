import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './components/Usuario/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CreateCompraComponent } from './components/compra/create-compra/create-compra.component';
import { UpdateCompraComponent } from './components/compra/update-compra/update-compra.component';
import { BoardCompraComponent } from './components/compra/board-compra/board-compra.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { BoardModeratorComponent } from './components/board-moderator/board-moderator.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { ListEmpleadosComponent } from './components/Usuario/list-empleados/list-empleados.component'
import { SaleComponent } from './components/sale/sale.component';
import { CreateSaleComponent } from './components/create-sale/create-sale.component';
import { UpdateSaleComponent } from './components/update-sale/update-sale.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'sale', component: SaleComponent },
  { path: 'create-sale', component: CreateSaleComponent },
  { path: 'update-sale/:id', component: UpdateSaleComponent },
  { path: 'compra', component: BoardCompraComponent },
  { path: 'compra/registrar', component: CreateCompraComponent },
  { path: 'compra/modificar/:id', component: UpdateCompraComponent },
  { path: 'listEmpleados', component: ListEmpleadosComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
