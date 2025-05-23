import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  imports: [
    RouterLink
  ],
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  // Tutaj możesz dodać logikę dla strony głównej
}
