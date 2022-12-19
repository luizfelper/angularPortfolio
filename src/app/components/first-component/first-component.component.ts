import { Component } from '@angular/core';

type seguidoresTypes = {
  login?: string;
};
@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})

export class FirstComponentComponent {

  name: string ="Felipe";
  age: number = 30;
  languages: string[] = ["ReactJS", "JavaScript", "TypeScript", "NodeJS"];
  seguidores: [seguidoresTypes] = [{}];

  getGithubData(): void {
    fetch('https://api.github.com/users/luizfelper/followers').then(response => {
      return response.json();
    }).then(data => {
      this.seguidores = data;
    });
  };

  ngOnInit() {
    this.getGithubData();
  };
}
