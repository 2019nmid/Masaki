<template>
  <div class="q-header">
    <TopNav class="top-nav"></TopNav>
    <PageNav class="page-nav"></PageNav>
  </div>

</template>

<script>
import TopNav from '@/components/header/topNav/TopNav'
import PageNav from '@/components/header/pageNav/PageNav'
export default {
  components: {
    TopNav,
    PageNav
  }
}
</script>

<style lang="scss">
.q-header {
  // position: absolute;
  // overflow-x: hidden;
  // position: relative;
  max-width: 1200px;
  // border: 1px solid red;
  .top-nav {
    position: relative;
    display: block;
    height: 90px;
    // overflow-x: hidden;
  }
  .page-nav {
    position: relative;
    display: block;
    margin: 0 auto;
    // overflow: hidden;
  }
}
</style>