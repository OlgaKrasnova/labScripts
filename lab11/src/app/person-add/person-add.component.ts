import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Person } from '../shared/models/person.model';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit {

  @Output() addperson = new EventEmitter<Person>();

  constructor() { }

  ngOnInit() {
  }

  onAddPerson(firstname: string, lastname: string, saveButton) {
    let person = new Person(firstname, lastname);
    firstname = "";
    lastname = "";
    this.addperson.emit(person);
    // saveButton.disabled = true;
  }
  // onValidate(inputFirstName, inputLastName, saveButton) {
  //   if (inputFirstName.value && inputLastName.value) {
  //     saveButton.disabled = false;
  //   }
  // }


  

}
