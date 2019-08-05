<template>
  <section>
    <div class="s">
      <div class="item" v-for="v in 9" :key="v" @click="clickitem(v)">{{v}}</div>
    </div>
  </section>
</template>

<script>
export default {
    data(){
        return {}
    },
    methods: {
        clickitem(param){
            this.$emit("jggitem",param)
        }
    }
}
</script>


<style scoped>
.s {
  overflow: hidden;
  width: 306px;
  background: #ccc;
}
div.item {
  width: 100px;
  height: 100px;
  line-height: 100px;
  float: left;
  border: 1px solid #000;
}
</style>

