import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private user: UserService) { }

  ngOnInit() {
  }

  onSubmit(registerForm) {
    const { valid, value } = registerForm;
    if (valid) {
      this.user.register(value).subscribe(res=> {
        console.log(res);
        alert('done');

      });
    }
  }


}
