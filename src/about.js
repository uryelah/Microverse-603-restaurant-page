import pageFactory from './pageFactory';

const pageContent = `
<header name='about' class="app-header">
<div class='header-newsline newsline-pages'>
  <h1 class='title title-about'>The · way</h1>
  <h2 class="subtitle-pages">#goals #bestdinneraround</h2>
  <div class='message message-pages'>
    <p>
    Our founder once said:
    <quote>I wish I could eat sugary corn flakes at like 4pm...</quote>
    Then her roomate answered <q>Like the ones in the cabinet just behind you (lol)?</q>
    And she said
    <quote>Yeah, sure, but like... in a restaurant you know?</quote>
    The rest is history.
    </p>
  </div>
</div>
<div class='toaster-area'>
  <img class="toaster" src="./img/toaster.png" alt="">
  <img class='shine' src="./img/shine.png" alt="">
  <img class='toast' src="./img/toast.png" alt="">
  <img class='toast toast2' src="./img/toast.png" alt="">
  <div class="message">
    <p><strong>Tip:</strong> If you amile at our stores mirrors</p>
    <p>you'll the to see a real great person smiling back ;-)</p>      
  </div>
</div>
<img class='header-img img-about' src="./img/cereal.jpg" alt="">
</header>
`;

const about = pageFactory('about', pageContent, 'from-top');

export default about;