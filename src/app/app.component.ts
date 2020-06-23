import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCRUD';

  constructor(public router: Router) { }


  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/Login']);
  }
}
