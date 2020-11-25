import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public auth = {};
  public documents = {};

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this._authService.login()
      .subscribe((data: any[]) => {
        console.log(data);
        this.auth = JSON.stringify(data["Result"]["auth"]["token"])
        console.log(this.auth)
      })
      
    this._authService.getData(this.auth)
      .subscribe((data: any[]) => {
        console.log(data);
        this.documents = data
      })
     
  }

}
