import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-vertical-timeline2',
  templateUrl: './vertical-timeline2.component.html',
  styleUrls: ['./vertical-timeline2.component.css']
})
export class VerticalTimeline2Component implements OnInit, AfterViewInit {

  constructor(private dataService: DataService, private _formBuilder: FormBuilder) { }

  @ViewChildren('comp') components: QueryList<any>;

  data: Array<any> = [];
  secondForm: FormGroup;
  animate: Boolean = false;

  ngOnInit() {
    window.addEventListener('scroll', _.debounce(this.scroll,50), true);
    this.secondForm = this._formBuilder.group({
      data: ['', Validators.required]
    });
    this.dataService.getData().subscribe(x => {x = x.map(y => Object.assign({},y,{inView: true}));this.data = x;console.log(x);})
  }

  ngAfterViewInit() {
    console.log(this.components);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }
  scroll = (): void => {
    this.data.forEach((x,i) => {
      x.inView = this.isScrolledIntoView(this.components._results[i].nativeElement)
    })
  }
  isScrolledIntoView = (el) => {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
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
}
