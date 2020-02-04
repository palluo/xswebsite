import { JGET } from "@/plugins/axios";
export function getAppConfig() {
  return JGET(`statics/config/common/appConfig.hjson`, `获取系统配置文件`);
}
export function getNavConfig() {
  return JGET(`statics/config/common/nav.hjson`, `获取导航条配置信息`);
}
