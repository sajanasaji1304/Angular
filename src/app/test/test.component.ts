import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  style1={'color':'red'}
  style2={'color':'blue'}
  check='false'
  constructor() { }

  ngOnInit(): void {
  }

}
