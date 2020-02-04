<template>
  <div class="journal-plan">
    <div class="img-plan">
      <img :src="imgUrl" />
    </div>
    <div class="title">{{title}}</div>
  </div>
</template>
<script>
export default {
  props: {
    imgUrl: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss" scoped>
.journal-plan {
  width: 11.1rem;
  height: 6.75rem;
  background: rgba(255, 255, 255, 1);
  font-family: PingFangSC-Medium, PingFang SC;
  float: left;
  cursor: pointer;
  .img-plan {
    width: 5.12rem;
    height: 100%;
    float: left;
    img {
      width: 100%;
      height: 100%;
      border-radius: 0.5rem;
    }
  }
  .title {
    height: 100%;
    width: calc(100% - 5.12rem);
    font-size: 0.7rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.85);
    line-height: 1.18rem;
    float: left;
    padding: 0.43rem 0 0 0.625rem;
  }
}
</style>
