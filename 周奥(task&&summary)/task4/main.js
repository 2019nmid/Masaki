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
  //登录事件
  el('.loginForm').onsubmit = (e) => {
    var loginUserName = el('#loginName').value;
    var loginUserPass = el('#password1').value;
    e.preventDefault();
    var loginXhr = new XMLHttpRequest();
    var objStatus;
    loginXhr.onreadystatechange = () => {
      if (loginXhr.readyState !== 4) {
        return;
        alert('请求错误');
      }
      const status = loginXhr.status;
      if ((status >= 200 && status < 300) || status === 304) {
        console.log('请求成功');
        var obj = JSON.parse(loginXhr.responseText);
        objStatus = obj[0].status;
        var verUser = obj[0].user;
        if (!objStatus) {
          alert('登陆失败');
        } else if (verUser === "") {
          alert('用户不存在');
        } else {
          alert('登陆成功');
          window.location.href = './success.html';
        }
      }
    }
    loginXhr.open("GET", "http://www.ljhhhx.com:8080/Test01/Login?userMail=" + loginUserName + "&userPsw=" + loginUserPass, true);
    loginXhr.send();
  }
  //注册事件
  el('.registerForm').onsubmit = (e) => {
    var registerUserName = el('#Rname').value;
    var registerUserEmail = el('#Remail').value;
    var registerUserPass1 = el('#password2').value;
    var registerUserPass2 = el('#password3').value;
    var reg1 = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    e.preventDefault();
    if (registerUserPass1.length < 6) {
      alert('建议输入长度至少为6的密码')
    } else {
      if (registerUserPass1 != registerUserPass2) {
        alert('前后两次密码输入不一致');
        return;
      } else {
        if (!reg1.test(registerUserEmail)) {
          alert('请输入正确的邮箱格式，ex: xxxxxxx@xx.com')
        } else {
          var regXhr = new XMLHttpRequest();
          var objStatus;
          regXhr.onreadystatechange = () => {
            if (regXhr.readyState !== 4) {
              return;
              alert('请求错误');
            }
            const status = regXhr.status;
            if ((status >= 200 && status < 300) || status === 304) {
              console.log('请求成功');
              var obj = JSON.parse(regXhr.responseText);
              objStatus = obj[0].status;
              if (!objStatus) {
                alert('注册失败');
                return;
              } else {
                alert('注册成功');
                el('#Rname').value = '';
                el('#Remail').value = '';
                el('#password2').value = '';
                el('#password3').value = '';
              }
            }
          }
          regXhr.open('GET', "http://www.ljhhhx.com:8080/Test01/Regiter?userName=" + registerUserName + "&userPsw=" + registerUserPass1 + "&userMail=" + registerUserEmail, true);
          regXhr.send();
        }

      }

    }

  }