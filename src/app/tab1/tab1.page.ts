import { Component } from '@angular/core';
import { Http ,Response ,Headers, RequestOptions} from ‘@angular/http’;
import { map } from ‘rxjs/operators’;

constructor(private http: Http) { }

this.http.get("",{}).pipe(map((res: Response) =>{
var data = res.json();
}));

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {}
