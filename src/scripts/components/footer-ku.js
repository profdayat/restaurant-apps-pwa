class FooterKu extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
        <ul>
          <li><span>Copyright © 2020 - 
          <a href="https://www.linkedin.com/in/m-imam-nur-hidayat-26b147159/">Dayat</a></span></li>
        </ul>
      </footer>
    `;
  }
}

customElements.define('footer-ku', FooterKu);
