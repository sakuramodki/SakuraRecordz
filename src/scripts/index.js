// Libraries
import "bootstrap-less";

// user modules
import navbar from './navbar.js';
import intro from './intro.js';
import scroll from './scroll.js';

// Initialize Logic

$(document).ready( () => {
  intro();
  navbar();
  scroll();
})
