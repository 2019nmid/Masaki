import _ from 'lodash';
import './style/style.css';
import './style/a.scss';
var greeter = require('./greet.js');
document.body.appendChild(greeter());

function createDomElement() {
    var dom = document.createElement('div');
    dom.innerHTML = 'hello'
    dom.className = 'hello';
    return dom;
}

document.body.appendChild(createDomElement());