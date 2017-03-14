import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TaskComponent } from './components/tasks/task.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, TaskComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }