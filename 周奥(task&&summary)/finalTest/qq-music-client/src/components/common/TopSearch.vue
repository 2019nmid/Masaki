<template>
  <div class="top-search"
       @mouseleave="showExtend(false),showInput(false)">
    <!--搜索按钮-->
    <div class="search-area">
      <input type="text"
             name="searchText"
             id="searchText"
             class="search-text"
             placeholder="搜索音乐、MV、歌单、用户"
             label="请输入搜索内容"
             @mousedown="showExtend(true)">
      <button class="search-button"
              @mouseover="showInput(true)">
        <i class="search-icon"></i>
        <!-- <span class="icon-text">搜索</span> -->
      </button>
    </div>
    <!--搜索扩展-->
    <div class="search-extend">
      <div class="search-data">
        <div class="search-hot">
          <a v-for="(item,index) in hotkey.slice(0,5)"
             :key="item.k"
             class="hot-item">
            <span class="item-num">{{item.number}}</span>
            <span class="item-title">{{item.name}}</span>
            <span class="item-hot">{{item.listen}}</span>
          </a>
        </div>
        <div class="search-history">
          <div class="search-info">
            搜索历史
          </div>
          <a href="javascript:void(0)"><i class="history-icon"></i></a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// import { hotkey } from '@/request/api'
import { hotkey } from '@/request/configUrl'
export default {
  data () {
    return {
      hotkey: ''
    }
  },
  methods: {
    getData (url) {
      const self = this;
      this.axios.get(url).then(body => {
        self.hotkey = body.data;
      })
    },
    showInput (status) {
      let searchText = document.querySelector('.search-text');
      let searchButton = document.querySelector('.search-icon');
      let screenWidth = document.body.clientWidth;

      if (status === true && screenWidth <= 1124) {
        searchButton.style.cssText = `margin-right:3px;
        -webkit-transition: margin-right 0.2s ease-out;
        transition: margin-right 0.2s ease-out;`;
        searchText.style.cssText = ` width: 174px;
        visibility: visible;
        -webkit-transition: width 0.6s ease-out, visibility 0.6s 1ms ease-out;
        transition: width 0.6s ease-out, visibility 0.6s 1ms ease-out;`;
      } else if (status === false && screenWidth <= 1124) {
        searchButton.style.cssText = `margin-right:0px;
        -webkit-transition: margin-right 0.2s ease-out;
        transition: margin-right 0.2s ease-out;`;
        searchText.style.cssText = ` width: 0px;
        visibility: hidden;
        -webkit-transition: width 0.6s ease-out, visibility 0.6s 1ms ease-out;
        transition: width 0.6s ease-out, visibility 0.6s 1ms ease-out;`;
      }
    },
    showExtend (status) {
      let searchExtend = document.querySelector('.search-data');
      if (status === true) {
        searchExtend.style.cssText = ` max-height: 800px;visibility: visible;
        -webkit-transition: max-height 0.6s ease-out, visibility 0.6s 1ms ease-out;
        transition: max-height 0.6s ease-out, visibility 0.6s 1ms ease-out;`
      } else if (status === false) {
        searchExtend.style.cssText = ` max-height: 0px;visibility: hidden;-webkit-transition: max-height 0.6s ease-out, visibility 0.6s 1ms ease-out;
      transition: max-height 0.6s ease-out, visibility 0.6s 1ms ease-out;`
      }
    },
  },
  mounted () {
    this.getData(hotkey)
  }

}
</script>

<style lang="scss" scoped>
.top-search {
  // position: absolute;
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
    display: block;
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
  .search-area {
    padding-left: 3px;
    border: 1px solid #c9c9c9;
    padding: 0 33px 0 6px;
    line-height: 36px;
    height: 36px;
    margin-top: 26px;
    position: relative;
    border-radius: 3px;
    background-color: #fff;
    -webkit-transition: width 0.6s ease-out;
    transition: width 0.6s ease-out;

    .search-text {
      width: 174px;
      visibility: visible;
      height: 36px;
      border: 0 none;
      font-size: 14px;
      background: 0 0;
      -webkit-transition: width 0.6s ease-out, visibility 0.6s 1ms ease-out;
      transition: width 0.6s ease-out, visibility 0.6s 1ms ease-out;
    }
    // @media (max-width: 1124px) {
    //   .search-text {
    //     width: 0;
    //     visibility: hidden;
    //   }
    // }
    .search-button {
      position: absolute;
      top: 0;
      right: 0;
      border: 0 none;
      width: 38px;
      height: 35px;
      overflow: visible;
      background: 0 0;
      cursor: pointer;
      .search-icon {
        position: absolute;
        top: 50%;
        right: 11px;
        margin-top: -8px;
        width: 16px;
        height: 16px;
        background-position: 0 -40px;

        background-image: -webkit-image-set(
          url("~@/assets/image/icon_sprite@2x.png") 2x
        );
        &:hover {
          background-position: 0 -60px;
        }
      }
    }
  }
  .search-extend {
    // position: absolute;
    .search-data {
      // visibility: visible;
      visibility: hidden;
      // max-height: 800px;
      transition: max-height 0.6s ease-out;
      border: 1px solid #c9c9c9;
      overflow: hidden;
      position: absolute;
      top: 63px;
      background: #fff;
      width: 213px;
      z-index: 8;
      text-align: left;
      font-size: 14px;
      line-height: 36px;
      .search-hot {
        padding: 5px 0;
        .hot-item {
          cursor: pointer;
          display: block;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          padding-left: 11px;
          padding-right: 11px;

          .item-num {
            cursor: pointer;
            color: #ff4222;
            float: left;
            width: 18px;
          }
          .item-title {
            cursor: pointer;
            color: #333;
            float: left;
            max-width: 140px;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .item-hot {
            cursor: pointer;
            color: #999;
            float: right;
            font-size: 12px;
          }
          &:hover {
            background-color: #31c27c;
          }
          &:hover * {
            color: #fff;
          }
        }
      }
      .search-history {
        padding: 5px 0;
        border-bottom: 1px solid #f2f2f2;
        .search-info {
          padding-left: 11px;
          color: #999;
          position: relative;
        }
        .history-icon {
          position: absolute;
          right: 11px;
          margin-top: -26px;
          width: 16px;
          height: 16px;
          background-position: -100px 0;
          background-image: -webkit-image-set(
            url("~@/assets/image/icon_sprite@2x.png") 2x
          );
          &:hover {
            background-position: -20px -60px;
          }
        }
      }
    }
  }
}
</style>