<template>
  <div class="skills-awards">
    <ComTitle :title="title" imgUrl="statics/img/icon/computer.png" />
    <div>
      <ComSkills
        class="com-skills"
        v-for="(skill, index) in skills"
        :key="index"
        :title="skill.title"
        :list="skill.list"
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
    skills: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style lang="scss" scoped>
.skills-awards {
  .com-skills {
    float: left;
  }
  .com-skills:nth-child(2),
  .com-skills:nth-child(5) {
    margin: 0 6rem;
  }
  .com-skills:nth-child(4),
  .com-skills:nth-child(5),
  .com-skills:nth-child(6) {
    margin-top: 1.5rem;
  }
}
</style>