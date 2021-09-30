import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Configs } from '../quiz-holder/quiz-holder.component';
@Component({
  selector: 'app-quiz-box',
  templateUrl: './quiz-box.component.html',
  styleUrls: ['./quiz-box.component.css'],
})
export class QuizBoxComponent implements OnInit {
  constructor(private snack_bar: MatSnackBar) {}
  @Input('ques') ques: string = 'How are you doing?';

  @Input('configs') configs: Configs[] = [
    {
      option: 'Good',
      msg: 'I Love You',
      action: 'Fun',
      className: 'green-snack-bar',
    },
    {
      option: 'Good',
      msg: 'I Love You',
      action: 'Fun',
      className: 'blue-snack-bar',
    },
    {
      option: 'Good',
      msg: 'I Love You',
      action: 'Fun',
      className: 'purple-snack-bar',
    },
    {
      option: 'Good',
      msg: 'I Love You',
      action: 'Fun',
      className: 'red-snack-bar',
    }
  ];
  show: boolean = false;
  onClick() {
    this.show = true;
    console.log(this.show);
  }
  ngOnInit(): void {}
  openSnackBar(i: number) {
    // Message, Action and ClassName
    this.snack_bar.open(this.configs[i].msg, this.configs[i].action, {
      panelClass: [this.configs[i].className],
    });
  }
}
