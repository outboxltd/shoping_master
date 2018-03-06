import { Injectable } from '@angular/core';

// help me sent the reqests to server
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) {
  }

  login(loginData) {
    return this.http.post('/api/user/login', loginData).map(res => res.json());
  }


  register(registerData) {
    return this.http.post('/api/user/register', registerData).map(res => res.json());
  }

}


// class Gilad {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const yuval = new Gilad('yuval', 26);
