<template>
  <div>
    <ComTitle :title="title" imgUrl="statics/img/icon/publications.png" />
    <div v-if="publications.length > 0">
      <Tabs :value="0">
        <TabPane
          v-for="(item, index) in publications"
          :key="index"
          :label="item.title"
          :name="index.toString()"
          class="tab-pane"
        >
          <div class="tab-pane-body">
            <div class="books" v-if="item.books">
              <ComBook
                class="com-book"
                v-for="(book, index) in item.books"
                :key="index"
                :name="book.name"
                :imgUrl="book.imgUrl"
                :pagination="book.pagination"
                :detail="book.detail"
                :sign="book.sign"
                :url="book.url"
              />
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
    publications: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style lang="scss" scoped>
.ivu-tabs-tab {
  font-size: 1.3rem !important;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
}
.tab-pane {
  .tab-pane-body {
    background-color: #ffffff;
    .com-book {
      float: left;
    }
    .com-book:nth-child(even) {
      margin: 0 1.5rem;
    }
  }
}
</style>