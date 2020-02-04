<template>
  <div class="language-plan">
    <div class="language-img-plan">
      <div class="language-img-div">
        <img :src="imgUrl" />
      </div>
    </div>
    <div class="language-title">
      <div class="title">{{title}}</div>
      <div class="subTitle">{{subTitle}}</div>
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
    subTitle: {
      type: String,
      default: ""
    },
    imgUrl: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss" scoped>
.language-plan {
  width: 18.3rem;
  height: 9.3rem;
  border: 1px solid rgba(239, 239, 239, 1);
  padding-top: 1.25rem;
  font-family: PingFangSC-Medium, PingFang SC;
  .language-img-plan {
    float: left;
    width: 5.31rem;
    height: 100%;
    text-align: center;
    .language-img-div {
      margin: 0 auto;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      border: 1px solid rgba(239, 239, 239, 1);
      overflow: hidden;
    }
    img {
      width: 4.5rem;
      height: 3rem;
    }
  }
  .language-title {
    float: left;
    width: calc(100% - 5.31rem);
    .title {
      margin: 0.5rem 0;
      height: 29px;
      font-size: 21px;
      font-weight: 500;
      color: rgba(4, 4, 4, 1);
      line-height: 29px;
    }
    .subTitle {
      font-size: 19px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.65);
      line-height: 27px;
    }
  }
}
</style>