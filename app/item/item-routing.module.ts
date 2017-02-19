import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import {ItemComponent} from "./item.component";
import {ItemDetailComponent} from "./item-detail/item-detail.component";

const routes: Routes = [
  { path: '', component: ItemComponent },
  { path: ':id', component: ItemDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
