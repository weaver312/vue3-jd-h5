/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-03-20 10:28:10
 * @LastEditors: geeks.kai@gmail.com
 * @LastEditTime: 2021-03-21 14:11:05
 * @FilePath: /vue-jd-h5/src/App.tsx
 */
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return () => {
      return (
        <keep-alive>
          <router-view />
        </keep-alive>
      );
    };
  },
});
