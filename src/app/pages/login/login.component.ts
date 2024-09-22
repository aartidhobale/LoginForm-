import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Correct import for Angular's Router

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrected to 'styleUrls' instead of 'styleUrl'
})
export class LoginComponent {

  isLoginView: boolean = false;

  userRegisterObj: any = {
    userName: '',
    password: '',
    emailId: ''
  }

  userLogin: any = {
    userName: '',
    password: '',
  }

  // Inject the Angular Router
  router = inject(Router);
  
  onRegister() {
    const isLocalData = localStorage.getItem("angular18Local");
    if (isLocalData != null) {
      const localArray = JSON.parse(isLocalData);
      localArray.push(this.userRegisterObj);
      localStorage.setItem("angular18Local", JSON.stringify(localArray));
    } else {
      const localArray = [];
      localArray.push(this.userRegisterObj);
      localStorage.setItem("angular18Local", JSON.stringify(localArray));
    }
    alert("Registration Success");
  }

  onLogin() {
    const isLocalData = localStorage.getItem("angular18Local");
    if (isLocalData != null) {
      const users = JSON.parse(isLocalData);

      const isUserFound = users.find((m: any) => m.userName === this.userLogin.userName && m.password === this.userLogin.password);
      if (isUserFound != undefined) {
        this.router.navigateByUrl('dashboard');
      } else {
        alert("User name or password is wrong");
      }
    } else {
      alert("No user found");
    }
  }
}
