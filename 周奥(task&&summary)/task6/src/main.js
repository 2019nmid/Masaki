import './main.scss';

const todoForm = document.querySelector('.todoItem');
const msgContainer = document.querySelector('.item');
const todoStatus= document.querySelector('.todoStatus');
var todoMsg = JSON.parse(localStorage.getItem('todoMsg')) || [];

// init();

//初始化数据和方法
// function init() {
  show(todoMsg, msgContainer);
  todoForm.addEventListener('submit', addItem);
  msgContainer.addEventListener('click', changeDone);
  msgContainer.addEventListener('click', deleteTodo);
// }

//添加待办
function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  };
  todoMsg.push(item);
  show(todoMsg, msgContainer);
  localStorage.setItem('todoMsg', JSON.stringify(todoMsg));
  this.reset();
}

//展示数据
function show (todoMsg, msgContainer) {
  console.log(todoMsg)
  if (todoMsg.length===0) {
    todoStatus.style.display = 'block';
     msgContainer.innerHTML = todoMsg.map((item, i) => {
      return `
        <li class="todoItem">
            <input type="checkbox" data-index=${i} id="item${i}" ${item.done ? 'checked' : ''}>
            <lable class="itemText" for="item${i}">${item.text}</lable>
            <input type="button" data-index=${i} value="x" class="delete-item" >
        </li>
    `
    }).join('');
  } else {
    todoStatus.style.display = 'none';
    msgContainer.innerHTML = todoMsg.map((item, i) => {
      return `
        <li class="todoItem">
            <input type="checkbox" data-index=${i} id="item${i}" ${item.done ? 'checked' : ''}>
            <lable class="itemText" for="item${i}">${item.text}</lable>
            <input type="button" data-index=${i} value="x" class="delete-item" >
        </li>
    `
    }).join('');
  }

}

//删除数据
function deleteTodo(e) {
  const msg = '确定删除该项事件？';
  if (!e.target.matches("input[type='button']")) return;
  const el = e.target;
  const index = el.dataset.index;

  if (confirm(msg)) {
    todoMsg.splice(index, 1);
    localStorage.setItem('todoMsg', JSON.stringify(todoMsg));
    show(todoMsg, msgContainer);
  } else {
    return;
  }
}


//改变完成状态
function changeDone(e) {
  if (!e.target.matches("input[type='checkbox']")) return;
  const el = e.target;
  const index = el.dataset.index;
  todoMsg[index].done = !todoMsg[index].done;
  localStorage.setItem('todoMsg', JSON.stringify(todoMsg));
  show(todoMsg, msgContainer);
}