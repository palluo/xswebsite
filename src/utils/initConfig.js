import { getAppConfig } from "@/api/common";
import { APP_CONFIG, NAV_LIST } from "@/store/types";
import store from "@/store";

export default async () => {
  const appConfig = await getAppConfig();
  store.commit(APP_CONFIG, appConfig);
};
