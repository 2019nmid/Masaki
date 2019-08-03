
function signIn() {
    var userMail = document.getElementById("userMail").value;
    var userPsw = document.getElementById("userPsw").value;
    var atpos = userMail.indexOf("@");
    var dotpos = userMail.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userMail.length) {
        alert("不是一个有效的 e-mail 地址");
        return false;
    }
    else {
        var xhr = new XMLHttpRequest();
        xhr.open('post', 'http://www.ljhhhx.com:8080/Test01/Login');
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send('userMail=' + userMail + '&userPsw=' + userPsw);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    var result = JSON.parse(xhr.responseText);
                    var num = result.length;
                    if (result[num-1].status == true) {
                        alert('登录成功！');
                        window.location.href = 'loggedIn.html';
                    }
                    else {
                        alert('邮箱或密码错误');
                    }
                }
                else {
                    alert('登录失败');
                }
            }
        }
    }
}