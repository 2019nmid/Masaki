<template>
  <div class="cover"
       @mouseenter="styleChange(true)"
       @mouseleave="styleChange(false)">
    <i class="dark"
       ref="dark"></i>
    <i class="btn"
       ref="btn"></i>
  </div>

</template>

<script>
export default {
  methods: {
    styleChange (status) {
      let dark = this.$refs.dark.style;
      let btn = this.$refs.btn.style;
      if (status === true) {
        dark.opacity = 0.2;
        btn.cssText = `opacity:1;transform:scale(1)`;
      } else if (status === false) {
        dark.opacity = 0;
        btn.cssText = `opacity:0;transform:scale(0.7)`;
      }

    }
  }
}
</script>

<style lang="scss" scoped>
.cover {
  .dark {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0;
    filter: alpha(opacity=0);
    -webkit-transition: opacity 0.5s;
    transition: opacity 0.5s;
   
  }
  .btn {
    background-image: -webkit-image-set(
      url("~@/assets/image/cover_play@2x.png") 2x
    );
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -35px;
    width: 70px;
    height: 70px;
    filter: alpha(opacity=0);
    opacity: 0;
    -webkit-transform: scale(0.7) translateZ(0);
    -webkit-transition-property: opacity, -webkit-transform;
    -webkit-transition-duration: 0.5s;
    transform: scale(0.7) translateZ(0);
    transition-property: opacity, transform;
    transition-duration: 0.5s;
    zoom: 1;
     cursor: pointer;
  }
}
</style>