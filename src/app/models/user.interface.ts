import {Framework} from './framework.interface';

export interface User {
  id?: number;
  account: string;
  email: string;
  password: string;
  zip?: string;
  framework: Framework;
}
