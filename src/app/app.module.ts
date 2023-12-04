import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SwitchDirectiveComponent } from './switch-directive/switch-directive.component';
import { ForDirectiveComponent } from './for-directive/for-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchDirectiveComponent,
    ForDirectiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
