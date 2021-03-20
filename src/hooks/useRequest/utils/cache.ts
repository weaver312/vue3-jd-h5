/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-03-20 17:57:12
 * @LastEditors: geeks.kai@gmail.com
 * @LastEditTime: 2021-03-20 18:00:18
 * @FilePath: /vue-jd-h5/src/hooks/useRequest/utils/cache.ts
 */
type Timer = ReturnType<typeof setTimeout>;
type CacheKey = string;
type CacheData = {
  data: any;
  timer: Timer | undefined;
  startTime: number;
};

const cache = new Map<CacheKey, CacheData>();

export function getCache(key: CacheKey): Pick<CacheData, Exclude<keyof CacheData, 'timer'>> {
  const cached = cache.get(key);
  return {
    data: cached?.data,
    startTime: cached?.startTime as number,
  };
}

export function setCache(key: CacheKey, data: any, cacheTime: number): void {
  const cached = cache.get(key);
  if (cached?.timer) {
    clearTimeout(cached.timer);
  }
  let timer: Timer | undefined;
  if (cacheTime > -1) {
    timer = setTimeout(() => {
      cache.delete(key);
    }, cacheTime);
  }

  cache.set(key, {
    data: data,
    timer,
    startTime: new Date().getTime(),
  });
}
