import { Injectable } from '@angular/core';
import { studentDetails } from './studentDetails';

@Injectable({
  providedIn: 'root'
})
export class FormserviceService {

  constructor() { }

  public student : studentDetails[] = [
    { 
        StudentId: 1, 
        Name : 'Ijas',
        Gmail : "Ijas@gmial.com",
        Area : "Kantale"
       
    },
    { 
        StudentId: 2, 
        Name : 'Yowsif',
        Gmail : "Yowsif@gmial.com",
        Area : "Kinniya"
       
    },
    { 
        StudentId: 3, 
        Name : 'Kasun',
        Gmail : "Kasun@gmial.com",
        Area : "Ratnapura"
       
    },
    { 
        StudentId: 4, 
        Name : 'Nifras',
        Gmail : "Nifras@gmial.com",
        Area : "Trincomalee"
       
    },
    { 
        StudentId: 5, 
        Name : 'Arfath',
        Gmail : "Arfath@gmial.com",
        Area : "Colombo"
       
    },
    { 
        StudentId: 6, 
        Name : 'Afrad',
        Gmail : "Afrad@gmial.com",
        Area : "Colombo"
       
    },
    { 
        StudentId: 7, 
        Name : 'Rilwan',
        Gmail : "Rilwan@gmial.com",
        Area : "Beruwala"
       
    },
    { 
        StudentId: 8, 
        Name : 'Fathir',
        Gmail : "Fathir@gmial.com",
        Area : "Kinniya"
       
    }
];

    getStudDeatails() : studentDetails[]{
      return this.student;
    }
}
