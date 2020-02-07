import pageFactory from './pageFactory';

const pageContent = `
<header name='menu' class="app-header">
<div class='header-newsline newsline-pages newsline-menu'>
  <h1 class='title title-menu'>For · tummy</h1>
  <h2 class="subtitle subtitle-pages subtitle-menu">Mi grub es your grub</h2>
</div>
<div class='globes'>
    <div class='globe'>
      <img src='./01.jpg' alt=''>
    </div>
    <div class='globe'>
      <img src='./02.jpg' alt=''>
    </div>
    <div class='globe'>
      <img src='./03.jpeg' alt=''>
    </div>
    <div class='globe'>
      <img src='./04.jpeg' alt=''>
    </div>
    <div class='globe'>
      <img src='./05.jpeg' alt=''>
    </div>
    <div class='globe'>
      <img src='./06.jpg' alt=''>
    </div>
  </div>
<div class='toaster-area toaster-menu'>
  <img class="toaster" src="./toaster.png" alt="">
  <img class='shine' src="./shine.png" alt="">
  <img class='toast' src="./toast.png" alt="">
  <img class='toast toast2' src="./toast.png" alt="">
  <div class="message">
    <p>Hell is a <strong>nursery rimme</strong></p>
  </div>
</div>
<img class='header-img' id='header-img-pages' src="./cereal.jpg" alt="">
</header>
`

const menu = pageFactory('menu', pageContent, 'from-top');

export default menu