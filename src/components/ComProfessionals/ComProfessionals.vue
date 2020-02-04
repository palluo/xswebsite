<template>
  <div class="professionals-plan">
    <div class="title">{{title}}</div>
    <div class="img-plan">
      <img :src="imgUrl" />
    </div>
    <div class="address">
      <span class="icon iconfont icondidian" />
      {{address}}
    </div>
    <div class="time">
      <span class="icon iconfont icondate" />
      {{time}}
    </div>
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
    },
    address: {
      type: String,
      default: ""
    },
    time: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss" scoped>
.professionals-plan {
  width: 25rem;
  height: 25.8rem;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(242, 242, 242, 1);
  padding: 2rem 1.37rem;
  font-family: PingFangSC-Medium, PingFang SC;
  cursor: pointer;
  .img-plan {
    width: 22.3rem;
    height: 10rem;
    img {
      width: 100%;
      height: 100%;
      border-radius: 0.5rem;
    }
  }
  .title {
    width: 100%;
    height: 4.18rem;
    font-size: 1.5rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.85);
    line-height: 2rem;
  }
  .address {
    width: 100%;
    font-size: 1.1rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.65);
    line-height: 1.68rem;
    margin-top: 1rem;
  }
  .time {
    width: 100%;
    font-size: 1.1rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.65);
    line-height: 1.68rem;
    margin-top: 1rem;
  }
}
</style>
