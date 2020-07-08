import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class ProductserviceService {
  constructor(private httpclient: HttpClient) {}
  getproduct = [
    {
      pname: "coke",
      pcatagory: "soft drink",
      pprice: "20",
      pdetail: "Not good in winter"
    },
    {
      pname: "lays",
      pcatagory: "spicy",
      pprice: "10",
      pdetail: "crispy and tasty"
    }
  ];
}
