import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/components/counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { LotrModule } from './lotr/lotr.module';

import { AppComponent } from './app.component';






@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    LotrModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
