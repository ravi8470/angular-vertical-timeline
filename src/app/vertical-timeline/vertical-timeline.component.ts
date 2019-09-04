import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatVerticalStepper, MatStep, MatStepLabel, MatStepperIcon } from "@angular/material/stepper";
import { MatFormField } from "@angular/material/form-field"
import { MatInput } from "@angular/material/input";
import { DataService } from '../data.service';
import { trigger, state, style, transition, animate } from "@angular/animations";
@Component({
  selector: 'app-vertical-timeline',
  templateUrl: './vertical-timeline.component.html',
  styleUrls: ['./vertical-timeline.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),]
})
export class VerticalTimelineComponent implements OnInit {

  isLinear = true;
  isCompleted1 = true;
  data: Array<any> = [];
  @ViewChild('stepper', { static: false }) stepper: ElementRef;
  firstFormGroup: FormGroup;
  secondForm: FormGroup;
  constructor(private _formBuilder: FormBuilder, private dataService: DataService) { }

  abc(ev) {
    console.log(ev);

  }

  submitData(stepperx) {
    const data = this.firstFormGroup.value.firstCtrl;
    console.log(data);
    if (data)
      this.dataService.send(data).subscribe((res) => {
        console.log(res);
        stepperx.selectedIndex = 1;
      })
  }

  addData(ev) {
    ev.preventDefault();
    console.log(this.secondForm.value);
    const data = this.secondForm.value.data
    this.dataService.send(data).subscribe((res) => {
      console.log(res);
      this.data.push({ data: res.data, created_at: res.created_at });
    })
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondForm = this._formBuilder.group({
      data: ['', Validators.required]
    });
    this.dataService.getData().subscribe(x => this.data = x)
  }

}
