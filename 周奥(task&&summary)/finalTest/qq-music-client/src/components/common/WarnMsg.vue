<template>
<transition>
  <div class="warn"><i></i><span>{{msg}}</span></div>
</transition>
</template>

<script>
export default {
  props: ['msg']
}
</script>

<style lang="scss" scoped>
    .v-enter,
    .v-leave-to {
      opacity: 0;
    }
    .v-enter-active,
    .v-leave-active{
      transition: all 0.3s ease;
    }
.warn {
  font-family: -apple-system, "Helvetica Neue", Arial, "PingFang SC",
    "Hiragino Sans GB", STHeiti, "Microsoft YaHei", "Microsoft JhengHei",
    "Source Han Sans SC", "Noto Sans CJK SC", "Source Han Sans CN",
    "Noto Sans SC", "Source Han Sans TC", "Noto Sans CJK TC",
    "WenQuanYi Micro Hei", SimSun, sans-serif;
  padding-top: 8px;
  height: 18px;
  overflow: hidden;
  position: relative;
  line-height: 1;
  margin: 0;
  padding: 0;
  border: none;
  transition: all 0.2s;
  i {
    display: block;
    background-image: -webkit-image-set(url("~@/assets/image/error@2x.png") 2x);
    padding: 0 0 0 18px;
    font-size: 14px;
    line-height: 18px;
    height: 18px;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    margin-right:10px; 
  }
  span {
    display: block;
    color: #ff5b5b;
    margin-left: 20px;
  }
}
</style>