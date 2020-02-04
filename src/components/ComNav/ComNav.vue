<template>
  <div class="nav-header">
    <div class="nav-title">
      <a :href="`#` + this.title">{{ this.title }}</a>
    </div>
    <div class="nav-plan">
      <div class="nav-item" v-for="(item, index) in list" :key="index">
        <a :href="`#` + item.anchor">{{ item.title }}</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "系统标题"
    },
    list: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style lang="scss" scoped>
.nav-header {
  width: 78.3rem;
  height: 5.37rem;
  a {
    color: #000000;
  }
  .nav-title {
    width: 28.3rem;
    float: left;
    font-size: 2rem;
    margin-top: 2.68rem;
    color: $hTitleFC;
  }
  .nav-plan {
    width: 50rem;
    margin-top: 2.68rem;
    float: right;
    font-size: 1.15rem;
    .nav-item {
      text-align: right;
      float: right;
      margin-left: 2.1rem;
      cursor: pointer;
      height: 2.81rem;
      text-align: center;
    }
    .nav-item:last-child {
      float: right;
      margin-right: 0px;
      text-align: center;
    }
    .nav-item:hover {
      border-bottom: 3px solid $color2790EE;
    }
  }
}
</style>
