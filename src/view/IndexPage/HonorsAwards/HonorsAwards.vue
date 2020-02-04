<template>
  <div class="honors-awards">
    <ComTitle :title="title" imgUrl="statics/img/icon/honors.png" />
    <div>
      <ComHonor
        class="com-honors"
        v-for="(item, index) in honors"
        :key="index"
        :time="item.time"
        :year="item.year"
        :title="item.title"
        :subTitle="item.subTitle"
        :school="item.school"
        :schoolLogo="item.schoolLogo"
        :backgroundLogo="item.backgroundLogo"
      />
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
    honors: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style lang="scss" scoped>
.honors-awards {
  .com-honors {
    float: left;
  }
  .com-honors:nth-child(2) {
    margin: 0 1.5rem;
  }
  .com-honors:nth-child(5) {
    margin: 0 1.5rem;
  }
  .com-honors:nth-child(4),
  .com-honors:nth-child(5),
  .com-honors:nth-child(6) {
    margin-top: 1.5rem;
  }
}
</style>