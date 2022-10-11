import { Component, OnInit } from '@angular/core';
import { StudentsService, Student } from '../students.service';

@Component({
  selector: 'app-app-form',
  templateUrl: './app-form.page.html',
  styleUrls: ['./app-form.page.scss'],
})
export class AppFormPage implements OnInit {
  inputVariable: string;
  students: Student[];
  constructor(private studentService: StudentsService) {
    this.students = this.studentService.getAllStudents();
  }

  ngOnInit() {}

  onChangeFirstInput(val?: string) {
    console.log(val);
    this.inputVariable = val;
  }

  onSubmit(formData) {
    console.log(formData.value);
    this.students = this.studentService.addStudent(
      formData.value,
      this.students
    );
  }
}
