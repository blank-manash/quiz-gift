import { Component, OnInit } from '@angular/core';

export interface Configs {
  msg: string;
  action: string;
  option: string;
  className: string;
}

export interface Options {
  ques: string;
  configs: Configs[];
}

@Component({
  selector: 'app-quiz-holder',
  templateUrl: './quiz-holder.component.html',
  styleUrls: ['./quiz-holder.component.css'],
})
export class QuizHolderComponent implements OnInit {
  o: Options[] = [];
  p: Options;
  constructor() {
    this.p = {
      ques: 'How are you so pretty?',
      configs: [
        {
          option: 'Manash Loves me a Lot!',
          msg: 'Awww I Really Do!',
          action: 'Muah',
          className: 'red-snack-bar',
        },
        {
          option: 'Kamasutra.',
          msg: 'No Comments, You Win.',
          action : 'lol',
          className : 'blue-snack-bar'
        },
      ],
    };
    this.o.push(this.p);
  }
  ngOnInit(): void {}
}
