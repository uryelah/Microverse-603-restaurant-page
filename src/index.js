import home from './home';
import about from './about';
import menu from './menu';
import contact from './contact';
import nav from './nav';
import footer from './footer';
import animation from './startAnimation';

const pagesModule = (() => {
  return {
    home,
    about,
    menu,
    contact
  }
})()

window.onload = () => {
  let tabs = document.getElementsByClassName('tab');
  let appContent = document.querySelector('.app-header');
  document.body.innerHTML = `
  <div id="content"></div> ` + animation + nav + `
  <header class="app-header">
  </header>

  ` + footer
  pagesModule['menu'].addToPage(document.body.children[4]);

  [...tabs].forEach(tab => {
    tab.addEventListener('click', () => {
      Array.from(tabs).forEach(t => {
        t.classList.remove('selected')
      })
      pagesModule[document.querySelector('.app-header').getAttribute('name')].leavePage(document.querySelector('.app-header'))
      setTimeout(() => {
        pagesModule[tab.id].addToPage(document.body.children[4], false)
      }, 1000)
    });
  });
}