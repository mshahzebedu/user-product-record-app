import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: "app-edituser",
  templateUrl: "./edituser.component.html",
  styleUrls: ["./edituser.component.css"]
})
export class EdituserComponent implements OnInit {
  userform;
  constructor(private formBuild: FormBuilder) {
    this.userform = this.formBuild.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      address: ["", Validators.required],
      description: ["", Validators.required]
    });
  }

  ngOnInit() {}
  onSubmit(values) {
    if (this.userform.status == "INVALID") {
      alert("Please fill all field correctly ");
    } else {
      console.log(values);
    }
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
