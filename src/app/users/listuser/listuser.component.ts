import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserserviceService } from "src/app/services/userservice.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: "app-listuser",
  templateUrl: "./listuser.component.html",
  styleUrls: ["./listuser.component.css"]
})
export class ListuserComponent implements OnInit {
  userlsit;
  forEdit;
  isEdit: boolean = false;
  userform: FormGroup;
  constructor(
    private userservcie: UserserviceService,
    private formBuild: FormBuilder
  ) {}

  ngOnInit() {
    this.userlsit = this.userservcie.getuser;

    this.userform = this.formBuild.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      address: ["", Validators.required],
      description: ["", Validators.required]
    });
  }

  onSubmit(values) {
    if (this.userform.status == "INVALID") {
      alert("Please fill all fields correctly ");
    }
    if (this.isEdit == true) {
      this.userlsit.splice(this.userlsit.indexOf(this.forEdit), 1);
      this.userlsit.push(this.userform.value);
      alert("Updated");
      this.userform.reset();
      this.isEdit = false;
    } else {
      this.userlsit.push(this.userform.value);
      alert("Added");
      this.userform.reset();
    }
  }

  onEdit(item) {
    this.isEdit = true;
    this.userform = this.formBuild.group({
      firstname: [item.firstname],
      lastname: [item.lastname],
      address: [item.address],
      description: [item.description]
    });
    this.forEdit = item;
  }

  onDelete(item) {
    this.userlsit.splice(this.userlsit.indexOf(item), 1);
    alert("Deleted");
  }

  get firstname() {
    return this.userform.get("firstname");
  }
  get lastname() {
    return this.userform.get("lastname");
  }
  get address() {
    return this.userform.get("address");
  }
  get description() {
    return this.userform.get("description");
  }
}
