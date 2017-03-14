import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1> <task></task>`,
})
export class AppComponent  { name = 'Angular'; }
