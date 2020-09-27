import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safe-traversal-oprator',
  templateUrl: './safe-traversal-oprator.component.html',
  styleUrls: ['./safe-traversal-oprator.component.css'],
})
export class SafeTraversalOpratorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  task = {
    title: 'Review Application',
    assignee: {
      name: 'John Smith',
    },
  };
}
