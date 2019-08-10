import '../style/main.less'
import '../style/header.less'
import '../style/footer.less'

import {header} from './header'
import {main} from './main'
import { footer } from './footer'



var btn1 = document.createElement("BUTTON");
var btn2 = document.createElement("BUTTON");
var btn3 = document.createElement("BUTTON");
var t1 = document.createTextNode("CLICK ME");
var t2 = document.createTextNode("CLICK ME");
var t3 = document.createTextNode("CLICK ME");
btn1.appendChild(t1);
btn2.appendChild(t2);
btn3.appendChild(t3);
document.querySelector('article').appendChild(btn1);
document.querySelector('header').appendChild(btn2);
document.querySelector('footer').appendChild(btn3);

document.querySelector('article').addEventListener('click', () => {
  main();
})
document.querySelector('header').addEventListener('click', () => {
  header();
})
document.querySelector('footer').addEventListener('click', () => {
  footer();
})
