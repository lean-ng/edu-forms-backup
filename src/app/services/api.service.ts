import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {User} from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = environment.backendUrl + '/users';

  constructor(private http: HttpClient) {
  }

  async createUser(user: User): Promise<User> {
    return await this.http.post<User>(this.url, user).toPromise();
  }

  async findUserByAccount(account: string): Promise<User> {
    const params = new HttpParams()
      .set('account', account);
    const users = await this.http.get<User[]>(this.url, {params})
      .toPromise();
    return users.length > 0 ? users[0] : null;
  }
}
