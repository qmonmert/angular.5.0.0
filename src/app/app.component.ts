import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  header: Observable<any>;

  constructor(private afd: AngularFireDatabase) {
    this.header = afd.object('home-page').valueChanges();
  }

}
