import { controller, httpGet } from 'inversify-express-utils';

@controller('/')
export class HomeController {
  @httpGet('/')
  public get(): string {
    return 'this is rich map';
  }
}
