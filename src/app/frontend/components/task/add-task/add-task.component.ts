import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})

export class AddTaskComponent {
  // emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor() {

  }

  setPrio(prio: string): void {
    console.log('set Prio fired!', prio);
  }

  clearForm() {
    console.log('formClear fired!');
  }

  createTask() {
    console.log('create Task fired!');
  }
}
