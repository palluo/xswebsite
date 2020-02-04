<template>
  <div class="other-plan">
    <ComTitle :title="title" imgUrl="statics/img/icon/others.png" />
    <div class="hobbies" v-if="hobbies">
      <div class="title">
        <span class="icon iconfont iconhobbies"></span>
        <span>{{hobbies.title}}</span>
      </div>
      <div>
        <ComHobbie
          class="com-hobbie"
          v-for="(hobbie, index) in hobbies.list"
          :key="index"
          :title="hobbie.title"
          :imgUrl="hobbie.imgUrl"
          :passion="hobbie.passion"
        />
      </div>
    </div>
    <div class="expritise" v-if="expritise">
      <div class="title">
        <span class="icon iconfont iconexpritise"></span>
        <span>{{expritise.title}}</span>
      </div>
      <div class="debates">
        <div class="debates-title">
          <span class="icon iconfont icondebates" />
          <span>{{expritise.debates.title}}</span>
          <div class="debates-text" v-for="(item, index) in expritise.debates.list" :key="index">
            <div class="text">
              <span>.</span>
              {{item.text}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: Object,
      default: () => null
    },
    hobbies: {
      type: Object,
      default: () => null
    },
    expritise: {
      type: Object,
      default: () => null
    }
  }
};
</script>
<style lang="scss" scoped>
.other-plan {
  font-family: PingFangSC-Medium, PingFang SC;
  .hobbies {
    width: 100%;
    height: 15.1rem;
    border: 1px solid rgba(239, 239, 239, 1);
    padding: 1.25rem;
    .title {
      width: 5.56rem;
      height: 1.6rem;
      font-size: 1.3rem;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
      height: 1.6rem;
      .iconhobbies {
        font-size: 1.2rem;
        color: #1296db;
        margin-right: 1rem;
      }
    }
    .com-hobbie {
      float: left;
      margin-left: 2rem;
      margin-top: 2rem;
    }
    .com-hobbie:nth-child(1) {
      margin-left: 0rem;
    }
  }
  .expritise {
    display: none;
    margin-top: 2.6rem;
    width: 100%;
    height: 15.1rem;
    border: 1px solid rgba(239, 239, 239, 1);
    padding: 1.25rem;
    .title {
      width: 5.56rem;
      height: 1.6rem;
      font-size: 1.3rem;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
      height: 1.6rem;
      .iconexpritise {
        font-size: 1.2rem;
        color: #1296db;
        margin-right: 1rem;
      }
    }
    .debates {
      margin-top: 2.3rem;
      .debates-title {
        height: 2rem;
        font-size: 1.5rem;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.85);
        line-height: 2rem;
        .icondebates {
          font-size: 1.5rem;
          margin-right: 1rem;
          color: #1296db;
        }
        .debates-text {
          margin-top: 1.75rem;
          .text {
            height: 1.68rem;
            font-size: 1.2rem;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.65);
            line-height: 1.68rem;
            margin-left: 2.1rem;
          }
        }
      }
    }
  }
}
</style>