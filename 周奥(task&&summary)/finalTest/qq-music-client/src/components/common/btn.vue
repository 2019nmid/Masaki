<template>
  <div class="btn-g"
       @mouseenter="btnShow(false)"
       @mouseleave="btnShow(true)">
    <div class="btn-l">
      <a href="javascript:void(0)"
         :class="{'btn_opacity':btnS}"
         @click="pageLocation('pre')">
        <i></i>
      </a>
    </div>
    <div class="btn-r">
      <a href="javascript:void(0)"
         :class="{'btn_opacity2':btnS}"
         @click="pageLocation('next')">
        <i></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['btnS'],
  data () {
    return {
      isShow: true
    }
  },
  methods: {
    btnShow (status) {
      this.isShow = status;
    },
    pageLocation (status) {
      this.$emit('lx', status)
    }
  }
}
</script>

<style lang="scss" scoped>
.btn_opacity {
  transform: translateX(-100%);
  opacity: 0;
}
.btn_opacity2 {
  transform: translateX(100%);
  opacity: 0;
}
.btn-g {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .btn-l {
    left: 0;
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    a {
      // border: 1px solid red;
      // transform: translateX(-100%);
      position: absolute;
      top: 50%;
      margin-top: -54px;
      width: 79px;
      height: 108px;
      filter: progid:DXImageTransform.Microsoft.gradient(enabled='true', startColorstr='#14000000', endColorstr='#14000000');
      background: url(#);
      background: rgba(0, 0, 0, 0.05);
      // opacity: 0;
      visibility: none;
      transition-property: opacity, transform;
      transition-duration: 0.5s;
      z-index: 2;
      i {
        left: 29px;
        background-position: -20px -120px;
        position: absolute;
        top: 50%;
        margin-top: -20px;
        width: 20px;
        height: 39px;
        background-image: -webkit-image-set(
          url("~@/assets/image/icon_sprite@2x.png") 2x
        );
      }
    }
  }
  .btn-r {
    right: 0;
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    a {
      // border: 1px solid red;
      // transform: translateX(100%);
      right: 0px;
      position: absolute;
      top: 50%;
      margin-top: -54px;
      width: 79px;
      height: 108px;
      filter: progid:DXImageTransform.Microsoft.gradient(enabled='true', startColorstr='#14000000', endColorstr='#14000000');
      background: url(#);
      background: rgba(0, 0, 0, 0.05);
      // opacity: 0;
      visibility: none;
      transition-property: opacity, transform;
      transition-duration: 0.5s;
      z-index: 2;
      i {
        right: 29px;
        background-position: 0px -120px;
        position: absolute;
        top: 50%;
        margin-top: -20px;
        width: 20px;
        height: 39px;
        background-image: -webkit-image-set(
          url("~@/assets/image/icon_sprite@2x.png") 2x
        );
      }
    }
  }
}
</style>