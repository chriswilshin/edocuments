import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/Http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = "https://edocsapi.azurewebsites.net/Core6"

  private dataUrl = "api/Portfolio/ByUserId"

  constructor(private http: HttpClient) { }

  postData = {"username":"testuser1@edocuments.co.uk","password":"20DemoPass20"}

  URL = "https://edocsapi.azurewebsites.net/Auth/api/Login"

  login(){
    const opts =  new HttpHeaders({
      "Authorization" : 'Digest username="xikxafatwae" realm="_root_" password=""'
      })

    console.log(opts.get("Authorization"));
    return this.http.post(this.URL, this.postData, {headers: opts} )
  }

  getData(auth){
    console.log(auth)
    console.log('"xikxafatwae" realm="_root_" password=' + auth)
    const opts =  new HttpHeaders({
      "Authorization" : '"xikxafatwae" realm="_root_" password=' + auth
      })

    console.log(opts.get("Authorization"));
    return this.http.get(this.URL + "/api/Tasks/ByUser", {headers: opts} )
  }
}
