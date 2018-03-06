import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private user: UserService) { }

  ngOnInit() {
  }

  onSubmit(loginForm) {
    const { valid, value } = loginForm;
    if (valid) {
      this.user.login(value).subscribe(res => {
        console.log(res);
        alert('sent');
      });
    }
  }

}
