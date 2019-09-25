<template>
  <div id="AR"
       @mouseover="btnShow(false)"
       @mouseleave="btnShow(true)">
    <div class="AR-content">
      <div class="ac-title">
        <h2>
          <i></i>
        </h2>
      </div>
      <div class="ac-content">
        <ul :style="{left:ulLocation+'%'}">
          <li v-for="(item,index) in snapData"
              :key="index">
            <a href="javascrript:void(0)">
              <img :src=item.box_img
                   alt="">
            </a>
          </li>
        </ul>

      </div>
      <point :pageNum='pageNum'
             :pageHilight='ulLocation'
             @pl="pointLocation"></point>
    </div>
    <btn :btnS="btnS"
         @lx="changeLocation"></btn>
  </div>
</template>

<script>
import { awesomeRecommend } from '@/request/configUrl'
import point from '@/components/common/point'
import btn from '@/components/common/btn'
export default {
  data () {
    return {
      awesomeRecommend: '',
      snapData: '',
      btnS: true,
      pageNum: 3,
      ulLocation: -100,
      pageHilight: this.ulLocation,
    }
  },
  components: {
    btn,
    point,
  },
  methods: {
    changeLocation (x) {
      const length = parseInt(`-${this.pageNum}00`);
      if (x === 'pre') {
        const snapX = this.ulLocation;
        if (snapX === -100) {
          this.ulLocation = length
        }
        if (snapX >= length && snapX !== -100) {
          this.ulLocation = snapX + 100
        }

      } else if (x === 'next') {
        const snapX = this.ulLocation;
        if (snapX === length) {
          this.ulLocation = -100
        }
        if (snapX <= -100 && snapX !== length) {
          this.ulLocation = snapX - 100
        }
      }
    },
    pointLocation (x) {
      console.log(x)
      this.ulLocation = x
    },
    async getData (url) {
      const self = this;
      await this.axios.get(url).then(body => {
        self.awesomeRecommend = body.data;
      });
      await this.getSnapData();
    },

    getListLength () {
      this.ulLocation = -100;
      this.pageNum = 3
    },
    getSnapData () {
      this.snapData = this.awesomeRecommend.page_list
    },
    btnShow (status) {
      this.btnS = status;
    },
  },
  mounted () {
    this.getData(awesomeRecommend);
  }
}
</script>

<style lang="scss" scoped>
#AR {
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
  blockquote,
  body,
  button,
  dd,
  dl,
  dt,
  fieldset,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  html,
  input,
  lengend,
  li,
  ol,
  p,
  pre,
  td,
  textarea,
  th,
  ul {
    margin: 0;
    padding: 0;
  }
  div,
  a {
    margin: 0;
    padding: 0;
    display: block;
  }
  a {
    text-decoration: none;
  }
  button,
  input {
    margin: 0;
    padding: 0;
    color: #000;
    background-color: #fff;
    font-size: 14px;
    line-height: 1.5;
    font-family: poppin, Tahoma, Arial, \5fae\8f6f\96c5\9ed1, sans-serif;
    font-family: Tahoma, Arial, \5fae\8f6f\96c5\9ed1, sans-serif/9;
  }
  input {
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: initial;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    -webkit-appearance: textfield;
    background-color: white;
    -webkit-rtl-ordering: logical;
    cursor: text;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 0px;
    border-width: 2px;
    border-style: inset;
    border-color: initial;
    border-image: initial;
    outline: none;
  }
  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
  button {
    -webkit-appearance: button;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: buttontext;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    cursor: default;
    background-color: buttonface;
    box-sizing: border-box;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 6px;
    border-width: 2px;
    border-style: outset;
    border-color: buttonface;
    border-image: initial;
  }
  li {
    list-style: none;
  }

  background: url("~@/assets/image/bg_detail.jpg") 50% 0 repeat-x;
  position: relative;
  display: flex;
  justify-content: center;
  .AR-content {
    z-index: 2;
    overflow: hidden;
    max-width: 1200px;
    position: relative;
    .ac-title {
      // margin: 0 auto;
      position: relative;
      padding-top: 4.16667%;
      padding-bottom: 2%;
      h2 {
        background-position: 0 -100px;
        display: block;
        margin: 0 auto;
        width: 196px;
        height: 40px;
        background-image: url("~@/assets/image/index_tit@2x.png");
        background-image: -webkit-image-set(
          url("~@/assets/image/index_tit@2x.png") 2x
        );
      }
    }
    .ac-content {
      margin-right: -20px;
      padding-bottom: 10px;
      overflow: hidden;
      margin-bottom: 20px;
      ul {
        left: -100%;
        position: relative;
        font-size: 0;
        width: 1250%;
        transition-property: left;
        transition-duration: 0.7s;
        li {
          display: inline-block;
          width: 4%;
          box-sizing: border-box;
          padding-right: 20px;
          a {
            position: relative;
            display: block;
            width: 100%;
            // padding-top: 40%;
            img {
              object-fit: cover;
              position: relative;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              border: 0 none;
            }
          }
        }
      }
    }
  }
}
</style>