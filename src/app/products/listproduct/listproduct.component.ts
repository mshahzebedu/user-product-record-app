import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductserviceService } from "src/app/services/productservice.service";

@Component({
  selector: "app-listproduct",
  templateUrl: "./listproduct.component.html",
  styleUrls: ["./listproduct.component.css"]
})
export class ListproductComponent implements OnInit {
  productlist;
  forEdit;
  isEdit: boolean = false;
  productform: FormGroup;
  constructor(
    private productservice: ProductserviceService,
    private formBuild: FormBuilder
  ) {}

  ngOnInit() {
    this.productlist = this.productservice.getproduct;
    console.log(this.productlist);
    this.productform = this.formBuild.group({
      pname: ["", Validators.required],
      pcatagory: ["", Validators.required],
      pprice: ["", Validators.required],
      pdetail: ["", Validators.required]
    });
  }
  onSubmit(values) {
    if (this.productform.status == "INVALID") {
      alert("Please fill all fields correctly ");
    }
    if (this.isEdit == true) {
      this.productlist.splice(this.productlist.indexOf(this.forEdit), 1);
      this.productlist.push(this.productform.value);
      alert("Updated");
      this.productform.reset();
      this.isEdit = false;
    } else {
      this.productlist.push(this.productform.value);
      alert("Added");
      console.log(values);
      this.productform.reset();
    }
  }
  onEdit(item) {
    this.isEdit = true;
    this.productform = this.formBuild.group({
      pname: [item.pname],
      pcatagory: [item.pcatagory],
      pprice: [item.pprice],
      pdetail: [item.pdetail]
    });
    this.forEdit = item;
  }
  onDelete(item) {
    this.productlist.splice(this.productlist.indexOf(item), 1);
    alert("Deleted");
  }

  get pname() {
    return this.productform.get("pname");
  }
  get pcatagory() {
    return this.productform.get("apcatagory");
  }
  get pprice() {
    return this.productform.get("pprice");
  }
  get pdetail() {
    return this.productform.get("pdetail");
  }
}
