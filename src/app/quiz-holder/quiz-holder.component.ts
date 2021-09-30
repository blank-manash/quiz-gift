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
          action: 'lol',
          className: 'blue-snack-bar',
        },
        {
          option: 'Haye Mai to Marjawa',
          msg: 'Aaye Haye Gamakshi',
          action: 'Love',
          className: 'green-snack-bar',
        },
        {
          option: 'Kya Karu Mai Itni Beautiful Ho?',
          msg: 'Ooof You Nailed It',
          action: 'Ah',
          className: 'blue-snack-bar',
        },
      ],
    };
    this.o.push(this.p);

    this.p = {
      ques: 'What Does Gamakshi Wants for Christmas?',
      configs: [
        {
          option: 'Jingle Bells',
          msg: 'WTF U selected this',
          action: 'Why',
          className: 'green-snack-bar',
        },
        {
          option: 'A Sweet Kiss',
          msg: 'You will have mine',
          action: ':)',
          className: 'red-snack-bar',
        },
        {
          option: 'A Nice Song',
          msg: 'A One We Will Sing Together',
          action: 'YAY!',
          className: 'blue-snack-bar',
        },
        {
          option: 'A Slap On Her Ass',
          msg: 'Uhh, Okay, Maybe?',
          action: 'What',
          className: 'green-snack-bar',
        },
      ],
    };
    this.o.push(this.p);

    this.p = {
      ques: 'What Does Manash Love the Most?',
      configs: [
        {
          option: 'Pinkie',
          msg: 'I do, but not the most',
          action: 'Try Again',
          className: 'green-snack-bar',
        },
        {
          option: 'Minkie',
          msg: 'There is some obvious discrimination',
          action: 'Hihi',
          className: 'blue-snack-bar',
        },
        {
          option: 'Stomach-Kun',
          msg: 'YES!',
          action: 'Correct',
          className: 'red-snack-bar',
        },
        {
          option: 'Biceps',
          msg: 'Ah almost my best!',
          action: 'Muah',
          className: 'purple-snack-bar',
        },
      ],
    };
    this.o.push(this.p);

    this.p = {
      ques: 'I Love You',
      configs: [{
        option : 'Not Just Because Of Who You Are,',
        msg : 'But So Much More!',
        action : 'Heart',
        className : 'blue-snack-bar',
      },
      {
        option : 'Not Just Because Of What You Mean to Me',
        msg : 'Which So Much More Than You Can Imagine!',
        action : 'You Know',
        className : 'green-snack-bar',
      },
      {
        option : 'Not Just Because I love your small hands.',
        msg : 'Which I do, so much!',
        action : 'Smol',
        className : 'red-snack-bar',
      },
      {
        option : 'But Because You are Everthing, I ever asked for.',
        msg : 'Because It\'s You',
        action : 'Always',
        className : 'purple-snack-bar'
      }
    ],
    };

    this.o.push(this.p);
  }
  ngOnInit(): void {}
}
