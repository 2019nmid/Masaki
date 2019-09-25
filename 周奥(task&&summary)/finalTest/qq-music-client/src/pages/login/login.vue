<template>
  <div id="login">
    <div class="main">
      <div class="bg"></div>
      <div class="re">
        <div class="title">欢迎注册QQ</div>
        <div class="title2">每一天,乐在沟通</div>
        <div class="u-n">
          <input type="text"
                 name="username"
                 id="username"
                 placeholder="昵称"
                 v-model="username">
        </div>
        <div class="u-m"><input type="text"
                 name="userMail"
                 id="userMail"
                 placeholder="注册邮箱"
                 v-model="userMail">
          <WarnMsg :msg="userMailW"
                   v-show="userMailR"
                   class="war"></WarnMsg>
        </div>
        <div class="u-p">
          <input type="password"
                 name="userPsw"
                 id="userPsw"
                 placeholder="密码"
                 v-model="userPsw">
          <WarnMsg :msg="userPswW"
                   v-show="userPswR"
                   class="war"></WarnMsg>
        </div>
        <div class="u-pc">
          <input type="password"
                 name="userPswc"
                 id="userPswc"
                 placeholder="确认密码"
                 v-model="userPswc">
          <WarnMsg :msg="userPswcW"
                   v-show="userPswcR"
                   class="war"></WarnMsg>
        </div>
        <div class="submit"
             @click="register">
          <div>立即注册</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WarnMsg from '@/components/common/WarnMsg'
export default {
  name: 'login',
  data () {
    return {
      userPswW: '密码应该大于8位哦',
      userPswcW: '第二次密码不对',
      userMailW: '请输入正确的邮箱格式',
      userPswR: false,
      userPswcR: false,
      userMailR: false,
      userPsw: '',
      userMail: '',
      userPswc: '',
      username: '',
      registerStatus: false,
    }
  },
  methods: {
    validateMail (email) {
      return new Promise((resolve, reject) => {
        let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        if (reg.test(email)) {
          resolve(true)
        } else {
          reject(false)
        }
      })
    },
    validatePsw (psw1, psw2) {
      return new Promise((resolve, reject) => {
        if (psw1 === psw2) {
          resolve(true)
        } else if (psw1 !== psw2) {
          reject(false)
        }
      })
    },
    validatePswL (psw) {
      return new Promise((resolve, reject) => {
        if (psw === null) return 0;
        if (typeof psw != "string") {
          psw += "";
        }
        const length=psw.replace(/[^\x00-\xff]/g, "ab").length;
        if(length>=8){
          resolve(true)
        }else{
          reject(false)
        }
      })
    },
    async register () {
      const username = this.username;
      const userMail = this.userMail;
      const userPsw = this.userPsw;
      const userPswc = this.userPswc;
      const url = `http://www.ljhhhx.com:8080/Test01/Regiter?username=${username}&userPsw=${userPsw}&userMail=${userMail}`;
      console.log(url)

      const self = this;
      await this.validateMail(userMail).then(s => {
        if (s === true) {
          this.userMailR = false;
          self.registerStatus = true;
        }
      }).catch(f => {
        if (f === false) {
          this.userMailR = true;
          self.registerStatus = false;
        }
      })

     await this.validatePswL(userPsw).then(s=>{
       console.log('>8')
       this.userPswR=false;
       this.registerStatus=true;
     }).catch(f=>{
       console.log('<8')
       this.userPswR=true;
       this.registerStatus=false;
     })

      await this.validatePsw(userPsw, userPswc).then(s => {
        this.userPswcR = false;
        self.registerStatus = true;
      }).catch(f => {
        this.userPswcR = true;
        self.registerStatus = false;
      })

      if (this.registerStatus === true) {
        this.axios.post(url).then(s => {
          const status = s.data[0].status
          if (status === false) {
            alert('注册失败')
            console.log('注册失败')
          } else if (status === true) {
            alert('注册成功')
            console.log('注册成功')
          }
        }).catch(f=>{
          alert('注册失败')
        })
      } else if (this.registerStatus === false) {
        console.log('请先通过验证')
      }

    }
  },
  components: {
    WarnMsg,
  }
}
</script>

<style lang="scss" scoped>
#login {
  .main {
    .bg {
      background-image: -webkit-image-set(url("~@/assets/image/login1.jpg") 2x);
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 480px;
      float: left;
      overflow: hidden;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
    .re {
      position: absolute;
      width: 480px;
      height: 600px;
      // border: 1px solid red;
      top: calc(50% - 300px);
      right: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .war {
        margin-top: 10px;
      }
      div {
        margin-bottom: 10px;
      }
      input {
        border: 1px #aaa solid;
        border-radius: 4px;
        background: 0 0;
        text-align: left;
        font-size: 20px;
        width: 438px;
        height: 50px;
        line-height: 50px;
        padding: 0 20px;
      }
      .title {
        font-size: 44px;
        margin-bottom: 20px;
        align-self: flex-start;
      }
      .title2 {
        font-size: 28px;
        margin-bottom: 64px;
        line-height: 1.2;
        color: #333;
        align-self: flex-start;
      }
      .u-n {
      }
      .u-m {
      }
      .u-p {
      }
      .u-pc {
      }
      .submit {
        border: 1px #3083ff solid;
        border-radius: 4px;
        background-color: #3487ff;
        box-shadow: 0 5px 8px 0 rgba(24, 95, 255, 0.1);
        width: 480px;
        height: 40px;
        margin: 40px 0 8px;
        // position: absolute;
        display: flex;
        justify-content: center;
        cursor: pointer;
        div {
          font-size: 18px;
          color: #fff;
          text-align: center;
          font-weight: lighter;
          vertical-align: middle;
          // border: 1px solid red;
          align-self: center;
        }
        &:hover {
          background-color: #3580eb;
        }
      }
    }
  }
}
</style>