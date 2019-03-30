import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoListComponent } from './pages/todo-list/todo-list.component';

const routes: Routes = [{ path: '', redirectTo: '/todo-list', pathMatch: 'full' }, { path: 'todo-list', component: TodoListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
