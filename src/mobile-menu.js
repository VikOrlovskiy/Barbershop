import { Refs } from './Refs.js';
// ==================================

function onHadleClickMenu(e) {
  let menuIsOpen = Refs.mobileMenuRef.classList.toggle('is-open');
  onShowMobileMenuHiden(menuIsOpen);
}
// =============================================
function onShowMobileMenuHiden(menuIsOpen) {
  if (menuIsOpen) {
    return Refs.openMobileMenuRef.classList.add('is-hidden');
  }
  Refs.openMobileMenuRef.classList.remove('is-hidden');
}

export { onHadleClickMenu };
