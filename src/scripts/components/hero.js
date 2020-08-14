class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero__inner">
        <h1 class="hero__title">
          My Restaurant Catalog Apps
        </h1>
        <p class="hero__tagline">
          Hallo! This website provides various restaurants from various regions.
        </p>
      </div>
    `;
  }
}

customElements.define('hero-custom', Hero);
