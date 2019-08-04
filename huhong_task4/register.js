const GetXHR = () => {
            let xhr = null;
            if (XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } else {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
            return xhr;
        }
        const RegUser = () => {
            const username = form1.username.value;
            const password = form1.password.value;
            const usermail = form1.usermail.value;
            const RegisterData = "userName=" + username + "&userPsw=" + password + "&userMail=" + usermail;
            const xhr = GetXHR();
            // 定义回调函数
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    // 已经接收到全部响应数据，执行以下操作
                    let data = JSON.parse(xhr.responseText)
                    console.log(data);
                    console.log(data[0].status)
                    if (data[0].status === true) {
                        if (!username) {
                            alert("用户名未填");
                        }
                        else if (!usermail) {
                            alert("邮箱未填");
                        }
                        else if (!password) {
                            alert("密码未填");
                        }
                        else {
                            alert("注册成功！\n页面即将跳转到登录界面...");
                            location.href = "login.html";
                        }
                    }
                    else {
                        alert("注册失败,请重新注册！");
                        location.href = "register.html";
                    }
                }
            };
            xhr.open('post', "http://www.ljhhhx.com:8080/Test01/Regiter", true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset-UTF-8');
            xhr.send(RegisterData);
        }
 