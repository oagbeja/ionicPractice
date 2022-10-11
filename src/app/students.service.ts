import { Injectable } from '@angular/core';

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  birthDate?: string;
  parentName?: string;
  parentEmail?: string;
  parentPhone?: string;
  photoUrl?: string;
  status?: 'present' | 'absent';
}

const mockStudents: Student[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Smith',
  },
  {
    id: '2',
    firstName: 'John2',
    lastName: 'Smith2',
  },
  {
    id: '3',
    firstName: 'John3',
    lastName: 'Smith3',
  },
  {
    id: '4',
    firstName: 'John4',
    lastName: 'Smith4',
  },
  {
    id: '5',
    firstName: 'John5',
    lastName: 'Smith5',
  },
  {
    id: '6',
    firstName: 'John6',
    lastName: 'Smith6',
  },
  {
    id: '7',
    firstName: 'John7',
    lastName: 'Smith7',
  },
];

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor() {}

  getAllStudents() {
    return [...mockStudents];
  }
}
