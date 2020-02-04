<template>
  <div class="title" v-if="title">
    <div class="title-name-plan">
      <span>
        <img :style="{ width: '2.68rem' }" :src="imgUrl" />
      </span>
      <span class="title-name">{{title.name}}</span>
    </div>
    <div>
      <span class="title-time">{{title.time}}</span>
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
      type: Object,
      default: () => null
    }
  }
};
</script>
<style lang="scss" scoped>
.title {
  width: 100%;
  height: 7.68rem;
  .title-name-plan {
    display: flex;
    margin-top: 3.18rem;
    margin-bottom: 0.5rem;
  }
  .title-name {
    font-size: 2rem;
    height: 2.68rem;
    font-family: Arial-Black, Arial;
    font-weight: 900;
    color: rgba(0, 0, 0, 1);
    line-height: 2.68rem;
    margin-left: 1rem;
  }
  .title-time {
    margin-left: 3.68rem;
    color: rgba(0, 0, 0, 0.5);
  }
}
</style>