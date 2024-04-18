import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.scss']
})
export class AuthCallbackComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {    
    const tokenData = localStorage.getItem('authData');
    if (tokenData) {
      console.log(tokenData);
      // const authData = JSON.parse(tokenData);
      // this.authService.saveToken(authData.data.tokens.accessToken);
      // this.authService.saveUserDetails(authData.data.user);
      // this.router.navigate(['/dashboard']); // O la ruta que corresponda
    } else {
      console.error('No authentication data received');
      this.router.navigate(['/login'], { queryParams: { error: 'Authentication failed' }});
    }
  }
}
