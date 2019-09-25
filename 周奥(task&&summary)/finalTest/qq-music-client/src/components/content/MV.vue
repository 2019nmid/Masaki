<template>
  <div id="MV"
       @mouseover="btnShow(false)"
       @mouseleave="btnShow(true)">
    <div class="MV-content">
      <div class="m-title">
        <h2>
          <i></i>
        </h2>
      </div>
      <div class="m-nav">
        <a href="javascript:void(0)"
           v-for="(item,index) in mv.nav"
           :key="item.title"
           ref="ma_color"
           @click="switchPage(index)">{{item.title}}</a>
      </div>
      <div class="m-content">
        <div class="m-box"
             :style="{left:ulLocation+'%'}">
          <ul v-for="(item,index) in snapData"
              :key="index">
            <li v-for="(li,index) in item"
                :key="index">
              <div class="b-content">
                <a href="javascript:void(0)"
                   class="img">
                  <img :src=li.box_img
                       alt="">
                  <videoBtn></videoBtn>
                </a>

                <h3><a href="javascript:void(0)"
                     class="title">{{li.box_title}}</a></h3>
                <p><a href="javascript:void(0)"
                     class="author">{{li.box_author}}</a></p>
                <div class="watch">
                  <span>
                    <i></i>
                    {{li.box_watch}}
                  </span>

                </div>
                <div class="time">{{li.box_time}}</div>
              </div>
            </li>
          </ul>
        </div>

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
import { mv } from '@/request/configUrl'
import point from '@/components/common/point'
import btn from '@/components/common/btn'
import videoBtn from '@/components/common/videoBtn'
export default {
  data () {
    return {
      mv: '',
      snapData: '',
      btnS: true,
      pageNum: 4,
      ulLocation: -100,
      pageHilight: this.ulLocation,
    }
  },
  components: {
    btn,
    point,
    videoBtn
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
        self.mv = body.data;
      });
      await this.getSnapData();
    },

    getListLength () {
      this.ulLocation = -100;
      this.pageNum = 4
    },
    getSnapData () {
      this.snapData = this.mv.page_list.page1_list
    },
    changeColor (index) {
      let nv_a_ele = document.querySelector(`.m-nav :nth-child(${index + 1})`);
      const aList = this.$refs.ma_color
      aList.forEach(e => {
        e.style.color = '#000';
      });
      nv_a_ele.style.color = '#31C27C';
    },
    switchPage (index) {
      let ft = `this.snapData=this.mv.page_list.page${index + 1}_list`
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
    btnShow (status) {
      this.btnS = status;
    },
  },
  mounted () {
    this.getData(mv);
  }
}
</script>

<style lang="scss" scoped>
#MV {
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
  }
  h3 {
    display: block;
    font-size: 1.17em;
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
  .MV-content {
    z-index: 2;
    overflow: hidden;
    max-width: 1200px;
    position: relative;
    .m-title {
      // margin: 0 auto;
      position: relative;
      padding-top: 4.16667%;
      padding-bottom: 2%;
      h2 {
        background-position: 0 -250px;
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
    .m-nav {
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
    .m-content {
      margin-bottom: -5px;
      margin-right: -20px;
      overflow: hidden;
      .m-box {
        position: relative;
        font-size: 0;
        width: 1250%;
        transition-property: left;
        transition-duration: 0.7s;
        ul {
          display: inline-block;
          width: 8%;
          margin-right: 0;
          font-size: 14px;
          zoom: 1;
          li {
            width: 20%;
            padding-bottom: 25px;
            float: left;
            overflow: hidden;
            .b-content {
              visibility: visible;
              position: relative;
              margin-right: 20px;
              .img {
                position: relative;
                display: block;
                overflow: hidden;
                padding-top: 56.5476%;
                margin-bottom: 15px;

                img {
                  position: absolute;
                  top: 0;
                  left: 0;
                  display: block;
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  -webkit-transform: scale(1) translateZ(0);
                  -webkit-transition: -webkit-transform 0.75s;
                  transform: scale(1) translateZ(0);
                  transition: transform 0.75s;
                  object-fit: cover;
                  border: 0 none;
                }
              }

              h3 {
                font-size: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-weight: 400;
                .title {
                  color: #000;
                  cursor: pointer;
                }
              }
              p {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: #999;
                .author {
                  white-space: nowrap;
                  color: #999;
                }
              }
              .watch {
                color: #999;
                line-height: 18px;
                height: 20px;
                font-size: 14px;
                span {
                  margin-right: 10px;
                  color: #999;
                  line-height: 18px;
                  font-size: 14px;
                  i {
                    display: inline-block;
                    width: 19px;
                    height: 12px;
                    background-position: -180px -20px;
                    margin-right: 5px;
                    vertical-align: -1px;
                    background-image: -webkit-image-set(
                      url("~@/assets/image/icon_sprite@2x.png") 2x
                    );
                  }
                }
              }

              .time {
                position: absolute;
                right: 0;
                bottom: 0;
                line-height: 86px;
                color: #999;
              }
            }
          }
        }
      }
    }
  }
}
</style>