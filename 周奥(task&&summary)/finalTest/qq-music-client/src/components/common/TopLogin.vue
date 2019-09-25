<template>
  <div class="login-dialog">
    <div class="d-header">
      <h2 class="h-title">
        <a href="javascript:void(0)"
           class="h-qq h-login">QQ登录</a>
        <a href="javascript:void(0)"
           class="h-wechat h-login">微信登录</a>
      </h2>
      <a href="javascript:void(0)"
         class="h-close"
         @mousedown="closeDialog()"><i></i></a>
    </div>
    <div class="d-content">
      <div class="d-content-q">
        <div class="qq-login">
          <div class="qq-title">
            <h2>账号密码登录</h2>
            <p>推荐使用<a href="javascript:void(0)">快速安全登录</a>,防止盗号。</p>
            <WarnMsg :msg="loginWarn"
                     v-show="loginWS"
                     class="war"></WarnMsg>
          </div>
          <div class="qq-content">
            <!--账号-->
            <div class="i-mail"
                 id="i-mail">
              <label class="i-tips"
                     id="ui-tips"
                     style="display: block;"
                     ref="mInfo">支持QQ号/邮箱/手机号登录</label>
              <div class="i-wrapper">
                <input type="text"
                       class="i-input"
                       id="userMail"
                       name="userMail"
                       value=""
                       tabindex="1"
                       ref="userMail"
                       @input="lableVisible('userMail')"
                       v-model="userMail">
                <a class="i-del"
                   id="i-del"
                   href="#"
                   @click="cleanInput()"
                   ref="mDel"
                   style="visibility:hidden"></a></div>
            </div>
            <!--密码-->
            <div class="i-psw"
                 id="i-psw">
              <label class="i-tips"
                     id="ui-tips"
                     style="display: block;"
                     ref="pInfo">密码</label>
              <div class="i-wrapper">
                <input type="password"
                       class="i-input"
                       id="userPsw"
                       name="userPsw"
                       value=""
                       tabindex="1"
                       ref="userPsw"
                       @input="lableVisible('userPsw')"
                       v-model="userPsw">
              </div>
            </div>
            <!--登录按钮-->
            <div class="submit">
              <a class="login_button"
                 href="#">
                <input type="button"
                       tabindex="6"
                       value="授权并登录"
                       class="btn"
                       id="login_button"
                       @click="login">
              </a>
            </div>
          </div>
          <div class="qq-footer">
            <a href="javascript:void(0)"
               class="link">忘了密码?</a>
            <span class="dotted">|</span>
            <a href="http://localhost:8080/login"
               class="link">注册新账号</a>
            <span class="dotted">|</span>
            <a href="javascript:void(0)"
               class="link">意见反馈</a>
          </div>
        </div>
        <div class="qq-info">
          <div class="page_accredit combine_page_children float_left">
            <div class="lay_main"
                 id="lay_main">
              <div class="lay_accredit_con">
                <p class="cnt_wording"></p>
                <p class="app_site_wording"><a class="accredit_site"
                     id="accredit_site_link"
                     href="#"
                     target="_blank">QQ音乐</a>将获得以下权限：</p>
                <div class="accredit_info"
                     id="accredit_info">
                  <ul class="accredit_info_op">
                    <li class="select_all_li">
                      <input type="checkbox"
                             id="select_all"
                             class="checkbox oauth_checkbox_all"
                             hidefocus="true"
                             checked="checked">
                      <label class="oauth_item_title"
                             for="select_all">全选</label>
                    </li>
                    <div class="clear"></div>
                    <li>
                      <input name="api_choose"
                             hidefocus="true"
                             type="checkbox"
                             class="checkbox oauth_checkbox"
                             id="item_80901010"
                             value="80901010"
                             title="默认授权 不可更改"
                             checked=""
                             disabled="">
                      <label for="item_80901010"
                             class="oauth_item_title">获得您的昵称、头像、性别</label>
                    </li>

                  </ul>
                </div>
                <div class="oauth_tips_div">
                  <p class="oauth_tips">授权后表明你已同意 <a href="javascript:void(0)"
                       target="_blank">QQ登录服务协议</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="d-footer">
      <a href="javascript:void(0)"
         class="download">下载客户端 体验更多内容</a>
    </div>
  </div>
</template>

