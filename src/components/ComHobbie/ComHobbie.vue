<template>
  <div class="com-hobbie-plan">
    <div class="img-div">
      <img :src="imgUrl" />
    </div>

    <div class="title">{{title}}</div>
    <Slider class="slider" v-model="passion"></Slider>
    <diV>
      {{passion}}
      <span>%passion</span>
    </diV>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    imgUrl: {
      type: String,
      default: ""
    },
    passion: {
      type: Number,
      default: 50
    }
  }
};
</script>
<style lang="scss" scoped>
.com-hobbie-plan {
  width: 13.3rem;
  height: 7.6rem;
  font-family: PingFangSC-Medium, PingFang SC;
  cursor: pointer;
  .img-div {
    height: 3rem;
  }
  .slider {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
  }
}
</style>
