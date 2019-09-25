<template>
  <div class="side-bar">
    <img src="http://imgcache.gtimg.cn/mediastyle/yqq/img/logo.png"
         class="bar-logo"
         alt="QQ音乐">
    <p class="bar-txt">千万高品质曲库尽享</p>
    <a href="javascript:void(0)"
       class="bar-download">
      <i class="down-icon"></i>客户端下载</a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.side-bar {
  position: fixed;
  top: 164px;
  right: 40px;
  z-index: 1001;
  padding: 18px;
  border-radius: 4px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.07);
  background-color: #fff;

  body,
  button,
  input,
  select,
  textarea,
  th {
    color: #000;
    background-color: #fff;
    font-size: 14px;
    line-height: 1.5;
    font-family: poppin, Tahoma, Arial, \5fae\8f6f\96c5\9ed1, sans-serif;
    font-family: Tahoma, Arial, \5fae\8f6f\96c5\9ed1, sans-serif/9;
  }
  div {
    margin: 0;
    padding: 0;
  }
  .bar-logo {
    display: block;
    margin: 0 auto 9px;
    width: 102px;
  }
  .bar-txt {
    margin-bottom: 10px;
    font-size: 16px;
    color: #a6a6a6;
    text-align: center;
  }
  .bar-download {
    display: block;
    margin: 0 auto;
    width: 130px;
    height: 26px;
    border-radius: 26px;
    line-height: 26px;
    font-size: 15px;
    color: #fff;
    text-align: center;
    background-color: #31c27c;
    text-decoration: none;
    cursor: pointer;
    .down-icon {
      display: inline-block;
      margin-right: 4px;
      vertical-align: -1px;
      width: 13px;
      height: 14px;
      background-position: -160px -320px;
      background-image: -webkit-image-set(
        url("~@/assets/image/icon_sprite@2x.png") 2x
      );
    }
  }
}
</style>