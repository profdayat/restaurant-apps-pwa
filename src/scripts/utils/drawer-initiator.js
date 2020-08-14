const DrawerInitiator = {
  init({ button, drawer }) {
    button.addEventListener('click', () => {
      if (drawer.classList.contains('opened')) {
        this._closeMobileNavbar(button, drawer);
      } else {
        this._openMobileNavbar(button, drawer);
      }
    });
  },

  _openMobileNavbar(button, drawer) {
    drawer.classList.add('opened');
    button.setAttribute('aria-label', 'Close navigation menu.');
  },

  _closeMobileNavbar(button, drawer) {
    drawer.classList.remove('opened');
    button.setAttribute('aria-label', 'Open navigation menu.');
  },
};

export default DrawerInitiator;
