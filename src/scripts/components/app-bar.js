class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="nav-container">
        <a href="#/" class="home-link">
            <div class="logo">
                <img alt="logo" src="/icons/favicon-72x72.png">
            </div>
            My Restaurant
        </a>
        <button type="button" class="menu-toggle" aria-label="Open navigation menu">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <div class="nav-menu">
            <ul class="nav-links">
                <li class="nav-link"><a href="#/home">Home</a></li>
                <li class="nav-link"><a href="#/favorite">Favorite</a></li>
                <li class="nav-link"><a href="https://github.com/profdayat">About</a></li>
            </ul>
        </div>
    </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
