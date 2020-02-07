import home from './home';
import about from './about';
import menu from './menu';
import contact from './contact';
import nav from './nav';
import footer from './footer';
import animation from './startAnimation';

const pagesModule = (() => ({
  home,
  about,
  menu,
  contact,
}))();

window.onload = () => {
  const tabs = document.getElementsByClassName('tab');
  const appContent = document.querySelector('#content');
  appContent.innerHTML = `${animation + nav}
  <header class="app-header">
  </header>

  ${footer}`;
  pagesModule.menu.addToPage(appContent.querySelector('.app-header'));

  [...tabs].forEach(tab => {
    tab.addEventListener('click', () => {
      Array.from(tabs).forEach(t => {
        t.classList.remove('selected');
      });
      pagesModule[document.querySelector('.app-header').getAttribute('name')].leavePage(document.querySelector('.app-header'));
      setTimeout(() => {
        pagesModule[tab.id].addToPage(appContent.querySelector('.app-header'), false);
      }, 1000);
    });
  });
};