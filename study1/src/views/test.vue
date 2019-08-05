<template>
  <section>
    <div>xxxxxxxx: {{timu}}</div>
    <br />
    <jgg @jggitem="selectItem"></jgg>
    <br />xx:
    <input type="text" v-model="snap" />
    <button @click="back">&lt;-回退</button>

    <br />
    <div>
      <select name id>
        <option value="1">2</option>
      </select>
    </div>
    // 盒子模型，文档流
    // div img p iframe input
    // tr td
    // ul li
    // ol li
    // h1 h2 h3 ~~ h6
    // *html5 的新标签
    // 初学这些就行
    // css选择器 ，三种定位方式， 浮动，清除浮动,*弹性布局
  </section>
</template>

<script>
import jgg from "@/components/jgg";
export default {
  name: "test",
  components: {
    jgg: jgg
  },
  data() {
    return {
      timu: "2134",
      snap: ""
    };
  },
  watch: {
    snap(curVal, oldVal) {
      if (curVal.length == this.timu.length) {
        alert(this.timu == curVal ? "正确" : "错误");
      }
    }
  },
  methods: {
    createdtimu() {
      var arr = [];
    },
    selectItem(item) {
      this.snap += item;
    },
    back() {
      this.snap = this.snap.substring(0, this.snap.length - 1);
    }
  }
};
</script>
