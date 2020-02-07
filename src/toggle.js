const listenForToggle = () => {
  const toggle = document.querySelector('.toggy');

  toggle.addEventListener('click', () => {
    toggle.parentElement.classList.toggle('toggle-on');
    document.querySelector('#content').classList.toggle('dark-body');
  });
}


export default listenForToggle;