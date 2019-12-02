import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
    state$: Observable<object>;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
      this.state$ = this.activatedRoute.paramMap
          .pipe(map(() => window.history.state));
  }

}
