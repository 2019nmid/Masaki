<template>
<div class="body">
  <TopNav class="top"></TopNav>
  <MyArea class="content"></MyArea>
  <TopLogin class="login"></TopLogin>
  <Footer class="footer"></Footer>
</div>
</template>

<script>
import TopNav from '@/components/header/topNav/TopNav'
import TopLogin from '@/components/common/TopLogin';
import Footer from '@/components/footer/Footer';
import MyArea from './MyArea'
export default {
components:{
TopNav,
TopLogin,
Footer,
MyArea
}
}
</script>

<style lang="scss" scoped>
.body{

  .top{

  }
  .content{

  }
  .login{

  }
  .footer{
    
  }
}
</style>