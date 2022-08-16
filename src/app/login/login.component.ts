import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log(this.today);
    // var d = String(this.today);

    if (this.today.getDay() === 0 || this.today.getDay() == 6) {
      alert('Saturday and Sunday bank is closed');
      this.warning = 'Saturday and Sunday bank is closed';
    }
  }
  today: Date = new Date();
  warning: string = '';
}
