import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormDeatailService } from '../service/form-deatail.service';
import { FormserviceService } from '../service/formservice.service';
import { studentDetails } from '../service/studentDetails';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  registartionForm : FormGroup;
  addid : any = [];
  detele: any;
  issuccess:boolean = true;
  success:boolean = false;
  Details: studentDetails[] = [];
  filteredTable: studentDetails[];
  StudentInfor:any = [];
  Studentid:number;
  studentInformation : studentDetails;
  editedBook:any={};
  testing: any;
  
  _listFilter: string;
  get listFilter(): string {
      return this._listFilter;
  }
  set listFilter(value: string) {
      this._listFilter = value;
      this.filteredTable = this.listFilter ? this.performFilter(this.listFilter) : this.Details;
  }

  constructor(
    private _student : FormserviceService, 
    private formDeatailsService: FormDeatailService,
    private route: ActivatedRoute, 
    private router: Router, 
    private formBuilder:FormBuilder) 
  { 
    this.addid = [];
    this.addid.id = this._student.getStudDeatails().length+1;
    this.Details = this._student.getStudDeatails();
    this.filteredTable = this.Details;
  }

  
  ngOnInit() {
    this.Inziling();
  }

  Inziling(){
    this.registartionForm =  this.formBuilder.group({
      index: [{value: null, disabled:true}],
      StudentId : new FormControl('',Validators.required),
      Name : new FormControl('', Validators.required),
      Gmail :  new FormControl('',Validators.required),
      Area :  new FormControl('', Validators.required)
    });
  }

  performFilter(filterBy: string): studentDetails[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this._student.getStudDeatails().filter((product: studentDetails) =>
            product.Name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  addDeatails():void{
    this.registartionForm.controls["StudentId"].setValue(this.addid.id =+this.addid.id);
    this.addid =[]; 
  }
  
  remove(id:any){
    for(let i = 0; i < this.Details.length; ++i)
    {
      if (this.Details[i].StudentId === id) 
        {
          this.Details.splice(i,1);
        }
    }
  }

  userEdit(stuDea, i) {
    this.issuccess = false;
    this.success = true;
    this.testing = i;
    this.registartionForm.setValue({
      index: i,
      StudentId: stuDea.StudentId,
      Name: stuDea.Name,
      Gmail: stuDea.Gmail,
      Area: stuDea.Area,
    })
  }

  update(){
    this._student.getStudDeatails()[this.testing].Name = this.registartionForm.value.Name;
    this._student.getStudDeatails()[this.testing].Gmail = this.registartionForm.value.Gmail;
    this._student.getStudDeatails()[this.testing].Area = this.registartionForm.value.Area;
    this.success = false;
    this.issuccess = true; 
    
  }

  Cancel(){
    this.success = false;
    this.issuccess = true;  
  }

}
