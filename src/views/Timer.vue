<template>
  <div>
    <h1>Hello,my baby</h1>
    <h5>Since：{{beginDay}}</h5>
    <h3>It's been</h3>
    <h3><p>{{yearDiff}}</p> Years,</h3>
    <h3><p>{{monthDiff}}</p> Months,</h3>
    <h3><p>{{dayDiff}}</p>Days,</h3>
    <h3>and</h3>
    <h3><p>{{hourDiff}}:{{minuteDiff}}:{{secondDiff}}</p></h3>
    <h2>Today is the <p>{{bydays}}</p> days!</h2>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'Timer',
  data () {
    return {
      beginDay: '2019-12-04 10:37:00',
      yearDiff: 0,
      monthDiff: 0,
      dayDiff: 0,
      hourDiff: 0,
      minuteDiff: 0,
      secondDiff: 0,
      bydays: 0,
      moment: ''
    }
  },
  methods: {
    tdn (n) {
      // 补齐两位数
      if (n.toString().length < 2) {
        return '0' + n.toString()
      } else {
        return n
      }
    },
    // 这是一个获取数据
    getData () {
      this.bydays = moment().diff(moment(this.beginDay), 'days')
      this.yearDiff = moment().diff(moment(this.beginDay), 'years')
      this.monthDiff = moment().subtract(this.yearDiff, 'years')
      this.monthDiff = this.monthDiff.diff(moment(this.beginDay), 'months')
      this.dayDiff = moment().subtract(this.yearDiff, 'years')
      this.dayDiff = this.dayDiff.subtract(this.monthDiff, 'months')
      this.dayDiff = this.dayDiff.diff(moment(this.beginDay), 'days')
      this.hourDiff = moment().subtract(this.yearDiff, 'years')
      this.hourDiff = this.hourDiff.subtract(this.monthDiff, 'months')
      this.hourDiff = this.hourDiff.subtract(this.dayDiff, 'days')
      this.hourDiff = this.hourDiff.diff(moment(this.beginDay), 'hours')
      this.minuteDiff = moment().subtract(this.yearDiff, 'years')
      this.minuteDiff = this.minuteDiff.subtract(this.monthDiff, 'months')
      this.minuteDiff = this.minuteDiff.subtract(this.dayDiff, 'days')
      this.minuteDiff = this.minuteDiff.subtract(this.hourDiff, 'hours')
      this.minuteDiff = this.minuteDiff.diff(moment(this.beginDay), 'minutes')
      this.secondDiff = moment().subtract(this.yearDiff, 'years')
      this.secondDiff = this.secondDiff.subtract(this.monthDiff, 'months')
      this.secondDiff = this.secondDiff.subtract(this.dayDiff, 'days')
      this.secondDiff = this.secondDiff.subtract(this.hourDiff, 'hours')
      this.secondDiff = this.secondDiff.subtract(this.minuteDiff, 'minutes')
      this.secondDiff = this.secondDiff.diff(moment(this.beginDay), 'seconds')
      this.hourDiff = this.tdn(this.hourDiff)
      this.minuteDiff = this.tdn(this.minuteDiff)
      this.secondDiff = this.tdn(this.secondDiff)
      this.moment = moment.utc()
      return true
    },
    // 这是一个定时器
    timer () {
      return setInterval(() => {
        this.getData()
      }, 1000)
    }
  },
  created () {
    this.timer()
    // this.getData()
  },
  mounted () {
    // this.yearDiff = moment().diff(moment(this.beginDay), 'years')
    // this.monthDiff = moment().subtract(this.yearDiff, 'years').diff(moment(this.beginDay), 'months')
    // this.dayDiff = moment().subtract(this.yearDiff, 'years').subtract(this.monthDiff, 'months').diff(moment(this.beginDay), 'days')
    // this.hourDiff = moment().subtract(this.yearDiff, 'years').subtract(this.monthDiff, 'months').subtract(this.dayDiff, 'days').diff(moment(this.beginDay), 'hours')
    // this.minuteDiff = moment().subtract(this.yearDiff, 'years').subtract(this.monthDiff, 'months').subtract(this.dayDiff, 'days').subtract(this.hourDiff, 'minutes').diff(moment(this.beginDay), 'minutes')
  },
  watch: {
    list () {
      this.timer()
    }
  },
  destroyed () {
    // clearTimeout(this.timer)
    clearInterval(this.timer)
  }
}
</script>
<style lang="scss" scoped>
div{
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
h3{
  margin: 3px auto;
  padding: 0;
  min-width:125px;
  line-height: 150%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  p{
    margin: 0 5px 0 0;
    padding: 0 3px;
    min-width: 1.5em;
    display: flex;
    justify-content: flex-end;
    // border: 1px solid gray;
    border-radius: 3px;
    box-shadow: 0 0 2px rgba($color: #595959, $alpha: 0.3);
    background-color:lightseagreen;
    color:white;
  }
}
h2{
  margin: 8px auto;
  padding: 0;
  line-height: 150%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  p{
    margin: 0 5px 0 0;
    padding: 0 3px;
    min-width: 2em;
    display: flex;
    justify-content: flex-end;
    font-weight: 900;
    color: lightseagreen;
    text-shadow: 0 0 3px rgba($color: #595959, $alpha: 0.3);
  }
}
</style>
