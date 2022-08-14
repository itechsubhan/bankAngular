import { getLocaleDayNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-sdn',
  templateUrl: './check-sdn.component.html',
  styleUrls: ['./check-sdn.component.css'],
})
export class CheckSdnComponent implements OnInit {
  constructor() {}

  checkSanction: boolean = true;
  checkSanctiondone: boolean = true;
  namesending!: string;
  blocked!: string;

  ngOnInit(): void {
    alert('Enter your Name');
    this.checkSanction = false;
  }
  check(name: string) {
    // logic to send the string and get the sanction eligiblity
    return true;
  }
  getName() {
    if (this.check(this.namesending)) {
      this.checkSanction = true;
      this.checkSanctiondone = false;
    } else {
      this.blocked = 'You  Are Blocked';
    }
  }
}
