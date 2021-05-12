import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Framework } from 'src/app/models/framework.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  frameworks$: Observable<Framework[]>;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.frameworks$ = this.api.getFrameworks();
  }
}
