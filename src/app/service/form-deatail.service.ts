import { Injectable } from '@angular/core';
import { FormserviceService } from './formservice.service';
import { studentDetails } from './studentDetails';

@Injectable({
  providedIn: 'root'
})
export class FormDeatailService {

  constructor(private FormServiceData : FormserviceService) {
    this.FormServiceData.getStudDeatails();
  }


  getEmployee(StudentId:Number):studentDetails{
    return this.FormServiceData.getStudDeatails().find(emp => emp.StudentId == StudentId);
  }
}
