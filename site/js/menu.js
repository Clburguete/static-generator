export class Menu {
  constructor(menu) {
    this.menu = menu;
    this.navList = this.menu.getElementsByClassName('c-header__nav')[0];
    this.mobileIcon = this.menu.getElementsByClassName('c-header__menu-icon')[0];
    this.closeIcon = this.menu.getElementsByClassName('c-header__close')[0];
  }

  init() {
    this.addEventListeners();
  }

  addEventListeners() {
    this.mobileIcon.onclick = e => {
      this.mobileIcon.classList.add('is-hidden');
      this.navList.classList.add('is-open');
      document.body.classList.add('u-overflow-hidden');
    }

    this.closeIcon.onclick = e => {
      this.mobileIcon.classList.remove('is-hidden');
      this.navList.classList.remove('is-open');
      document.body.classList.remove('u-overflow-hidden');
    }
  }
}