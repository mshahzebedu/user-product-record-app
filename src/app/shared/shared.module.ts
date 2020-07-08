import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";
const routes: Routes = [{ path: "home", component: HeaderComponent }];
@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule.forRoot(routes), AppRoutingModule],

  exports: [HeaderComponent, FooterComponent]
})
export class SharedModule {}
