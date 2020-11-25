import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Framework} from '../../models/framework.interface';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  frameworks$: Observable<Framework[]>;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.frameworks$ = this.api.getFrameworks();
  }
}
