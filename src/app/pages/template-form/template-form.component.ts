import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Framework} from '../../models/framework.interface';
import {ApiService} from '../../services/api.service';
import {User} from '../../models/user.interface';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  // Model
  user: User = { account: '', email: '', password: '', framework: null };
  repeatedPassword = '';

  frameworks$: Observable<Framework[]>;

  constructor(private api: ApiService) { }

  save() {
    console.log(this.user);
  }

  ngOnInit() {
    this.frameworks$ = this.api.getFrameworks();
  }
}
