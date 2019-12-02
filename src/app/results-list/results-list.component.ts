import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {

    @Input('_gifs') private _gifs: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }


    get gifs(): any {
        return this._gifs;
    }

    set gifs(value: any) {
        this._gifs = value;
    }

    routeToPage(gif: any) {
        console.log('gif object', gif);
        this.router.navigate(['view'], {state: gif});
    }
}