<script>
import WarnMsg from '@/components/common/WarnMsg'
export default {
  data () {
    return {
      userMail: '',
      userPsw: '',
      loginWarn:'登陆失败',
      loginWS:false,
    }
  },
  components: {
    WarnMsg,
  },
  methods: {
    async login () {
      const userMail = this.userMail;
      const userPsw = this.userPsw;
      const url = `http://www.ljhhhx.com:8080/Test01/Login?userMail=${userMail}&userPsw=${userPsw}`;

      const self = this;

      this.axios.post(url).then(s => {
        const status = s.data[0].status;
        if (status === false) {
          self.loginWS=true;
          console.log('登录失败')
        } else if (status === true) {
          self.loginWS=false;
          console.log('登录成功')
          self.closeDialog();
          alert('登陆成功')
        }
      }).catch(f => {
        alert('登陆失败')
      })

    },
    closeDialog () {
      this.$emit('loginDialog', false)
    },
    cleanInput () {
      this.$refs.userMail.value = '';
      this.$refs.mInfo.style.visibility = 'visible';
    },
    lableVisible (choise) {
      let mInfo = this.$refs.mInfo.style;
      let pInfo = this.$refs.pInfo.style;
      let mDel = this.$refs.mDel.style;
      let mInput = this.$refs.userMail.value;
      let pInput = this.$refs.userPsw.value;
      if (choise === 'userMail' && mInput !== '') {
        mInfo.visibility = 'hidden';
        mDel.visibility = 'visible';
      } else if (choise === 'userMail' && mInput === '') {
        mInfo.visibility = 'visible';
        mDel.visibility = 'hidden';
      } else if (choise === 'userPsw' && pInput !== '') {
        pInfo.visibility = 'hidden';

      } else if (choise === 'userPsw' && pInput === '') {
        pInfo.visibility = 'visible';
      }

    }
  }
}
</script>

