<template>
  <div class="com-skills-plan">
    <div class="top">
      <span class="icon iconfont iconshujufenxi"></span>
      <span class="title">{{ title }}</span>
    </div>
    <div class="skills">
      <div v-for="(item, index) in list" :key="index" class="skills-item">
        <img :src="item.imgUrl" />
        <div class="text">{{ item.text }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    list: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style lang="scss" scoped>
.com-skills-plan {
  width: 21.8rem;
  height: 11rem;
  font-family: PingFangSC-Medium, PingFang SC;
  background-repeat: no-repeat;
  background-position: bottom right;
  cursor: pointer;
  .top {
    width: 100%;
    height: 1.81rem;
    font-size: 1.3rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.65);
    line-height: 1.81rem;
    .iconshujufenxi {
      color: #1296db;
      margin-right: 0.5rem;
    }
  }
  .skills {
    margin-top: 1.68rem;
    .skills-item {
      float: left;
      .text {
        margin-top: 1rem;
        text-align: center;
        font-size: 1.3rem;
        font-weight: 500;
        color: rgba(0, 0, 0, 1);
      }
    }
    .skills-item:nth-child(2) {
      margin: 0 1.68rem;
    }
  }
}
</style>
