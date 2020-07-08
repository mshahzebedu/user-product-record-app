import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdduserComponent } from "./users/adduser/adduser.component";
import { HeaderComponent } from "./shared/header/header.component";

const routes: Routes = [
  { path: "", component: HeaderComponent },
  {
    path: "products",
    loadChildren: () =>
      import("./products/products.module").then(m => m.ProductsModule)
  },
  {
    path: "users",
    loadChildren: () => import("./users/users.module").then(m => m.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
