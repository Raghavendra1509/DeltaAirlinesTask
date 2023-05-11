import { Component, OnInit } from '@angular/core';
import { Student } from '../model';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
studentData:Student[]=[];

  constructor(private _service:StudentService){
    
  }

  ngOnInit(): void {
    
    this._service.getStudentList().subscribe(data => {
this.studentData = data.students;
    });
  }


 
}
