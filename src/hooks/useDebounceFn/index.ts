/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-03-20 17:57:12
 * @LastEditors: geeks.kai@gmail.com
 * @LastEditTime: 2021-03-20 17:59:23
 * @FilePath: /vue-jd-h5/src/hooks/useDebounceFn/index.ts
 */
type ReturnValue<T extends any[]> = {
  run(...args: T): any;
  cancel(): void;
};

export function useDebounceFn<T extends any[]>(fn: (...args: T) => any, wait = 0): ReturnValue<T> {
  let timer: any = null;

  function run(...args: T) {
    cancel();
    timer = setTimeout(() => {
      fn(...args);
    }, wait);
  }

  function cancel() {
    if (timer) {
      clearTimeout(timer);
    }
  }

  return {
    run,
    cancel,
  };
}
