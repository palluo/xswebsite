<template>
  <div class="com-honor-plan" :style="'background-image:url('+backgroundLogo+')'">
    <div class="top">
      <img class="schoolLogo" :src="schoolLogo" />
      <div class="time">{{time}}</div>
    </div>
    <div class="subTitle">{{subTitle}}</div>
    <div class="title">{{title}}</div>
    <div class="year">{{year}}</div>
    <div class="school">{{school}}</div>
  </div>
</template>
<script>
export default {
  props: {
    time: {
      type: String,
      default: ""
    },
    year: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    },
    school: {
      type: String,
      default: ""
    },
    schoolLogo: {
      type: String,
      default: ""
    },
    backgroundLogo: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss" scoped>
.com-honor-plan {
  width: 25rem;
  height: 20rem;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(242, 242, 242, 1);
  font-family: PingFangSC-Medium, PingFang SC;
  padding: 1.37rem;
  background-repeat: no-repeat;
  background-position: bottom right;
  cursor: pointer;
  .top {
    width: 100%;
    height: 2.68rem;
    .schoolLogo {
      float: left;
      width: 2.68rem;
      height: 2.68rem;
      border-radius: 50%;
    }
    .time {
      float: right;
      font-size: 1.18rem;
      font-weight: 400;
      color: rgba(0, 0, 0, 1);
    }
  }

  .subTitle {
    font-size: 1rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    margin-top: 2.3rem;
  }
  .title {
    font-size: 1.5rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 1);
    margin-top: 1.37rem;
  }
  .year {
    font-size: 1.5rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 1);
    margin-top: 1.37rem;
  }
  .school {
    font-size: 1.18rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    margin-top: 3.5rem;
  }
}
</style>
