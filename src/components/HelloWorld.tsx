/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-03-21 10:48:50
 * @LastEditors: geeks.kai@gmail.com
 * @LastEditTime: 2021-03-21 12:01:36
 * @FilePath: /vue-jd-h5/src/components/HelloWorld.tsx
 */

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup() {
    return () => {
      return (
        <div class="hello">
          <van-button type="primary">主要按钮</van-button>
        </div>
      );
    };
  },
});
// </script>

// <!-- Add "scoped" attribute to limit CSS to this component only -->
// <style scoped lang="scss">
// h3 {
//   margin: 40px 0 0;
// }
// ul {
//   list-style-type: none;
//   padding: 0;
// }
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
// a {
//   color: #42b983;
// }
// </style>
