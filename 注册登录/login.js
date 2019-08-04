const GetXHR = () => {
    let xhr = null;
    if (XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xhr;
}
const LoginUser = () => {
    const usermail = form1.usermail.value;
    const password = form1.password.value;
    if (!usermail) {
        alert("邮箱未填");
    }
    else if (!password) {
        alert("密码未填");
    }
    const LoginData = "userMail=" + usermail + "&userPsw=" + password;
    const xhr = GetXHR();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
         
            let data = JSON.parse(xhr.responseText);
            console.log(data);
            console.log(data[0].status);
            if (data[0].status === true) {
                alert("登录成功!");
                alert(usermail + ",welcome~");
                location.href = "login.html";
            }
            else if (data[0].status === false) {
                alert("账号或密码错误！\n请重新登录~");
                location.href = "login.html";
            }
        }
    };
    xhr.open('post', "http://www.ljhhhx.com:8080/Test01/Login", true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset-UTF-8');
    xhr.send(LoginData);
}