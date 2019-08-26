  function el(element) {
    return document.querySelector(element);
  }

  //切换事件
  el('.loginBtn').onclick = () => {
    el('.login').style.display = 'block';
    el('.register').style.display = 'none';
  }

  el('.registerBtn').onclick = () => {
    el('.login').style.display = 'none';
    el('.register').style.display = 'block';
  }
