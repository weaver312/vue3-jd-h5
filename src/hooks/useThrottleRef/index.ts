/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-03-20 17:57:12
 * @LastEditors: geeks.kai@gmail.com
 * @LastEditTime: 2021-03-20 18:09:34
 * @FilePath: /vue-jd-h5/src/hooks/useThrottleRef/index.ts
 */
import { Ref, customRef } from 'vue-demi';

export function useThrottleRef<T>(value: T, wait = 0): Ref<T> {
  let rawValue = value;
  let timer: any = null;
  return customRef((track, trigegr) => {
    return {
      get() {
        track();
        return rawValue;
      },
      set(val) {
        if (!timer) {
          rawValue = val;
          trigegr();
          timer = setTimeout(() => {
            timer = null;
          }, wait);
        }
      },
    };
  });
}
