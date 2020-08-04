import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projects: Project[] = [];

  constructor() {
    // project for the actual website itself
    // this.projects.push(new Project({
    //   name: 'My WebPage',
    //   description: 'The purpose of this website was to provide a place for me to show off some of my programming projects and hobbies. ' +
    //     'It is built using the Angular web framework, and is hosted using Amazon Web Services.',
    //   images: [],
    //   link: 'https://github.com/BennettB123/web-page',
    //   techUsed: ['Angular', 'Typescript', 'HTML', 'CSS'],
    // }));

    // stock market returns calculator
    this.projects.push(new Project({
      name: 'Stock Market Returns Calculator',
      description: 'This is a command-line application, written in Go, that calculates and displays your returns from the stock market. ' +
        'Enter your stock information into a JSON file, and the application will use a market data API (Tiingo) to pull current stock prices ' +
        'and calculate how much you have earned or lossed.',
      images: ['../../../assets/projectImgs/stockMarketReturns.PNG'],
      link: 'https://github.com/BennettB123/StockMarketReturnsCalculator',
      techUsed: ['Go (Golang)'],
    }));

    // Python Maze Generator
    this.projects.push(new Project({
      name: 'Maze Generator',
      description: 'Navigate a randomly generated maze in your terminal! This is a Python script that uses a depth-first search algorithm to ' +
        'create a maze within your terminal. Use arrow keys to move the smiley face to the end of the maze.',
      images: ['../../../assets/projectImgs/pythonMaze.PNG'],
      link: 'https://github.com/BennettB123/Python-Maze-Generator',
      techUsed: ['Python', "Curses Library"],
    }));

    // Universe Explorer
    this.projects.push(new Project({
      name: 'Infinite Universe Explorer',
      description: 'This is a javascript application to navigate around an infinite procedurally generated \'Universe\'. Left & right arrows rotate the ship, '+
        'while the spacebar activate the thrusters. Use the mouse scroll-wheel to zoom in and out. I have many more plans for this project that I hope to add in the future.',
      images: ['../../../assets/projectImgs/universeExplorerGif.gif'],
      link: 'https://github.com/BennettB123/Universe-Explorer',
      demoLink: 'https://bennettb123.github.io/Universe-Explorer/',
      techUsed: ['Python', "Curses Library"],
      notes: 'The only controls that have been implemented for mobile devices is zooming in & out. This can be done by pinching with 2 fingers',
    }));

    // C++ Slide Puzzle
    this.projects.push(new Project({
      name: '15 Puzzle',
      description: 'Play with a 15-puzzle in your terminal! Select the width and height of your puzzle (2 through 10 for each) and use ' +
        'the arrow keys to \'slide\' the pieces around to get them in order',
      images: ['../../../assets/projectImgs/slidePuzzle1.PNG', '../../../assets/projectImgs/slidePuzzle2.PNG'],
      link: 'https://github.com/BennettB123/Slide-Puzzle',
      techUsed: ['C++', 'Curses Library'],
    }));
  }

  ngOnInit(): void {
  }

}
