import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserserviceService {
  constructor(private httpclient: HttpClient) {}

  getuser = [
    {
      firstname: "Shah",
      lastname: "Zeb",
      address: "Lahore",
      description: "Hard Worker and self motivator"
    },
    {
      firstname: "Ali",
      lastname: "Hassan",
      address: "Okara",
      description: "Hard Worker "
    }
  ];
}
