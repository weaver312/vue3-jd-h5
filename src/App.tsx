/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-03-20 10:28:10
 * @LastEditors: geeks.kai@gmail.com
 * @LastEditTime: 2021-03-20 22:19:06
 * @FilePath: /vue-jd-h5/src/App.tsx
 */
import { reactive, ref, defineComponent } from 'vue';

import HelloWorld from '@/components/HelloWorld.vue';
// eslint-disable-next-line
const img = require('./assets/logo.png');

export default defineComponent({
  setup() {
    const response = reactive({
      data: [{ name: '', icon: '', price: '' }],
    });
    // let state = '';

    fetch('/api/plans')
      .then((res) => res.json())
      .then((json) => {
        // const state = reactive(json);
        response.data = json.data;
        console.log('plan:', response.data);
      });
    return () => {
      // const number = numberRef.value;
      const personList = response.data;
      return (
        <div id="app">
          <img src={img} alt="logo" />
          <ul>
            {personList.map((it) => {
              return (
                <div>
                  <img src={it.icon} alt={it.name} style={{ width: '100px', height: '100px' }} />
                  <p>
                    name:{it.name} price:{it.price}icon:{it.icon}
                  </p>
                </div>
              );
            })}
          </ul>
          {/* {state.map()} */}

          {/* <p>name:{state}</p> */}
          {/* <HelloWorld></HelloWorld> */}
          {/* <p>value:{number}</p> */}
        </div>
      );
    };
  },
});
