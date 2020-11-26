import { Injectable } from '@angular/core';
import {ApiService} from '../services/api.service';
import {AbstractControl, AsyncValidator, ValidationErrors} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UniqueAccountValidator implements AsyncValidator{

  constructor(private api: ApiService) { }

  async validate(control: AbstractControl): Promise<ValidationErrors | null> {
    const user = await this.api.findUserByAccount(control.value);
    return user !== null ? { uniqueAccount: true } : null;
  }
}
