/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-03-21 11:55:34
 * @LastEditors: geeks.kai@gmail.com
 * @LastEditTime: 2021-03-21 12:02:43
 * @FilePath: /vue-jd-h5/src/views/Home.tsx
 */
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup() {
    return () => {
      return (
        <div class="home">
          <HelloWorld msg="Welcome to Your Vue.js + TypeScript tsx App" />
        </div>
      );
    };
  },
});
