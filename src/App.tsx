/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-03-20 10:28:10
 * @LastEditors: geeks.kai@gmail.com
 * @LastEditTime: 2021-03-21 12:02:14
 * @FilePath: /vue-jd-h5/src/App.tsx
 */
import { reactive, ref, defineComponent } from 'vue';

import HelloWorld from '@/components/HelloWorld';
// eslint-disable-next-line
const img = require('./assets/logo.png');

export default defineComponent({
  setup() {
    const response = reactive({
      data: [{ name: '', icon: '', price: '' }],
    });

    fetch('/api/plans')
      .then((res) => res.json())
      .then((json) => {
        response.data = json.data;
        console.log('plan:', response.data);
      });
    return () => {
      const personList = response.data;
      return (
        <keep-alive>
          <router-view />
        </keep-alive>
      );
    };
  },
});
