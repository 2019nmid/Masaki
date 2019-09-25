<template>
  <div id="SR"
       @mouseover="btnShow(false)"
       @mouseleave="btnShow(true)">
    <div class="SR-content">
      <div class="c-title">
        <h2>
          <i></i>
        </h2>
      </div>
      <div class="c-nav">
        <a href="javascript:void(0)"
           v-for="(item,index) in songRecommend.nav"
           :key="item.title"
           ref="a_color"
           @click="switchPage(index)">{{item.title}}</a>
      </div>
      <div class="c-content">
        <ul :style="{left:ulLocation+'%'}">
          <li v-for="(item,index) in snapData"
              :key="index">
            <div class="li-box">
              <div class="b-cover">
                <a href="javascript:void(0)">
                  <img :src=item.box_img
                       alt="item.box_title">
                  <videoBtn></videoBtn>
                </a>
              </div>
              <h4 class="b-title">
                <span><a href="javascript:void(0)">{{item.box_title}}</a></span>
              </h4>
              <div class="b-play">{{item.box_watch}}</div>
            </div>
          </li>
        </ul>
      </div>
      <point :pageNum='pageNum' :pageHilight='ulLocation' @pl="pointLocation"></point>
    </div>
    <btn :btnS="btnS"
         @lx="changeLocation"></btn>
  </div>
</template>

<script>
import { songRecommend } from '@/request/configUrl'
import point from '@/components/common/point'
import btn from '@/components/common/btn'
import videoBtn from '@/components/common/videoBtn'
export default {
  data () {
    return {
      songRecommend: '',
      snapData: '',
      btnS: true,
      pageNum: 4,
      ulLocation: -100,
      pageHilight:this.ulLocation,
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
    pointLocation(x){
      console.log(x)
    this.ulLocation=x
    },
    async getData (url) {
      const self = this;
      await this.axios.get(url).then(body => {
        self.songRecommend = body.data;
      });
      await this.getSnapData();
      if (this.snapData.length === 30) {
        this.pageNum = 4
      } else if (this.snapData.length === 20) {
        this.pageNum = 2
      }
    },

    getListLength () {
      this.ulLocation=-100;
      if (this.snapData.length === 30) {
        this.pageNum = 4
      } else if (this.snapData.length === 20) {
        this.pageNum = 2
      }
    },
    getSnapData () {
      this.snapData = this.songRecommend.page_list.page1_list
    },
    changeColor (index) {
      let nv_a_ele = document.querySelector(`.c-nav :nth-child(${index + 1})`);
      const aList = this.$refs.a_color
      aList.forEach(e => {
        e.style.color = '#000';
      });
      nv_a_ele.style.color = '#31C27C';
    },
    switchPage (index) {
      let ft = `this.snapData=this.songRecommend.page_list.page${index + 1}_list`
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
    this.getData(songRecommend);
  }
}
</script>

<style lang="scss" scoped>
#SR {
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
    blockquote, body, button, dd, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, hr, html, input, lengend, li, ol, p, pre, td, textarea, th, ul {
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
  .SR-content {
    z-index: 2;
    overflow: hidden;
    max-width: 1200px;
    position: relative;
    .c-title {
      // margin: 0 auto;
      position: relative;
      padding-top: 4.16667%;
      padding-bottom: 2%;
      h2 {
        background-position: 0 0;
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
    .c-nav {
      height: 50px;
      text-align: center;
      :nth-child(1){
        color: #31C27C;
      }
      a {
        color: #333;
        display: inline-block;
        font-size: 15px;
        margin: 0 24px;
      }
    }
    .c-content {
      margin-right: -20px;
      overflow: hidden;
      margin-bottom: 20px;
      font-size: 0;
      ul {
        // left: -103%;
        margin-right: -20px;
        position: relative;
        font-size: 0;
        width: 1250%;
        transition-property: left;
        transition-duration: 0.7s;
        li {
          position: relative;
          width: 1.6%;
          padding-bottom: 0;
          display: inline-block;
          // width: 20%;
          padding-bottom: 44px;
          overflow: hidden;
          font-size: 14px;
          vertical-align: top;
          .li-box {
            position: relative;
            top: 0;
            left: 0;
            right: 0;
            margin-right: 20px;
            .b-cover {
              position: relative;
              display: block;
              overflow: hidden;
              padding-top: 100%;
              margin-bottom: 15px;
              zoom: 1;

              a {
                img {
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
            .b-title {
              // height: 22px;
              overflow: hidden;
              font-size: 100%;
              span {
                white-space: normal;
                float: left;
                max-width: 100%;
                font-weight: 400;
                overflow: hidden;
                text-overflow: ellipsis;
                height: 22px;
                line-height: 22px;
                max-height: 44px;
                font-size: 100%;
                a {
                  color: #000;
                  white-space: normal;
                  width: 100%;
                  // height: 22px;
                  // overflow: hidden;
                  // text-overflow: ellipsis;
                }
              }
            }
            .b-play {
              color: #999;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              height: 22px;
            }
          }
        }
      }
    }
  }
}
</style>