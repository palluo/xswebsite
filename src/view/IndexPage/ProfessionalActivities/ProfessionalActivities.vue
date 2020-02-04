<template>
  <div class="professionals-activities">
    <ComTitle :title="title" imgUrl="statics/img/icon/professional.png" />
    <div>
      <ComProfessionals
        class="com-professionals"
        v-for="(item, index) in activities"
        :key="index"
        :title="item.title"
        :imgUrl="item.imgUrl"
        :address="item.address"
        :time="item.time"
      />
      <div class="journals-plan" v-if="journals">
        <div class="title">{{journals.title}}</div>
        <ComJournal
          class="com-journal"
          v-for="(list, index) in journals.list"
          :key="index"
          :title="list.title"
          :imgUrl="list.imgUrl"
        />
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
    activities: {
      type: Array,
      default: () => []
    },
    journals: {
      type: Object,
      default: () => null
    }
  }
};
</script>
<style lang="scss" scoped>
.professionals-activities {
  .com-professionals {
    float: left;
  }
  .com-professionals:nth-child(2) {
    margin: 0 1.5rem;
  }
  .com-professionals:nth-child(4) {
    margin-top: 1.5rem;
  }
  .journals-plan {
    margin: 1.5rem 0 0 0;
    width: 100%;
    height: 25.8rem;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(242, 242, 242, 1);
    float: left;
    .title {
      margin: 2.1rem 0 0 1.37rem;
      width: 100%;
      height: 2.1rem;
      font-size: 1.5rem;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
      line-height: 2.1rem;
    }
    .com-journal {
      margin: 2.1rem 0 0 1.37rem;
    }
  }
}
</style>