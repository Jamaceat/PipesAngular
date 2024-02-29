import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styles: ``,
})
export class BasicsPageComponent implements OnInit {
  public nameLower: string = 'johan';
  public nameUpper: string = 'JOHAN';
  public fullName: string = 'jOhAn mEnDeZ';
  public now: Date = new Date(); // current date

  ngOnInit(): void {
    setInterval(() => {
      this.now = new Date();
    }, 1000);
  }
}
