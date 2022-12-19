import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {

  name: string ="Felipe";
  age: number = 30;
  languages: string[] = ["ReactJS", "JavaScript", "TypeScript", "NodeJS"];
  seguidores: [{login: string}] = [{login: 'Felipe'}];

  getGithub() {
    fetch('https://api.github.com/users/luizfelper/followers').then(response => {
      return response.json();
    }).then().then(data => {
      console.log(data);
      this.seguidores = data;
    });
  };
}
