import { Component, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { appReducer } from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pmp-website';

 

  // @HostListener('window:beforeunload', ['$event'])
  // beforeunloadHandler(event: Event): void {
  //   localStorage.setItem('applicationState', JSON.stringify(appReducer));
  // }
}
