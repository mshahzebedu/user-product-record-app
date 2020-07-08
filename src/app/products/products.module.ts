import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddproductComponent } from "./addproduct/addproduct.component";
import { EditproductComponent } from "./editproduct/editproduct.component";
import { ListproductComponent } from "./listproduct/listproduct.component";
import { DeleteproductComponent } from "./deleteproduct/deleteproduct.component";
import { Routes, RouterModule } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";
import { FormsModule, ReactiveFormsModule, FormBuilder } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ProductserviceService } from "../services/productservice.service";

const routes: Routes = [
  // {
  //   path: "addproduct",
  //   component: AddproductComponent
  // },
  // {
  //   path: "editproduct",
  //   component: EditproductComponent
  // },
  // { path: "deleteproduct", component: DeleteproductComponent },
  { path: "listproduct", component: ListproductComponent }
];

@NgModule({
  declarations: [
    AddproductComponent,
    EditproductComponent,
    ListproductComponent,
    DeleteproductComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductserviceService],
  exports: [
    AddproductComponent,
    EditproductComponent,
    ListproductComponent,
    DeleteproductComponent
  ]
})
export class ProductsModule {}
