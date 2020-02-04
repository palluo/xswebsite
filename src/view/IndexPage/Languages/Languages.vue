<template>
  <div class="languages-plan">
    <ComTitle :title="title" imgUrl="statics/img/icon/languages.png" />
    <div>
      <ComLanguage
        v-for="(item, index) in languages"
        class="com-languages"
        :key="index"
        :title="item.title"
        :subTitle="item.subTitle"
        :imgUrl="item.imgUrl"
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
    languages: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style lang="scss" scoped>
.languages-plan {
  .com-languages {
    float: left;
  }
  .com-languages:nth-child(2),
  .com-languages:nth-child(3),
  .com-languages:nth-child(4) {
    margin-left: 1.7rem;
  }
}
</style>