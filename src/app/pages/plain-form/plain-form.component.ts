import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Observable} from 'rxjs';
import {Framework} from '../../models/framework.interface';

@Component({
  selector: 'app-plain-form',
  templateUrl: './plain-form.component.html',
  styleUrls: ['./plain-form.component.scss']
})
export class PlainFormComponent implements OnInit {

  frameworks$: Observable<Framework[]>;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.frameworks$ = this.api.getFrameworks();
  }
}
