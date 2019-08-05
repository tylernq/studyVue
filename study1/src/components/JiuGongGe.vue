<template>
    <div class="loading">
  <span>1</span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
</template>


<script>
export default {
    name: "JiuGongGe",
    
}
</script>

<style>
body {
  margin: 0;
  height: 100vh; /*=100%*/
  display: flex; /*flex布局*/
  align-items: center; /*flex布局：垂直居中*/
  justify-content: center; /*flex布局：水平居中*/
  background-color: black;
}

.loading {
  width: 10em;
  height: 10em;
  display: grid; /*grid布局*/
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5em; /*grid 每个item之间的间距*/
}
</style>
