/* eslint-disable object-curly-newline */
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, menu, content, toggle, currentTheme }) {
    this._button = button;
    this._drawer = drawer;
    this._menu = menu;
    this._content = content;
    this._toggle = toggle;
    this._currentTheme = currentTheme;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      menu: this._menu,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
