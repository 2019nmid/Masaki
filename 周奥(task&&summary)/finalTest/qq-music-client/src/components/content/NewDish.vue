<template>
  <div id="ND"
      
      >
    <div class="ND-content">
      <div class="ndc-title">
        <h2>
          <i></i>
        </h2>
      </div>
      <div class="ndc-nav">
        <a href="javascript:void(0)"
           v-for="(item,index) in newDish.nav"
           :key="item.title"
           ref="nda_color"
           @click="switchPage(index)">{{item.title}}</a>
      </div>
      <div class="ndc-content">

        <div class="ndc-box"
             >
          <ul v-for="(item,index) in snapData"
              :key="index">
            <li v-for="(li,index) in item"
                :key="index">
              <div class="b-content">
                <div class="nd-cover">
                  <a href="javascript:void(0)">
                    <img :src=li.box_img
                         alt="">
                    <videoBtn></videoBtn>
                  </a>
                </div>
                <h4>
                  <span>
                    <a href="javascript:void(0)">{{li.box_title}}</a>
                  </span>
                </h4>
                <div class="nd-author">
                  <a href="javascript:void(0)">{{li.box_author}}</a>
                </div>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { newDish } from '@/request/configUrl'
import videoBtn from '@/components/common/videoBtn'
export default {
  data () {
    return {
      newDish: '',
      snapData: '',
    }
  },
  components:{videoBtn,},
  methods: {
    async getData (url) {
      const self = this;
      await this.axios.get(url).then(body => {
        self.newDish = body.data;
      });
      await this.getSnapData();
    },

    getSnapData () {
      this.snapData = this.newDish.page_list.page1_list
    },
    changeColor (index) {
      let nv_a_ele = document.querySelector(`.ndc-nav :nth-child(${index + 1})`);
      const aList = this.$refs.nda_color
      aList.forEach(e => {
        e.style.color = '#000';
      });
      nv_a_ele.style.color = '#31C27C';
    },
    switchPage (index) {
      let ft = `this.snapData=this.newDish.page_list.page${index + 1}_list`
      this.changeColor(index);
      switch (index) {
        case 0:
          eval(ft)
          this.getListLength()
          break;
        case 1:
          eval(ft)
          this.getListLength()
          break;
        case 2:
          eval(ft)
          this.getListLength()
          break;
        case 3:
          eval(ft)
          this.getListLength()
          break;
        case 4:
          eval(ft)
          this.getListLength()
          break;
        case 5:
          eval(ft)
          this.getListLength()
          break;

        default:
          break;
      }
    },
  },
  mounted () {
    this.getData(newDish);
  }
}
</script>

<style lang="scss" scoped>
#ND {
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
  .ND-content {
    z-index: 2;
    overflow: hidden;
    max-width: 1200px;
    position: relative;
    .ndc-title {
      // margin: 0 auto;
      position: relative;
      padding-top: 4.16667%;
      padding-bottom: 2%;
      h2 {
        background-position: 0 -150px;
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
    .ndc-nav {
      height: 50px;
      text-align: center;
      :nth-child(1) {
        color: #31c27c;
      }
      a {
        color: #333;
        display: inline-block;
        font-size: 15px;
        margin: 0 24px;
      }
    }
    .ndc-content {
      margin-bottom: -5px;
      margin-right: -20px;
      overflow: hidden;
      .ndc-box {
        // left: -100%;
        position: relative;
        font-size: 0;
        width: 1250%;
        transition-property: left;
        transition-duration: 0.7s;
        ul {
          display: inline-block;
          width: 8%;
          margin-right: 0;
          li {
            width: 20%;
            padding-bottom: 25px;
            display: inline-block;
            width: 20%;
            padding-bottom: 44px;
            overflow: hidden;
            font-size: 14px;
            vertical-align: top;
            .b-content {
              position: relative;
              margin-right: 20px;
              .nd-cover {
                visibility: visible;
                position: relative;
                display: block;
                overflow: hidden;
                padding-top: 100%;
                margin-bottom: 15px;
                zoom: 1;
                a {
                  cursor: pointer;
                  visibility: visible;
                  img {
                    display: block;
                    visibility: visible;
                    height: 100%;
                    object-fit: cover;
                    transform: scale(1) translateZ(0);
                    transition: transform 0.75s;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    border: 0 none;
                  }
                }
              }
              h4 {
                font-size: 100%;
                display: block;
                // margin-block-start: 1.33em;
                // margin-block-end: 1.33em;
                // margin-inline-start: 0px;
                // margin-inline-end: 0px;
                font-weight: bold;
                overflow: hidden;
              font-size: 100%;
                span {
                  white-space: normal;
                  float: left;
                  max-width: 100%;
                  font-weight: 400;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  line-height: 22px;
                  max-height: 44px;
                  font-size: 100%;
                  a {
                    color: #000;
                    text-decoration: none;
                    cursor: pointer;
                    white-space: normal;
                    font-weight: 400;
                    line-height: 22px;
                  }
                }
              }
              .nd-author {
                color: #999;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                height: 22px;
                font-size: 14px;
                a {
                  color: #999;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  height: 22px;
                  cursor: pointer;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>