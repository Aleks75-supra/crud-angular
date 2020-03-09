import { Injectable } from '@angular/core';
import { Teacher } from '../models/Teacher';
@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  teachers: Teacher[];
  constructor() { 
this.teachers = new Array<Teacher>(
new Teacher(1, "Oleksander", "Popkin", 30, "205"),
new Teacher(2, "Vasiliy", "Vasilivich", 10, "225"),
new Teacher(3, "Petr", "Petrov", 39, "200"),
);

}

getTeachers(): Teacher[]{
  return this.teachers;

}

newTeacher(teacher: Teacher){
  this. teachers.push(teacher);
}
}