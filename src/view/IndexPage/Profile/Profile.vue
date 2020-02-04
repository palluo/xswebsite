/* eslint-disable vue/no-parsing-error */
<template>
  <div class="profile-plan" v-if="this.persion">
    <div class="profile-plan-persion">
      <div class="profile-plan-persion-top">
        <div class="profile-plan-persion-top-photo">
          <img :src="this.persion.imgurl" />
        </div>
        <div class="persion-name">{{persion.name}}</div>
        <div class="persion-profession">{{persion.profession}}</div>
        <div class="persion-school">
          <a :href="persion.school.url" target="_blank">{{persion.school.title}}</a>
        </div>
      </div>
      <div class="profile-plan-persion-bottom">
        <div v-for="(item, index) in detail" :key="index" class="profile-plan-persion-boottom-item">
          <span :class="item.icon" class="float-left"></span>
          <p
            class="float-left main-left-1rem persion-boottom-item-text"
            v-html="item.data"
          >{{item.data}}</p>
        </div>
        <div class="link">
          <img
            v-for="(link, index) in links"
            :key="index"
            @click="imgClick(link.link)"
            :src="link.imgUrl"
          />
        </div>
      </div>
    </div>
    <div class="profile-plan-introduce">
      <div class="introduce-brief">
        <div class="brief-title">
          {{brief.title}}
          <div class="brief-bottom-bar"></div>
        </div>
        <div class="brief-data" v-html='brief.data'>{{brief.data}}</div>
      </div>
      <div class="introduce-education">
        <div class="education-title">
          {{education.title}}
          <div class="brief-bottom-bar"></div>
        </div>
        <div class="education-data">
          <div v-for="(item, index) in education.data" :key="index">
            <div class="item">
              <!-- <div class="item-title">
                <div class="item-title-name">{{item.profession}}</div>
                <div class="item-title-time">Full Time</div>
              </div>
              <div class="item-school">
                <div class="item-school-name">{{item.school}}</div>
                <div class="item-school-address">{{item.address}}</div>
                <div class="item-school-time">{{item.time}}</div>
              </div>-->
              <Row>
                <Col span="20" class="profession">{{item.profession}}</Col>
                <Col span="4">
                  <div class="full-time">Full Time</div>
                </Col>
              </Row>
              <Row>
                <Col span="12">
                  <span class="icon iconfont iconxuexiao"></span>
                  {{item.school}}
                </Col>
                <Col span="8">
                  <span class="icon iconfont icondidian"></span>
                  {{item.address}}
                </Col>
                <Col span="4">
                  <span class="icon iconfont icondate"></span>
                  {{item.time}}
                </Col>
              </Row>
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
    persion: {
      type: Object,
      default: () => null
    },
    detail: {
      type: Array,
      default: () => []
    },
    brief: {
      type: Object,
      default: () => {}
    },
    education: {
      type: Object,
      default: () => {}
    },
    links: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    imgClick(url) {
      if (url) {
        window.open(url);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.profile-plan {
  width: 100%;
  height: 100%;
  .float-left {
    float: left;
  }
  .main-left-1rem {
    margin-left: 1rem;
  }
  .profile-plan-persion {
    width: 28.3rem;
    height: 100%;
    float: left;
    .profile-plan-persion-top {
      width: 100%;
      height: 28.56rem;
      .profile-plan-persion-top-photo {
        width: 100%;
        height: 15rem;
        display: flex;
        justify-content: center;
        img {
          width: 15rem;
          border-radius: 15rem;
        }
      }
      .persion-name {
        font-size: 2rem;
        margin: 2.43rem 0;
        margin-left: 2rem;
      }
      .persion-profession {
        font-size: 1.31rem;
        color: #807d80;
        margin-left: 2rem;
        margin-bottom: 1.62rem;
      }
      .persion-school {
        font-size: 1.31rem;
        color: #aeabae;
        margin-left: 2rem;
      }
    }
    .profile-plan-persion-bottom {
      padding-left: 2rem;
      width: 100%;
      height: calc(100% - 28.56rem);
      font-size: 1rem;
      .profile-plan-persion-boottom-item {
        width: 100%;
        height: 2.5rem;
        margin-top: 1.43rem;
        .persion-boottom-item-text {
          line-height: 1.5rem;
        }
      }
      .link {
        width: 100%;
        height: 2rem;
        margin-top: 3rem;
        cursor: pointer;
        img {
          width: 2rem;
          float: left;
          margin-left: 2rem;
        }
      }
    }
  }
  .profile-plan-introduce {
    width: calc(100% - 28.3rem);
    height: 100%;
    float: left;
    .introduce-brief {
      width: 100%;
      height: 34.3rem;
      .brief-title {
        width: 20.81rem;
        height: 2.68rem;
        font-size: 2rem;
        font-family: Arial-Black, Arial;
        font-weight: 900;
        color: rgba(0, 0, 0, 1);
        line-height: 43px;
      }
      .brief-data {
        font-size: 1.18rem;
        line-height: 2rem;
        margin-top: 1.5rem;
        font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, Roboto,
          "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB",
          "Source Han Sans", "Noto Sans CJK Sc", "Microsoft YaHei",
          "Microsoft Jhenghei", sans-serif;
      }
    }
    .introduce-education {
      width: 100%;
      height: calc(100% - 34.3rem);
      .education-title {
        width: 13.25rem;
        height: 2.68rem;
        font-size: 2rem;
        font-family: Arial-Black, Arial;
        font-weight: 900;
        color: rgba(0, 0, 0, 1);
        line-height: 43px;
      }
      .education-data {
        font-size: 1.18rem;
        line-height: 2rem;
        margin-top: 1.5rem;
        font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, Roboto,
          "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB",
          "Source Han Sans", "Noto Sans CJK Sc", "Microsoft YaHei",
          "Microsoft Jhenghei", sans-serif;
        .item {
          height: 5.37rem;
          width: 47.68rem;
          margin-bottom: 1rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.04);
          color: rgba(0, 0, 0, 0.65);
        }
        .profession {
          font-size: 1.3rem;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: rgba(0, 0, 0, 1);
        }
        .full-time {
          background-color: rgba(230, 247, 255, 1);
          border-radius: 1rem;
          width: 5.68rem;
          height: 2rem;
          font-size: 1rem;
          text-align: center;
        }
      }
    }
    .brief-bottom-bar {
      width: 100%;
      height: 0.81rem;
      margin-top: -1rem;
      background-color: rgba(24, 144, 255, 0.5);
    }
  }
}
</style>
