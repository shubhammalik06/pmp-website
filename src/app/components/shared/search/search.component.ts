import { Component, EventEmitter, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchText: string = "";

  @Output() searchEvent = new EventEmitter();
  debouncer: Subject<string> = new Subject<string>();

  constructor(){
    this.debouncer.pipe(debounceTime(1000)).subscribe((value:string) => {
      this.searchEvent.emit(value);
   //   this.searchText = "";
    });
  }

  searchItems(searchInput : string){
    this.debouncer.next(searchInput);
  }

  resetSearch(){
    this.searchText = "";
    this.searchItems("");
  }
}
