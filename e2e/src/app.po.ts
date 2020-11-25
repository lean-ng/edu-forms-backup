import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo() {
    return browser.get(browser.baseUrl);
  }

  async getTitleText() {
    return element(by.css('app-root h1')).getText();
  }
}
