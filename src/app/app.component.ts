import { Component } from '@angular/core';

@Component({ // Metadata
  selector: 'app-root',
  templateUrl: './app.component.html',  // represents the view for this component
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Area 51'; // One property
  public data = 'Aniket Biswas'; // 2nd property for Component Interaction
}
