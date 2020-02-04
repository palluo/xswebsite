<template>
  <div>
    <ComTitle :title="title" imgUrl="statics/img/icon/research.png" />
    <div v-if="researchs.length > 0">
      <Tabs :value="0">
        <TabPane
          v-for="(item, index) in researchs"
          :key="index"
          :label="item.title"
          :name="index.toString()"
          class="tab-pane"
        >
          <div class="tab-pane-body">
            <div class="describe">
              <span>{{item.title}}</span>
              <span>
                <span class="icon iconfont iconpublications"></span>
                Read for 10 {{item.time}}minutes
              </span>
            </div>
            <div class="sub-title">{{item.subTitle}}</div>
            <div class="detail" v-html="item.detail">
              {{item.detail}}
              <div>
                <!-- <div class="detail-ongoing">Ongoing</div> -->
              </div>
            </div>
          </div>
        </TabPane>
      </Tabs>
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
    researchs: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style lang="scss">
.ivu-tabs-tab {
  font-size: 1.3rem !important;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
}
</style>
<style lang="scss" scoped>
.tab-pane {
  .tab-pane-body {
    background-color: #ffffff;
    padding: 2.68rem 2rem;
  }
  .describe {
    color: rgba(0, 0, 0, 0.5);
    .iconpublications {
      margin: 0 0.5rem;
    }
  }
  .sub-title {
    font-size: 32px;
    font-family: PingFangSC-Medium, PingFang SC;
    color: #000;
    font-weight: 500;
    margin-top: 1.5rem;
  }
  .detail {
    font-size: 1.18rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.65);
    line-height: 1.81rem;
    margin-top: 2rem;
    .detail-ongoing {
      width: 5.25rem;
      height: 1.8rem;
      background: rgba(230, 247, 255, 1);
      border-radius: 15px;
      font-size: 1rem;
      color: rgba(24, 144, 255, 1);
      text-align: center;
      margin-top: 1rem;
    }
  }
}
</style>