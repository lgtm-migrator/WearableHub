import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store} from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import { LoginComponent } from '../../../auth/login/login.component';
import { SignupComponent } from '../../../auth/signup/signup.component';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'header[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {

  title = environment.APP_TITLE;
  isCollapsed: boolean;

  constructor(public router: Router, private store: Store<AppState>, private modalActions: any) {}

  ngOnInit() {
    this.isCollapsed = true;
  }

  openLogin() {
    this.store.dispatch(this.modalActions.open({cmpType: LoginComponent}));
  }

  openSignup() {
    this.store.dispatch(this.modalActions.open({cmpType: SignupComponent}));
  }

  logOut() {
    // this.store.dispatch(this.authActions.logout());
    localStorage.removeItem('id_token');
    this.router.navigate(['/']);
  }

}
