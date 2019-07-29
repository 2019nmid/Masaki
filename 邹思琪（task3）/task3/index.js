window.onload = function () {
    var defect = document.getElementById('defect');
    var button = document.getElementById('button');
    var appear = document.getElementById('appear');
    var imgBox = document.getElementById('imgBox');
    var tips = document.getElementById('tips');
    var leftCir = document.getElementById('leftCir');
    var rightCir = document.getElementById('rightCir');

    function randomNumBoth(Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        var num = Min + Math.round(Rand * Range);
        return num;
    }

    function changeDefect() {
        var imgX = randomNumBoth(450, 750);
        defect.style.left = imgX + 'px';
    }
    changeDefect();

    function changeImg() {
        var imgNum = randomNumBoth(1, 14);

        imgBox.style.backgroundImage = "url(img/" + imgNum + ".jpg)";
    }
    changeImg();

    button.onmousedown = function (e) {
        var offset = e.clientX - button.offsetLeft;

        document.onmousemove = function (e) {
            var blockX = e.clientX - offset;
            button.style.left = blockX + "px";
            appear.style.left = blockX + "px";
        }
    }

    button.onmouseup = function () {
        var move = defect.offsetLeft - appear.offsetLeft;
        var randomX = randomNumBoth(400, 750);

        if (move <= 15 && move >= -15) {
            tips.innerHTML = '验证通过';
            tips.style.fontWeight = 'bold';
            tips.style.background = '#66cc33';
            leftCir.style.background = '#66cc33';
            rightCir.style.background = '#66cc33';
            tips.style.color = '#ffffff';
            button.style.left = '400px';
            appear.style.left = '400px';
            changeDefect();
            changeImg();
        } else {
            tips.innerHTML = '验证失败 请重试'
            tips.style.fontWeight = 'bold';
            tips.style.background = '#bb0000';
            leftCir.style.background = '#bb0000';
            rightCir.style.background = '#bb0000';
            tips.style.color = '#ffffff';
            button.style.left = '400px';
            appear.style.left = '400px';
        }
        document.onmousemove = null;
    }

}
