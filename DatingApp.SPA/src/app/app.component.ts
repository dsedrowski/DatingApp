import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { JwtHelper } from 'angular2-jwt';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private authService: AuthService) {
    setTheme('bs4');
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token');

    if (token) {
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    }
  }
}
