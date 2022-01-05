export default {
  closeDropdowns = () => {
    document.querySelectorAll(".dropdown").forEach(el => {
      el.setAttribute('visibility', 'hidden')
    })
  }
}