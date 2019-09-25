<!--头部功能切换区-->
<template>
  <ul class="top-nav">
    <li class="top-nav-item music-hall"><a href="javascript:void(0)"
         class="item-link"
         title="音乐馆">音乐馆</a></li>
    <li class="top-nav-item my-music"><a href="javascript:void(0)"
         class="item-link"
         title="我的音乐">我的音乐</a></li>
    <li class="top-nav-item client"><a href="http://localhost/8080/myMusic"
         class="item-link"
         title="客户端"
         @mouseenter="changeStatus(true)"
         @mouseout="changeStatus(false)">客户端</a>
      <img src="http://y.gtimg.cn/mediastyle/yqq/extra/mark_1.png"
           alt="抢特权"
           class="client-mark">
      <div class="client-dialog"
           v-show="clientDialogStatus"
           @mouseover="changeStatus(true) "
           @mouseout="changeStatus(false)">
        <div class="dialog-data">
          <p><i class="dialog-icon hq"></i>HQ高品质 全员开启</p>
          <p><i class="dialog-icon dts"></i>独家音效 全面升级</p>
          <p><i class="dialog-icon skin"></i>轻盈视觉 动态皮肤</p>
          <a href="javascript:void(0)">下载体验</a>
        </div>
      </div>
    </li>
    <li class="top-nav-item music-num"><a href="javascript:void(0)"
         class="item-link"
         title="音乐号">音乐号</a></li>
    <li class="top-nav-item vip"><a href="javascript:void(0)"
         class="item-link"
         title="VIP">VIP</a></li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      clientDialogStatus: false,
    }
  },
  methods: {
    changeStatus (e) {
      this.clientDialogStatus = e;
    }
  }
}
</script>

<style lang="scss" scoped>
.top-nav {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  font-family: poppin, Tahoma, Arial, \5fae\8f6f\96c5\9ed1, sans-serif;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  .top-nav-item {
    position: relative;
    // float: left;
    margin-right: -5px;
    list-style: none;
    display: inline-block;
    &.client {
      // background-color:#31c27c;
      .client-mark {
        position: absolute;
        top: 18px;
        right: 0;
        height: 14px;
      }
      .client-dialog {
        border: 0 none;
        top: 68px;
        left: 20px;
        right: auto;
        width: 160px;
        // display: none;
        position: absolute;
        background: #fff;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.35);
        border-radius: 4px;
        z-index: 99;
        .dialog-data {
          display: block;
          margin: 9px 0 18px;
          max-height: none;
          overflow-y: hidden;
          font-size: 14px;
          line-height: 22px;
          a {
            display: block;
            margin: 6px auto 0;
            width: 135px;
            height: 25px;
            line-height: 25px;
            font-size: 12px;
            color: #fff;
            text-align: center;
            border-radius: 25px;
            background-color: #31c27c;
            background-image: linear-gradient(to right, #24ccaa, #31c27c);
            text-decoration: none;
          }
          p {
            margin-left: 16px;
            margin-right: 0;
            padding: 5px 0;
            font-size: 12px;
            color: #000;
            line-height: 1.5;
            min-height: 22px;
            text-align: justify;
            word-break: break-all;
            margin: 0 24px 0 19px;
            display: block;
            .dialog-icon {
              display: inline-block;
              vertical-align: -3px;
              margin-right: 9px;
              width: 14px;
              height: 14px;
              background-image: url("~@/assets/image/sprite_privilege.png");
              background-image: -webkit-image-set(
                url("~@/assets/image/sprite_privilege.png") 1x,
                url("~@/assets/image/sprite_privilege@2x.png") 2x
              );
              &.hq {
                background-position: 0 0;
              }
              &.dts {
                background-position: 0 -30px;
              }
              &.skin {
                background-position: 0 -60px;
              }
            }
          }
        }
      }
    }

    .item-link {
      display: block;
      padding: 0 20px;
      line-height: 90px;
      height: 90px;
      text-align: center;
      font-size: 18px;
      color: #000;
      text-decoration: none;
      &:link,
      &:visited {
        color: #000;
      }
      &:hover,
      &:active {
        color: #31c27c;
      }
    }
    &.music-hall {
      background-color: #31c27c;
      .item-link {
        color: #fff;
      }
    }
  }
}
</style>