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
    this.projects.push(new Project({
      name: 'My Web Page (the website you are looking at!)',
      description: 'The purpose of this website is to provide a place for me to show off some of my programming projects. ' +
        'It is built using the Angular web framework, and is hosted using Amazon Web Services.',
      dateCreated: "June 2020",
      images: [],
      link: 'https://github.com/BennettB123/web-page',
      techUsed: ['Angular', 'Typescript', 'HTML', 'CSS'],
    }));

    this.projects.push(new Project({
      name: 'Sticky Note Board',
      description: 'This is a web app to create sticky notes in your browser. I use this app every day at work to keep track of my todo list and any other quick notes I need to remember. ' +
        'The notes can be edited, moved around the board, resized, and colored. The notes even support basic MarkDown syntax so they can be styled however you want.',
      dateCreated: 'April 2022',
      images: ['../../../assets/projectImgs/StickyNoteBoard.jpg'],
      link: 'https://github.com/BennettB123/sticky-note-board',
      demoLink: 'https://dbballentine.com/sticky-notes/',
      techUsed: ['React', 'Javascript', 'HTML', 'CSS'],
    }));

    this.projects.push(new Project({
      name: 'Password Vault',
      description: 'In school, I took a Cybersecurity class that required me to develop a program related to computer security. I decided to create a command-line based password manager. This program ' +
        'allows you to store username/password combinations that are encrypted with your master password. You can also use it to generate secure passwords. The Crypto algorithms used are ' +
        'SHA-256 and salted PBKDF2 key derivation.',
      dateCreated: 'November 2021',
      images: ['../../../assets/projectImgs/Password-vault.PNG'],
      link: 'https://github.com/BennettB123/password-vault',
      techUsed: ['Python'],
      notes: 'Use this program at your own discretion! I developed it strictly as a research project and it has not been evaluated or tested by any Cybersecurity experts.'
    }));

    this.projects.push(new Project({
      name: 'Mandelbrot Set Viewer',
      description: 'Ever since I learned about the Mandelbrot Set I have been amazed by its elaborate and infinite complexity. I created this web application to explore ' +
        'the Mandelbrot Set in a browser. You can zoom into any part of the image by click+dragging to form a new view. The controls at the bottom of the page can be used to ' +
        'change the image quality, redo your last zoom, or reset the entire view.',
      dateCreated: 'August 2020',
      images: ['../../../assets/projectImgs/Manelbrot-set.jpg'],
      link: 'https://github.com/BennettB123/Mandelbrot-Set',
      demoLink: 'https://dbballentine.com/mandelbrot/',
      techUsed: ['Javascript', 'HTML', 'CSS'],
    }));

    // Universe Explorer
    this.projects.push(new Project({
      name: 'Infinite Universe Explorer',
      description: 'This is a javascript application to navigate around a procedurally generated \'Universe\'. Left & right arrows rotate the ship, '+
        'while the spacebar activates the thrusters. Use the mouse scroll-wheel to zoom in and out. I had many more plans for this project but lost interest in it :(',
      dateCreated: "May 2020",
      images: ['../../../assets/projectImgs/universeExplorerGif.gif'],
      link: 'https://github.com/BennettB123/Universe-Explorer',
      demoLink: 'https://bennettb123.github.io/Universe-Explorer/',
      techUsed: ['Python', "Curses Library"],
      notes: 'The only controls that have been implemented for mobile devices is zooming in & out. This can be done by pinching with 2 fingers',
    }));

    // stock market returns calculator
    this.projects.push(new Project({
      name: 'Stock Market Returns Calculator',
      description: 'This is a command-line application, written in Go, that calculates and displays your returns from the stock market. ' +
        'Enter your stock information in a JSON file, and the application will use a market data API (Tiingo) to pull current stock prices ' +
        'and calculate how much you have earned or lossed',
      dateCreated: "March 2020",
      images: ['../../../assets/projectImgs/stockMarketReturns.PNG'],
      link: 'https://github.com/BennettB123/StockMarketReturnsCalculator',
      techUsed: ['Go (Golang)'],
    }));

    // Python Maze Generator
    this.projects.push(new Project({
      name: 'Maze Generator',
      description: 'Navigate a randomly generated maze in your terminal! This is a Python script that uses a depth-first search algorithm to ' +
        'create a maze within your terminal. Use arrow keys to move the smiley face to the end of the maze',
      dateCreated: "June 2019",
      images: ['../../../assets/projectImgs/pythonMaze.PNG'],
      link: 'https://github.com/BennettB123/Python-Maze-Generator',
      techUsed: ['Python', "Curses Library"],
    }));    

    // C++ Slide Puzzle
    this.projects.push(new Project({
      name: '15 Puzzle',
      description: 'Play with a 15-puzzle in your terminal! This was one of the first programs I created outside of my school work. Select the width and height of your puzzle (2 through 10 for each) and use ' +
        'the arrow keys to \'slide\' the pieces around to get them in order',
      dateCreated: "December 2018",
      images: ['../../../assets/projectImgs/slidePuzzle1.PNG', '../../../assets/projectImgs/slidePuzzle2.PNG'],
      link: 'https://github.com/BennettB123/Slide-Puzzle',
      techUsed: ['C++', 'Curses Library'],
    }));
  }

  ngOnInit(): void {
  }

}
