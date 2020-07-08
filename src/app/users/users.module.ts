import { NgModule, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdduserComponent } from "./adduser/adduser.component";
import { EdituserComponent } from "./edituser/edituser.component";
import { DeleteuserComponent } from "./deleteuser/deleteuser.component";
import { ListuserComponent } from "./listuser/listuser.component";
import { AppRoutingModule } from "../app-routing.module";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { UserserviceService } from "../services/userservice.service";
const routes: Routes = [{ path: "listuser", component: ListuserComponent }];

@NgModule({
  declarations: [
    AdduserComponent,
    EdituserComponent,
    DeleteuserComponent,
    ListuserComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserserviceService],
  exports: [
    AdduserComponent,
    EdituserComponent,
    DeleteuserComponent,
    ListuserComponent
  ]
})
export class UsersModule {}
