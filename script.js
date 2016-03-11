console.warn("Hi! My name is Anton. Type 'hi()' to talk with me.");

window.hi = function(){
  var delay = 1000;
  function delayInc(i) { delay += i; }
  msg("Great! I want to introduce myself a bit.", delay);
  delayInc(2000);
  msg("I am a front end developer with 3 years of experience in coding and 7 years experience of web-design.", delay);
  delayInc(5000);
  msg("I have closed more than 100 projects on the Russian Freelance Services and more than 15 projects on the Upwork.", delay);
  delayInc(5000);
  msg("Some of them were tiny as adding responsive styles to current layout or creating a custom template for Webflow.", delay);
  delayInc(5000);
  msg("Others were big like maintaining a giant gallery with Angular.js or front end developing for CRM dashboard.", delay);;
  delayInc(4000);
  msg("I like interesting projects, clear code, modern tools and design.", delay);
  delayInc(4000);
  msg("Type skills() to get the list of my skills, type contact() for a list of my contact information.", delay);
};

function msg(m, delay) {
  var fn = function() {
    console.log(m);
  };
  setTimeout(fn, delay);
  return true;
}
