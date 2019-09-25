import point from '@/';
<template>
  <div class="point">
    <a href="javascript:void(0)"
       ref="aList"
       v-for="(item,index) in pageNum"
       :key="index"><i @click="pageChange(index)"></i></a>
  </div>
</template>

<script>
export default {
  props: ['pageNum', 'pageHilight'],
  data () {
    return {
      pColor: 'rgb(0,0,0,0.1)',
    }
  },
  methods: {
    pageChange (index) {
      const pLocation = parseInt(`-${index + 1}00`)
      this.$emit('pl', pLocation)
    },
    changeColor (x) {
      console.log('test:'+x)
      let aItem = document.querySelector(`.point :nth-child(${x})`);
      console.log(aItem)
      const aList = this.$refs.aList
      aList.forEach(e => {
        e.children[0].style.cssText = 'background-color: rgba(0,0,0,.1);';
      });
      aItem.children[0].style.cssText = 'background-color: rgba(0,0,0,.3);';
    }
  },
  watch: {
    pageHilight (val) {
      let x = parseInt(-val / 100)
      this.changeColor(x)
      console.log(x)
    }
  }
}
</script>

<style lang="scss" scoped>
.point {
  width: 100%;
  text-align: center;
  font-size: 0;
  a {
    display: inline-block;
    width: 28px;
    height: 12px;
    padding: 0 0 26px;
    margin: 0 1px;
    background: 0 0;
    i {
      background-color: rgba(0, 0, 0, 0.3);
      display: block;
      width: 8px;
      height: 8px;
      border-radius: 12px;
      margin: 0 auto;
    }
  }
}
</style>