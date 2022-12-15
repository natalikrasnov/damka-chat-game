import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() users_to_display = new EventEmitter<string>()

  onInputChange = (event: Event) => {
    this.users_to_display.emit((event.target as HTMLInputElement).value)
  }
}
