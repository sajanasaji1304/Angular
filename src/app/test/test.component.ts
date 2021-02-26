import { Component, OnInit } from '@angular/core';
import {faCalendar,faCoffee} from '@fortawesome/free-solid-svg-icons';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  style1={'color':'red'}
  style2={'color':'blue'}
  check='false'
  calendar=faCalendar
  coffee=faCoffee
  constructor() { }

  ngOnInit(): void {
  }

}
