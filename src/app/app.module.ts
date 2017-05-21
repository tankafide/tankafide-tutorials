import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TutorialComponent } from './component/tutorial/tutorial.component';
import { StepComponent } from './component/tutorial/step/step.component';
import { DirectionComponent } from './component/tutorial/step/direction/direction.component';

import { TutorialService } from './service/tutorial.service';

@NgModule({
  declarations: [
    AppComponent,
    TutorialComponent,
    StepComponent,
    DirectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TutorialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
