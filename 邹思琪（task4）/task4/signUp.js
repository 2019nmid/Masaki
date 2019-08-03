
function signUp() {
    var username = document.getElementById("username").value;
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
        xhr.open('post', 'http://www.ljhhhx.com:8080/Test01/Regiter');
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send('userName=' + username + '&userMail=' + userMail + '&userPsw=' + userPsw);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    var result = JSON.parse(xhr.responseText);
                    var num = result.length;
                    if (result[num-1].status == true) {
                        alert('注册成功！');
                        window.location.href = 'signIn.html';
                    }
                    else {
                        alert('注册失败！');
                    }
                }
                else {
                    alert('注册失败');
                }
            }
        }
    }
}