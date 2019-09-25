<template>
  <div id="LB">
    <div class="LB-content">
      <div class="lc-title">
        <h2>
          <i></i>
        </h2>
      </div>
      <div class="lc-content">
        <ul class="lc-sul">
          <li class="lc-sl"
              v-for="(item,index) in snapData"
              :key="index">
            <div class="lc-box">
              <div class="lc-bg"></div>

          <li class="lc-line"></li>
          <h3><a href="javascript:void(0)">{{item.li_title}}</a></h3>
          <ul class="lc-ul">
            <li v-for="(li,index2) in item.item_song"
                :key="index2">
              <div class="num">{{index2+1}}</div>
              <div class="name"><a href="javascript:void(0)">{{li.box_title}}</a></div>
              <div class="author"><a href="javascript:void(0)">{{li.box_author}}</a></div>
            </li>
          </ul>
          <videoBtn></videoBtn>
      </div>
      </li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
import { leaderBoard } from '@/request/configUrl'
import videoBtn from '@/components/common/videoBtn'
export default {
  data () {
    return {
      LeaderBoard: '',
      snapData: '',
    }
  },
  components: {
    videoBtn
  },
  methods: {
    async getData (url) {
      const self = this;
      await this.axios.get(url).then(body => {
        self.LeaderBoard = body.data;
      });
      await this.getSnapData();
    },

    getSnapData () {
      this.snapData = this.LeaderBoard.page_list
    },


  },
  mounted () {
    this.getData(leaderBoard);
  }
}
</script>

<style lang="scss" scoped>
#LB {
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
  .LB-content {
    z-index: 2;
    overflow: hidden;
    max-width: 1200px;
    position: relative;
    width: 100%;
    .lc-title {
      // margin: 0 auto;
      position: relative;
      padding-top: 4.16667%;
      padding-bottom: 2%;
      h2 {
        background-position: 0 -200px;
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
    .lc-content {
      .lc-sul {
        font-size: 0;
        margin-right: -20px;
        .lc-sl {
          display: inline-block;
          z-index: 2;
          width: 20%;
          zoom: 1;
                  &:nth-child(1) .lc-bg {
          background-position: 0 0;
        }
        &:nth-child(2) .lc-bg {
          background-position: -224px 0;
        }
        &:nth-child(3) .lc-bg {
          background-position: -448px 0;
        }
        &:nth-child(4) .lc-bg {
          background-position: -672px 0;
        }
        &:nth-child(5) .lc-bg {
          background-position: -896px 0;
        }
          .lc-box {
            position: relative;
            margin-right: 20px;
            height: 500px;
            overflow: hidden;
            .lc-bg {
              transform: scale(1);
              transition: transform 0.75s;
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              height: 567px;
              background-image: url("~@/assets/image/bg_index_top.jpg");
            }
            .lc-line {
              position: absolute;
              left: 50%;
              top: 148px;
              margin-left: -18px;
              width: 36px;
              height: 2px;
              background: #fff;
              font-size: 0;
            }
            h3 {
              position: absolute;
              top: 50px;
              left: 50%;
              margin-left: -100px;
              width: 200px;
              text-align: center;
              font-size: 100%;
              a {
                height: 36px;
                line-height: 1;
                font-size: 26px;
                color: #fff;
                font-weight: 400;
              }
            }
            .lc-ul {
              color: #fff;
              font-size: 14px;
              position: absolute;
              top: 188px;
              left: 30px;
              right: 30px;
              white-space: nowrap;
              li {
                position: relative;
                padding-left: 15px;
                margin-bottom: 27px;
                .num {
                  position: absolute;
                  top: 0;
                  left: 0;
                  color: #fff;
                  font-size: 14px;
                  white-space: nowrap;
                }
                .name {
                  overflow: hidden;
                  text-overflow: ellipsis;
                  margin-bottom: 5px;
                  a {
                    color: #fff;
                    font-size: 14px;
                  }
                }
                .author {
                  overflow: hidden;
                  text-overflow: ellipsis;
                  a {
                    color: #fff;
                    font-size: 14px;
                  }
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