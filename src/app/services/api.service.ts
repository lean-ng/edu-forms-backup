import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {User} from '../models/user.interface';
import {Observable} from 'rxjs';
import {Framework} from '../models/framework.interface';
import {shareReplay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private userResourceUrl = environment.backendUrl + '/users';
  private frameworkResourceUrl = environment.backendUrl + '/frameworks';

  private frameworks$: Observable<Framework[]> = null;

  constructor(private http: HttpClient) {
  }

  async createUser(user: User): Promise<User> {
    return await this.http.post<User>(this.userResourceUrl, user).toPromise();
  }

  async findUserByAccount(account: string): Promise<User> {
    const params = new HttpParams()
      .set('account', account);
    const users = await this.http.get<User[]>(this.userResourceUrl, {params})
      .toPromise();
    return users.length > 0 ? users[0] : null;
  }

  getFrameworks(): Observable<Framework[]> {
    if (this.frameworks$ === null) {
      this.frameworks$ = this.http.get<Framework[]>(this.frameworkResourceUrl)
        .pipe(shareReplay(1));
    }
    return this.frameworks$;
  }
}
