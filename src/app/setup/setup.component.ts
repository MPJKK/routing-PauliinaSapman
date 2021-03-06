import { Component, OnInit } from '@angular/core';
import {DigitransitService} from '../services/digitransit.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  pysakki: string;

  constructor(public digitransitService: DigitransitService, private router: Router) { }

  haePysakki() {
    this.router.navigate(['routes']);
  }

  ngOnInit() {
  }

}
