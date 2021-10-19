import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  num = 4;

  task : any[] =[
    {
      "name" : "Finish Assignment."
    },
    {
      "name" : "Submit PPT."
    },
    {
      "name" : "Attend a Webinar at Evening."
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
