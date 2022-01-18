// button, menu = selector strings
export const setUpClickAway = (button, menu) => {
  document.addEventListener('click', (e) => {
    if (!e.target.matches(button)) {
      document.querySelector(menu).setAttribute('style', 'visibility: hidden');
    }
  })
}
export const removeClickAway = (button, menu) => {
  document.removeEventListener('click', (e) => {
    if (!e.target.matches(button)) {
      document.querySelector(menu).setAttribute('style', 'visibility: hidden');
    }
  })
}