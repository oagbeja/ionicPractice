import { Component, OnInit } from '@angular/core';
import { StudentsService, Student } from '../students.service';
import {
  ActionSheetController,
  AlertController,
  ToastController,
} from '@ionic/angular';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.page.html',
  styleUrls: ['./roster.page.scss'],
})
export class RosterPage implements OnInit {
  students: Student[];

  constructor(
    private studentService: StudentsService,
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private toastController: ToastController
  ) {
    this.students = this.studentService.getAllStudents();
  }

  ngOnInit() {}

  async presentDeleteAlert(student: Student) {
    const alert = await this.alertController.create({
      header: 'Delete this student?',
      subHeader: `${student.firstName} ${student.lastName}`,
      message: `This message can not be undone.`,
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.deleteStudent(student);
          },
        },
        {
          text: 'Never Mind',
          role: 'cancel',
        },
      ],
    });

    await alert.present();
  }

  async presentActionSheet(student: Student) {
    const actionSheet = await this.actionSheetController.create({
      header: `${student.firstName} ${student.lastName}`,
      buttons: [
        {
          text: 'Mark Present',
          icon: 'eye',
          handler: () => {
            student.status = 'present';
          },
        },
        {
          text: 'Mark Absent',
          icon: 'eye-off-outline',
          handler: () => {
            student.status = 'absent';
          },
        },
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.presentDeleteAlert(student);
            ///call delete function
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
        },
      ],
    });

    await actionSheet.present();
  }

  async deleteStudent(student: Student) {
    this.students = this.students.filter((el) => el.id !== student.id);

    const toast = await this.toastController.create({
      message: `${student.firstName} ${student.lastName} has been deleted`,
      position: 'bottom',
      duration: 3000,
    });
    await toast.present();
  }
}
