import pageFactory from './pageFactory';

const pageContent = `
<header name='home' class="app-header">
<div class='header-newsline'>
  <h1 class='title'>Lo·Eggo</h1>
  <h2 class="subtitle">breakfast food</h2>
</div>
<div class='toaster-area'>
  <img class="toaster" src="./toaster.png" alt="">
  <img class='shine' src="./shine.png" alt="">
  <img class='toast' src="./toast.png" alt="">
  <img class='toast toast2' src="./toast.png" alt="">
  <div class="message">
    <p><strong>Lo·Eggo</strong>, the 'gs' are silent, prides itself of serving fresh out of the box breakfast food 24/7.</p>
    <p>Come the comfy life :-)</p>      
  </div>
</div>
<img class='header-img' src="./cereal.jpg" alt="">
</header>
`;

const home = pageFactory('home', pageContent, 'from-top');

export default home;