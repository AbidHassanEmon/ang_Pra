import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AddProductComponent } from './add-product/add-product.component';
const routes: Routes = [
  {path:'index',component:IndexComponent},
  {path:'addProduct',component:AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
