<template>
  <light-timeline :items='items'>
    <!-- <template slot='tag' slot-scope='{ item }'>
      {{item.tag}}
    </template> -->
    <!-- <template slot='symbol' slot-scope='{ item }'>
        <i :class="item.class"></i>
    </template> -->
    <template slot='content' slot-scope='{ item }' v-html='item.content' class="box_img"></template>
  </light-timeline>
</template>
<script>
import Vue from 'vue'
import LightTimeline from 'vue-light-timeline'
import axios from 'axios'
// import { exists } from 'fs'
// import { Exif, ExifImage } from '../../public/exif-js-master/exif.js'
// import EXIF from 'exif-js'

Vue.use(LightTimeline)
export default {
  data () {
    return {
      cExif: '',
      icolor: ['orange', 'purple', 'yellow', 'red', 'blue', 'green', 'pink', 'black', 'gray', '#dcdcdc'],
      items: []
    }
  },
  mounted () {
    axios.get('/JSON/Photo.json').then(res => {
      var cFile = res.data.data
      cFile.forEach(element => {
        var r = Math.floor((Math.random() * 5) + 1)
        var a = {}
        a.type = 'star' // stat | circle
        a.tag = element.tag
        a.content = '<div class="box_img">' + element.content + '<img src="' + element.img + '"/></div>'
        a.htmlMode = true
        a.color = this.icolor[r]
        a.class = '' // custom icon settings
        this.items.push(a)
      })
    })
  }
}
</script>
<style lang="scss">
.item-point{
    box-sizing: border-box;
    position: absolute;
    margin-left: -7px;
    width: 16px;
    height: 16px;
    border-radius: 10px;
    background: orange;
}
.box_img{
    margin: 0;
    padding: 0;
    img{
        width: 40vw;
        height: 30vw;
        border: 6px solid white;
        box-shadow: 1px 1px 5px #333333;
        object-fit: cover;
        display: block;
    }
}
li:nth-of-type(odd){
    img{
        transform: rotate(-5deg);
    }
}
li:nth-of-type(even){
    img{
        transform: rotate(3deg);
    }
}
</style>
