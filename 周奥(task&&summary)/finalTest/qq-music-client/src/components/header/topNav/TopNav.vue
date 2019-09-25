<template>
  <div class="top-nav">
    <h1 class="nav-logo"><a href="javascript:void(0)">
        <img src="../../../assets/image/logo.png"
             alt="">
      </a></h1>
    <TopFunction class="nav-function"></TopFunction>
    <TopSearch class="nav-search"></TopSearch>
    <TopUserF class="nav-userF"></TopUserF>

  </div>

</template>

<script>
import TopFunction from '@/components/common/TopFunction';
import TopSearch from '@/components/common/TopSearch';
import TopUserF from '@/components/common/TopUserF';

export default {
  components: {
    TopFunction,
    TopSearch,
    TopUserF,
  }
}
</script>

<style lang="scss" scoped>
.top-nav {
  position: relative;
  // border: 1px solid red;
  width: 100%;
  h1,
  div,
  p {
    margin: 0;
    padding: 0;
    display: block;
  }
  .nav-logo {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    img {
      width: 170px;
      height: 46px;
      cursor: pointer;
    }
  }
  .nav-function {
    position: absolute;
    left: 198px;
    top: 0;
    // border: 1px solid red;
  }
  .nav-search {
    position: absolute;
    top: 0;
    left: 700px;
    // right: 284px;
  }
  .nav-userF {
    position: absolute;
    top: 0;
    left: 930px;
  }
}
</style>