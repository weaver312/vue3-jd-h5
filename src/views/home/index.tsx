/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-03-21 11:55:34
 * @LastEditors: geeks.kai@gmail.com
 * @LastEditTime: 2021-03-21 18:24:01
 * @FilePath: /vue-jd-h5/src/views/home/index.tsx
 */
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld'; // @ is an alias to /src
// import styles from './index.scss';
// import useStyle from './style';

import HomeHeader from './HomeHeader';

export default defineComponent({
  name: 'Home',
  // components: {
  //   HelloWorld,
  // },
  setup() {
    return () => {
      return (
        <div class="home">
          <HomeHeader />
          <HelloWorld msg="Welcome to Your Vue.js + TypeScript tsx App" />
        </div>
      );
    };
  },
});
