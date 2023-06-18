import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() canGoBack: boolean = false;

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/']);
  }
}