<style lang="scss" scoped>
.login-dialog {
  position: fixed;
  z-index: 100000;
  top: calc(50% - 243px);
  left: calc(50% - 350px);
  margin: 10px;
  width: 700px;
  height: 487px;
  overflow: hidden;
  border: 1px solid #bfbfbf;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  font-size: 14px;
  color: #333;
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
  input[type="checkbox"] {
    background-color: initial;
    cursor: default;
    -webkit-appearance: checkbox;
    box-sizing: border-box;
    margin: 3px 3px 3px 4px;
    padding: initial;
    border: initial;
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
  .d-header {
    position: relative;
    line-height: 54px;
    height: 54px;
    text-align: center;
    margin-top: -15px;
    border-bottom: 1px solid #f2f2f2;
    .h-title {
      .h-login {
        margin: 0 60px;
        cursor: pointer;
        text-decoration: none;
        color: #000;
        font-size: 16px;
        font-weight: 400;
        &.h-qq {
          color: #37c480;
        }
      }
    }
    .h-close {
      position: absolute;
      top: 6px;
      right: 6px;
      width: 24px;
      height: 24px;
      width: 50px;
      height: 50px;
      overflow: hidden;
      z-index: 2;
      i {
        display: block;
        margin: 6px auto;
        width: 12px;
        height: 12px;
        background-position: 0px -200px;
        background-image: -webkit-image-set(
          url("~@/assets/image/icon_popup@2x.png") 2x
        );
        cursor: pointer;
        &:hover {
          background-position: -14px -200px;
        }
      }
    }
  }
  .d-content {
    position: relative;
    overflow: hidden;
    height: 348px;
    .d-content-q {
      max-width: 688px;
      width: 688px;
      margin: 5px auto 0 auto;
      background-color: #fff;
      color: #555;
      height: 100%;
      font-family: "Microsoft Yahei", Tahoma, sans-serif;
      line-height: 1.333;
      font-size: 12px;
      overflow: auto;
      .qq-login {
        height: 322px;
        border: 0px;
        background-color: #ffffff;
        margin: 0 auto;
        position: relative;
        float: left;
        margin: 3px 20px 0px 30px;
        width: 370px;
        border-right: 1px dotted rgb(226, 226, 226);
        padding-right: 30px;
        .qq-title {
          position: relative;
          margin: 0 auto 36px;
          z-index: 11;
          font-size: 16px;
          color: #666;
          text-align: center;
          h2 {
            font-size: 20px;
            color: #333;
            margin-bottom: 16px;
          }
          p {
            font-size: 16px;
            color: #666;
            text-align: center;
            a {
              text-decoration: none;
              color: #3481cf;
            }
          }
        }
        .qq-content {
          width: 272px;
          margin: 0 auto;
          .i-mail {
            height: 55px;
            position: relative;
            z-index: 10;
            .i-tips {
              position: absolute;
              top: 13px;
              left: 13px;
              font-size: 14px;
              line-height: 16px;
              color: #aaa;
              cursor: text;
            }
            .i-wrapper {
              width: 272px;
              height: 42px;
              background: url("~@/assets/image/icon_3_tiny.png") -1px -1px
                no-repeat;
              .i-input {
                width: 258px;
                position: relative;
                top: 2px;
                left: 2px;
                height: 18px;
                padding: 10px 0 10px 10px;
                line-height: 18px;
                border: none;
                background: 0 0;
                color: #333;
                font-family: Verdana, Tahoma, Arial;
                font-size: 16px;
              }
              .i-del {
                width: 21px;
                height: 21px;
                cursor: pointer;
                position: absolute;
                right: 15px;
                top: 10px;
                background: url("~@/assets/image/icon_3_tiny.png") -116px -160px
                  no-repeat;
                &:hover {
                  background-position: -139px -160px;
                }
              }
            }
          }
          .i-psw {
            height: 55px;
            position: relative;
            z-index: 10;
            .i-tips {
              position: absolute;
              top: 13px;
              left: 13px;
              font-size: 14px;
              line-height: 16px;
              color: #aaa;
              cursor: text;
            }
            .i-wrapper {
              width: 272px;
              height: 42px;
              background: url("~@/assets/image/icon_3_tiny.png") -1px -1px
                no-repeat;
              .i-input {
                width: 258px;
                position: relative;
                top: 2px;
                left: 2px;
                height: 18px;
                padding: 10px 0 10px 10px;
                line-height: 18px;
                border: none;
                background: 0 0;
                color: #333;
                font-family: Verdana, Tahoma, Arial;
                font-size: 16px;
              }
              .i-del {
                width: 21px;
                height: 21px;
                cursor: pointer;
                position: absolute;
                right: 15px;
                top: 10px;
                background: url("~@/assets/image/icon_3_tiny.png") -116px -160px
                  no-repeat;
                &:hover {
                  background-position: -139px -160px;
                }
              }
            }
          }
          .submit {
            position: relative;
            height: 40px;
            background-color: #86ce2f;
            .login_button {
              position: absolute;
              left: 0;
              outline: 0;
              width: 100%;
              .btn {
                width: 100%;
                height: 40px;
                line-height: 35px;
                border: none;
                font-size: 17px;
                font-weight: 400;
                font-family: "Microsoft Yahei", "微软雅黑", SimHei, "黑体",
                  "Hiragino Sans GB", STHeiTi, sans-serif;
                color: #fff;
                background: 0 0;
                cursor: pointer;
                text-align: center;
              }
            }
          }
        }
        .qq-footer {
          height: 16px;
          margin-bottom: 8px;
          width: 100%;
          position: absolute;
          bottom: 0;
          right: 40px;
          text-align: right;
          font-size: 12px;
          font-size: 12px;
          .link {
            color: #666;
          }
          a:hover {
            text-decoration: underline;
          }
          .dotted {
            color: #bfbfbf;
            margin: 0 5px;
          }
        }
      }
      .qq-info {
        border-left: 1px dotted rgb(226, 226, 226);
        div,
        ul {
          margin: 0px;
          padding: 0px;
        }

        .page_accredit {
          width: 227px;
          &::before {
            content: ".";
            display: block;
            height: 0px;
            visibility: hidden;
          }
          &::after {
            clear: both;
            content: ".";
            display: block;
            height: 0px;
            visibility: hidden;
          }
          .lay_main {
            margin-left: 27px;
            width: 100% !important;
            margin: 0px;
            .lay_accredit_con {
              margin-top: 22px;
              .cnt_wording {
                margin-bottom: 16px;
              }
              .app_site_wording {
                padding-top: 12px;
                border-top: 1px dotted rgb(226, 226, 226);
                a {
                  color: rgb(81, 183, 236);
                }
                .accredit_site {
                  margin-right: 5px;
                }
              }
              .accredit_info {
                margin-top: 12px;
                transition-property: height;
                transition-duration: 0.5s;
                overflow: hidden;
                .accredit_info_op {
                  .clear {
                    clear: both;
                  }

                  li {
                    height: 31px;
                    color: rgb(102, 102, 102);
                    border-width: 1px;
                    border-style: initial;
                    border-color: initial;
                    border-image: initial;
                    list-style: none;

                    .oauth_checkbox_all,
                    .oauth_checkbox {
                      display: block;
                      float: left;
                      height: 100%;
                      width: 13px;
                    }
                    .oauth_item_title {
                      display: block;
                      float: left;
                      height: 100%;
                      line-height: 31px;
                      margin-left: 10px;
                    }
                  }
                  .select_all_li {
                    border-top: 1px dotted rgb(226, 226, 226) !important;
                    border-bottom: 1px dotted rgb(226, 226, 226) !important;
                  }
                }
              }
              .oauth_tips_div {
                margin-top: 30px;
                .oauth_tips {
                  margin-top: 10px;
                  a {
                    color: rgb(81, 183, 236);
                  }
                }
              }
            }
          }
        }
        .float_left {
          float: left;
        }
      }
    }
  }
  .d-footer {
    // padding: 0px 0 24px;
    overflow: hidden;
    text-align: center;
    font-size: 14px;
    color: #333;
    .download {
      display: inline-block;
      padding: 0 30px;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      color: #fff;
      border-radius: 20px;
      background-color: #31c27c;
      background-image: linear-gradient(to right, #24ccaa, #31c27c);
    }
  }
}
</style>