import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.scss']
})
export class NavigationbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  linkTexts = {
    aboutPage: "About Me",
    projectsPage: "My Projects",
    contactPage: "Contact Me",
  }

}
