<template>
  <div id="app">
    <Header class="header"></Header>
    <SideBar></SideBar>
    <Content class="content"></Content>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '@/components/header/Header';
import SideBar from '@/components/common/SideBar';
import Content from '@/components/content/Content'
import Footer from '@/components/footer/Footer'
export default {
  components: {
    Header,
    SideBar,
    Content,
    Footer
  }
}
</script>
<style lang="scss">
#app {
  .header {
    margin: 0 auto;
  }
  .content{
    margin: 0 auto;
  }
}
</style>
