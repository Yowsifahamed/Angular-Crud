import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import { Location } from "@angular/common";
import { studentDetails } from '../service/studentDetails';
import { FormserviceService } from '../service/formservice.service';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent implements OnInit {

  registartionForm : FormGroup;
  submitted : boolean = false;
  addid : any = [];
  Details: studentDetails[] = [];

  constructor(
    private formBuilder: FormBuilder, 
    private _student : FormserviceService, 
    private locate : Location) { 
    this.addid = [];
    this.addid.id = this._student.getStudDeatails().length+1;
    this.Details = this._student.getStudDeatails();
  }

  ngOnInit() {
    this.Inziling();
    this.addValues();
  }

  Inziling(){
    this.registartionForm =  this.formBuilder.group({
      StudentId : new FormControl('',Validators.required),
      Name : new FormControl('', Validators.required),
      Gmail :  new FormControl('',Validators.required),
      Area :  new FormControl('', Validators.required)
    });
  }
  addValues(){
    this.registartionForm.controls["StudentId"].setValue(this.addid.id =+this.addid.id);
    this.addid =[];
  }
  Cancel(){
    this.locate.back();
  }

  get f() { return this.registartionForm.controls; }

  onSubmit() {
    if (this.registartionForm.invalid) {
      this.submitted = true;
    }
    else
    {
      this.Details.push({
        StudentId : this.registartionForm.value.StudentId,
        Name : this.registartionForm.value.Name,
        Gmail : this.registartionForm.value.Gmail,
        Area : this.registartionForm.value.Area                          
      });
        this.registartionForm.reset();
        this.locate.back();
    }   
  }
}
