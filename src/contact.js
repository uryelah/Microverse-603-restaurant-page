import pageFactory from './pageFactory';

const pageContent = `
<header name='contact' class="app-header">
<div class='header-newsline newsline-pages newsline-contact'>
  <h1 class='title title-contact'>Get · touch</h1>
  <h2 class="subtitle-pages subtitle subtitle-contact">We are always open <br><small>(except when we are not)</small></h2>
  <figure>
    <img class='store' src='./store.jpg' alt=''>
    <figcaption class='img-cap'>
    <p><strong>Springfield store</strong></p>
    <p><em>42, 2nd street - besides the station</em></p> 
    <p><a href='#'>mailme.hey@mail.com</a></p>
    <p><strong>Hours: </strong>
    <span>1am - 12am</span></p<
    </figcaption>
  </figure>
</div>
<div class='toaster-area'>
  <img class="toaster" src="./toaster.png" alt="">
  <img class='shine' src="./shine.png" alt="">
  <img class='toast' src="./toast.png" alt="">
  <img class='toast toast2' src="./toast.png" alt="">
  <div class="message">
    <p>For sale: <strong>baby shoes</strong>,</p>
    <p>never worn...</p>      
  </div>
</div>
<img class='header-img' id='header-img-pages' src="./cereal.jpg" alt="">
</header>
`

const contact = pageFactory('contact', pageContent, 'from-top');

export default contact