import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacerCompComponent } from './myWork/teahcer-comp/teacer-comp.component';
import {FormsModule} from '@angular/forms';
import { NewTeacherComponent } from './myWork/new-teacher/new-teacher.component';
import { FormComponent } from './myWork/form/form.component'

@NgModule({
  declarations: [
    AppComponent,
    TeacerCompComponent,
    NewTeacherComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule//add
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
