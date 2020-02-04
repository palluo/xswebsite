<template>
  <div class="book-plan" @click="bookClick">
    <div class="book-img-plan">
      <img :src="imgUrl" />
      <div class="book-detail">
        <div class="name">{{name}}</div>
        <div class="pagination">{{pagination}}</div>
        <div class="detail">{{detail}}</div>
        <div class="sign">{{sign}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: ""
    },
    imgUrl: {
      type: String,
      default: ""
    },
    pagination: {
      type: String,
      default: ""
    },
    detail: {
      type: String,
      default: ""
    },
    sign: {
      type: String,
      default: ""
    },
    url: {
      type: String,
      default: ""
    }
  },
  methods: {
    bookClick() {
      if (this.url.length > 0) window.open(this.url);
    }
  }
};
</script>
<style lang="scss" scoped>
.book-plan {
  width: 25rem;
  height: 40rem;
  background: white;
  border: 1px solid #f2f2f2;
  cursor: pointer;
  .book-img-plan {
    width: 22.25rem;
    height: 28.8rem;
    img {
      margin-left: 1.375rem;
      position: absolute;
      width: 22.25rem;
      height: 28.8rem;
    }
  }
  .book-detail {
    position: absolute;
    width: 23rem;
    height: 19rem;
    margin-left: 1rem;
    font-family: PingFangSC-Medium, PingFang SC;
    margin-top: 20rem;
    background-color: #fff;
    .name {
      font-size: 1.18rem;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
      line-height: 2rem;
    }
    .pagination {
      font-size: 1.18rem;
      font-weight: 400;
      color: rgba(114, 114, 114, 1);
      line-height: 32px;
    }
    .detail {
      font-size: 1.5rem;
      font-weight: 500;
      color: rgba(0, 0, 0, 1);
      line-height: 33px;
    }
    .sign {
      font-size: 1.18rem;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.45);
      line-height: 32px;
    }
  }
}
</style>
