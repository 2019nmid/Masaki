<template>
  <ul class="page-nav">
    <li class="item"><a href="javascript:void(0)"
         class="link" style="color:#31c27c">首页</a></li>
    <li class="item"><a href="javascript:void(0)"
         class="link">歌手</a></li>
    <li class="item"><a href="javascript:void(0)"
         class="link">新碟</a></li>
    <li class="item"><a href="javascript:void(0)"
         class="link">排行榜</a></li>
    <li class="item"><a href="javascript:void(0)"
         class="link">分类歌单</a></li>
    <li class="item"><a href="javascript:void(0)"
         class="link">电台</a></li>
    <li class="item"><a href="javascript:void(0)"
         class="link">MV</a></li>
    <li class="item"><a href="javascript:void(0)"
         class="link">数字专辑</a></li>
    <li class="item"><a href="javascript:void(0)"
         class="link">票务</a></li>
  </ul>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.page-nav {
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
    color: #000;
    display: block;
  }
  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
  height: 51px;
  line-height: 51px;
  border-top: 1px solid #f2f2f2;
  padding-left: 230px;
  margin-right: -50px;
  .item {
    float: left;
    font-size: 15px;
    color: #c1c1c1;
    margin-right: 47px;
    list-style: none;
    &:hover {
      color: #31c27c;
    }
    .link {
      cursor: pointer;
      &:hover {
      color: #31c27c;
    }
    }
  }
}
</style>