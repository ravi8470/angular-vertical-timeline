import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatStepperModule } from "@angular/material/stepper";
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { MatInputModule } from "@angular/material/input";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerticalTimelineComponent } from './vertical-timeline/vertical-timeline.component';
import { HttpClientModule } from '@angular/common/http';
import { VerticalTimeline2Component } from './vertical-timeline2/vertical-timeline2.component';

@NgModule({
  declarations: [
    AppComponent,
    VerticalTimelineComponent,
    VerticalTimeline2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
