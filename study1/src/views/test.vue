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
