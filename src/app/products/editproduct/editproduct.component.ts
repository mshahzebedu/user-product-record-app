import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-editproduct",
  templateUrl: "./editproduct.component.html",
  styleUrls: ["./editproduct.component.css"]
})
export class EditproductComponent implements OnInit {
  productform;
  constructor(private formBuild: FormBuilder) {
    this.productform = this.formBuild.group({
      productname: ["", Validators.required],
      productcatgory: ["", Validators.required],
      productprice: ["", Validators.required],
      productdetail: ["", Validators.required]
    });
  }

  ngOnInit() {}
  onSubmit(values) {
    if (this.productform.status != "INVALID") {
      console.log(values);
    } else {
      alert("Please Enter values correctly ");
    }
  }

  get productname() {
    return this.productform.get("productname");
  }
  get productcatgory() {
    return this.productform.get("productcatgory");
  }
  get productprice() {
    return this.productform.get("productprice");
  }
  get productdetail() {
    return this.productform.get("productdetail");
  }
}
