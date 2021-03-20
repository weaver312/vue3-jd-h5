/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-03-20 17:57:12
 * @LastEditors: geeks.kai@gmail.com
 * @LastEditTime: 2021-03-20 18:06:41
 * @FilePath: /vue-jd-h5/src/hooks/useRequest/utils/fetchProxy.ts
 */
export function fetchProxy(...args: [RequestInfo, RequestInit | undefined]): Promise<Response> {
  return fetch(...args).then((res: Response) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(res.statusText);
  });
}
