document.getElementById("main").innerHTML = `
<div class="off-screen-menu" style="z-index: 2;">
  <ul>
    <li><a href="./">Home</a></li>
    <li><a href="/About-Me/">About Me</a></li>
    <li><a href="/Portfolio/">Portfolio</a></li>
    <li><a href="/Links/">Links</a></li>
    <li><a href="/Future-Plans/">Future Plans</a></li>
    <li><a href="https://github.com/Offbeet/offbeet.github.io">GitHub Repo</a></li>
  </ul>
</div>
  <nav style="z-index: 1;">
    <div class="logo">
      <img id="logo-picture" src="/assets/BeetHeadPFPSquare.jpg">
      <img id="logo-words" src="/assets/BeetWords.png">
    </div>
    <div class="ham-menu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
`;