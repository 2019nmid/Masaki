var $ = function(selector){
                return  document.querySelector(selector);
            }
            box = $(".drag"),
            bg = $(".bg"),
            text = $(".text"),
            btn = $(".btn"),
            success = false,
            distance = box.offsetWidth - btn.offsetWidth;


        btn.onmousedown = function(e){
            btn.style.transition = "";
            bg.style.transition ="";


        
            var e = e || window.event;
            var downX = e.clientX;

            document.onmousemove = function(e){

                var e = e || window.event;
                var moveX = e.clientX;

                var offsetX = moveX - downX;

                if( offsetX > distance){
                    offsetX = distance;
                }else if( offsetX < 0){
                    offsetX = 0;
                }

                btn.style.left = offsetX + "px";
                bg.style.width = offsetX + "px";

                if( offsetX == distance){
                    text.innerHTML = "验证通过";
                    text.style.color = "#fff";
                    btn.innerHTML = "&radic;";
                    btn.style.color = "green";
                    bg.style.backgroundColor = "lightgreen";

                    success = true;
                   
                    btn.onmousedown = null;
                    document.onmousemove = null;

                
                    setTimeout(function(){
                        alert('解锁成功！');
                    },100);
                }
            }

            document.onmouseup = function(e){

                if(success){
                    return;
                }else{
                    btn.style.left = 0;
                    bg.style.width = 0;
                    btn.style.transition = "left 1s ease";
                    bg.style.transition = "width 1s ease";
                }
                document.onmousemove = null;
                document.onmouseup = null;
            }


        }
 