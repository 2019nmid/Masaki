<template>
  <div class="top-userF">
    <div class="function">
      <a href="javascript:void(0)"
         class="login"
         @mousedown="showDialog()">登录</a>
      <a href="javascript:void(0)"
         class="green-d btn">开通绿钻豪华版</a>
      <a href="javascript:void(0)"
         class="money btn">开通付费包</a>
    </div>
    <TopLogin v-if="loginDialog" @loginDialog="closeDialog"></TopLogin>
    <GreenDiamond></GreenDiamond>
    <Money></Money>
  </div>

</template>

<script>
import TopLogin from '@/components/common/TopLogin'
import GreenDiamond from '@/components/common/GeeenDiamond'
import Money from '@/components/common/Money'
export default { 
   data () {
    return {
      loginDialog: false,
    }
  },
  components: {
    TopLogin,
    GreenDiamond,
    Money
  },
  methods: {
    showDialog () {
      setTimeout(()=>{this.loginDialog = true;},300)  
    },
    closeDialog(status){
      setTimeout(()=>{this.loginDialog = status;},100)
    }
  },

}
</script>

<style lang="scss" scoped>
.top-userF {
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
    display: block;
  }
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-track {
    background: 0 0;
  }
  div,
  a {
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
  position: absolute;
  top: 0;
  height: 90px;
  line-height: 90px;
  .function {
    position: relative;
    top: 0;
    right: 0;
    height: 90px;
    line-height: 90px;
    .login {
      position: relative;
      font-size: 16px;
      float: left;
      width: 38px;
      margin-right: 10px;
      text-align: center;
      color: #000;
      text-decoration: none;
      &:hover {
        color: #31c27c;
      }
    }
    .btn {
      border-radius: 2px;
      font-size: 14px;
      margin-right: 6px;
      padding: 0 23px;
      height: 38px;
      line-height: 38px;
      display: inline-block;
      white-space: nowrap;
      box-sizing: border-box;
      overflow: hidden;
      &.green-d {
        margin-top: 24px;
        padding: 0 9px;
        margin-left: 10px;
        margin-right: 0;
        font-size: 13px;
        border: 1px solid #31c27c;
        background-color: #31c27c;
        color: #fff;
        &:hover {
          background-color: #2caf6f;
        }
      }
      // @media (max-width: 1220px) {
      //   &.money {
      //     display: none;
      //   }
      // }
      &.money {
        line-height: 39px;
        margin-top: 24px;
        padding: 0 9px;
        margin-left: 10px;
        margin-right: 0;
        font-size: 13px;
        border: 1px solid #c9c9c9;
        color: #000;
        &:hover {
          background-color: #ededed;
        }
      }
    }
  }
}
</style>