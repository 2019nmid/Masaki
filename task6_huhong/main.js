import style from "./main.css";
const add = document.querySelector('.add-item');
const container = document.querySelector('.item');
var items = JSON.parse(localStorage.getItem('items')) || [];
function addItem(e){
    e.preventDefault(); 
    const text = (this.querySelector('[name=item]')).value;
    const item ={
        text,
        done: false
    };
    items.push(item);
    populateList(items, container);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

function populateList(plate, plateList) {
    plateList.innerHTML=plate.map( (item, i) => {
        return`
        <li class="item-li">
            <input type="checkbox" data-index=${i} id="item${i}" ${item.done ? 'checked' : ''}>
            <lable class="item-text" for="item${i}">${item.text}</lable>
            <input type="button" value="删除" class="delete-item" >
        </li>
    `
    }).join('');
}
function toggleDone(e) {
    if(!e.target.matches("input[type='checkbox']")) return; 
    const el = e.target;
    const index = el.dataset.index;
    items[index].done =!items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, container);
}
function deleteDone(e) {
    const msg ='确定删除该项事件？'
    if(!e.target.matches("input[type='button']")) return;
    const el = e.target;
    const index = el.dataset.index;
    if(confirm(msg)){
        items.splice(index,1); 
        localStorage.setItem('items', JSON.stringify(items));
        populateList(items, container);
    }else{
        return;
    }
}

add.addEventListener('submit', addItem);
container.addEventListener('click', toggleDone);
container.addEventListener('click', deleteDone);

populateList(items, container);