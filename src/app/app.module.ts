import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { QuizBoxComponent } from './quiz-box/quiz-box.component';
import { QuizHolderComponent } from './quiz-holder/quiz-holder.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuizBoxComponent,
    QuizHolderComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule{
  constructor() {}
}
