<template>
  <div class="hello">
    <picture-input
    style="width:100%;height:100vw;margin:0;"
    @change="onChange()"
    accept="image/jpeg,image/png"
    :customStrings="{
        tap: '',
        upload: '<h1>Bummer!</h1>',
        drag: 'Drag a ???? GIF or GTFO',
        change: 'CCCCC'
      }"
    ></picture-input>
  </div>
</template>
<script>
import PictureInput from 'vue-picture-input'

export default {
  name: 'Upload',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    PictureInput
  },
  methods: {
    onChange () {
      console.log('Picture changed!')
    }
  }
}
</script>
<style lang="scss" scoped>
.hello{
    margin: 0;
    padding:0;
}
</style>
