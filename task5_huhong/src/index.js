import _ from 'lodash';
import './style/index.css';

function createDomElement() {
    let dom = document.createElement('div');
    dom.innerHTML = _.join(['aicoder.com',' 好！','线下实习'],'');
    //dom.className = 'box';
    dom.classList.add('box');
    return dom;
}

let divDom = createDomElement();

document.body.appendChild(divDom);