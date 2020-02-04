import { JGET } from "@/plugins/axios";
export function getProfile() {
  return JGET(`statics/config/indexPage/profile.hjson`, `获取个人信息`);
}
export function getResearch() {
  return JGET(`statics/config/indexPage/research.hjson`, `获取研究信息`);
}
export function getPublications() {
  return JGET(`statics/config/indexPage/publications.hjson`, `获取出版物`);
}

export function getProfessionalActivities() {
  return JGET(
    `statics/config/indexPage/ProfessionalActivities.hjson`,
    `获取专业活动信息`
  );
}
export function getHonorsAwards() {
  return JGET(
    `statics/config/indexPage/HonorsAwards.hjson`,
    `获取荣誉和奖励信息`
  );
}
export function getComputerSkills() {
  return JGET(
    `statics/config/indexPage/ComputerSkills.hjson`,
    `获取计算机技能信息`
  );
}
export function getLanguages() {
  return JGET(`statics/config/indexPage/Languages.hjson`, `获取语音技能信息`);
}
export function getOther() {
  return JGET(`statics/config/indexPage/Other.hjson`, `获取其他信息`);
}
