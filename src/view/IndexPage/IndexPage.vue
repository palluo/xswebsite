<template>
  <div class="index-page">
    <div class="top-header">
      <ComNav :list="navList" :title="sysTitle" />
    </div>
    <a v-if="sysTitle" :name="sysTitle" class="anchor" />>
    <div v-if="profileData" class="index-page-main">
      <div class="index-page-profile-plan hr-center">
        <Profile
          :style="{ width: '78.3rem' }"
          class="index-page-profile"
          :persion="profileData.persion"
          :detail="profileData.detail"
          :brief="profileData.brief"
          :education="profileData.education"
          :links="profileData.links"
        />
      </div>
      <a v-if="researchData" :name="researchData.title.name" class="anchor" />
      <div v-if="researchData" class="index-page-research-plan hr-center">
        <Research
          class="index-page-research"
          :title="researchData.title"
          :researchs="researchData.researchs"
          :style="{ width: '78.3rem' }"
        />
      </div>
      <a v-if="publicationsData" :name="publicationsData.title.name" class="anchor" />
      <div v-if="publicationsData" class="index-page-publications-plan hr-center">
        <Publications
          :title="publicationsData.title"
          :publications="publicationsData.publications"
          :style="{ width: '78.3rem' }"
        />
      </div>
      <a
        v-if="professionalActivitiesData"
        :name="professionalActivitiesData.title.name"
        class="anchor"
      />
      <div
        v-if="professionalActivitiesData"
        class="index-page-professional-activities-plan hr-center"
      >
        <ProfessionalActivities
          :title="professionalActivitiesData.title"
          :activities="professionalActivitiesData.activities"
          :journals="professionalActivitiesData.journals"
          :style="{ width: '78.3rem' }"
        />
      </div>
      <a v-if="honorsAwardsData" :name="honorsAwardsData.title.name" class="anchor" />
      <div v-if="honorsAwardsData" class="index-page-honors-awards-plan hr-center">
        <HonorsAwards
          :title="honorsAwardsData.title"
          :honors="honorsAwardsData.honors"
          :style="{ width: '78.3rem' }"
        />
      </div>
      <a v-if="computerSkillsData" :name="computerSkillsData.title.name" class="anchor" />
      <div v-if="computerSkillsData" class="index-page-computer-skills-plan hr-center">
        <ComputerSkills
          :title="computerSkillsData.title"
          :skills="computerSkillsData.skills"
          :style="{ width: '78.3rem' }"
        />
      </div>
      <a v-if="languagesData" :name="languagesData.title.name" class="anchor" />
      <div v-if="languagesData" class="index-page-languages-plan hr-center">
        <Languages
          :title="languagesData.title"
          :languages="languagesData.languages"
          :style="{ width: '78.3rem' }"
        />
      </div>
      <a v-if="otherData" :name="otherData.title.name" class="anchor" />
      <div v-if="otherData" class="index-page-other-plan hr-center">
        <Other
          :title="otherData.title"
          :hobbies="otherData.hobbies"
          :expritise="otherData.expritise"
          :style="{ width: '78.3rem' }"
        />
      </div>
      <div class="index-page-bottom-plan hr-center">{{bottom.title}}</div>
    </div>
  </div>
</template>
<script>
import { NAV_LIST } from "@/store/types";
import { getNavConfig } from "@/api/common";
import {
  getProfile,
  getResearch,
  getPublications,
  getProfessionalActivities,
  getHonorsAwards,
  getComputerSkills,
  getLanguages,
  getOther
} from "@/api/indexPage";
import Profile from "./Profile/Profile";
import Research from "./Research/Research";
import Publications from "./Publications/Publications";
import ProfessionalActivities from "./ProfessionalActivities/ProfessionalActivities";
import HonorsAwards from "./HonorsAwards/HonorsAwards";
import ComputerSkills from "./ComputerSkills/ComputerSkills";
import Languages from "./Languages/Languages";
import Other from "./Other/Other";

export default {
  components: {
    Profile,
    Research,
    Publications,
    ProfessionalActivities,
    HonorsAwards,
    ComputerSkills,
    Languages,
    Other
  },
  data() {
    return {
      navList: [],
      sysTitle: "",
      bottom: null,
      profileData: null,
      researchData: null,
      publicationsData: null,
      professionalActivitiesData: null,
      honorsAwardsData: null,
      computerSkillsData: null,
      languagesData: null,
      otherData: null
    };
  },
  async beforeMount() {
    const navList = await getNavConfig();
    this.navList = navList.nav;
    this.sysTitle = this.$store.getters.config.title;
    this.bottom = this.$store.getters.config.bottom;
    this.$store.commit(NAV_LIST, this.navList);
    this.profileData = await getProfile();
    this.researchData = await getResearch();
    this.publicationsData = await getPublications();
    this.professionalActivitiesData = await getProfessionalActivities();
    this.honorsAwardsData = await getHonorsAwards();
    this.computerSkillsData = await getComputerSkills();
    this.languagesData = await getLanguages();
    this.otherData = await getOther();
  }
};
</script>
<style lang="scss" scoped>
.index-page {
  width: 100%;
  height: 100%;
  .anchor {
    position: absolute;
    margin-top: -5rem;
  }
  .hr-center {
    display: flex;
    justify-content: center;
  }
  .top-header {
    display: flex;
    justify-content: center;
    border-bottom: 2px solid $colorECECEC;
    position: fixed;
    top: 0;
    background-color: #fff;
    width: 100%;
    z-index: 1000;
  }
  .index-page-main {
    width: 100%;
    height: 100%;
    margin-top: 10rem;
  }
  .index-page-profile-plan {
    width: 100%;
    height: 59.3rem;
  }
  .index-page-profile {
    width: 100%;
  }
  .index-page-research-plan {
    width: 100%;
    height: 57.3rem;
    background-color: rgba(250, 251, 252, 1);
  }
  .index-page-publications-plan {
    width: 100%;
    height: 58.3rem;
  }
  .index-page-professional-activities-plan {
    width: 100%;
    height: 66.3rem;
    background-color: rgba(250, 251, 252, 1);
  }
  .index-page-honors-awards-plan {
    width: 100%;
    height: 54.68rem;
    background: rgba(255, 255, 255, 1);
  }
  .index-page-computer-skills-plan {
    width: 100%;
    height: 37.6rem;
    background-color: rgba(250, 251, 252, 1);
  }
  .index-page-languages-plan {
    width: 100%;
    height: 23rem;
  }
  .index-page-other-plan {
    width: 100%;
    height: 46.4rem;
  }
  .index-page-bottom-plan {
    width: 100%;
    height: 2rem;
    text-align: center;
    line-height: 2rem;
    background-color: rgba(250, 251, 252, 1);
  }
}
</style>
