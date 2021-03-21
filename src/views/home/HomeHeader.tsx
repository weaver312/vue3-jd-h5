/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-03-21 17:16:22
 * @LastEditors: geeks.kai@gmail.com
 * @LastEditTime: 2021-03-21 18:23:39
 * @FilePath: /vue-jd-h5/src/views/home/HomeHeader.tsx
 */

import { defineComponent, ref } from 'vue';
import useStyle from '@/hooks/useStyle';

const styles = {
  homeHeader: {
    position: 'fixed',
    left: '0px',
    top: '10px',
    width: '100%',
    height: '40px',
    lineHeight: '40px',
    padding: '0 16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // @include 'boxSizing',
    fontSize: '30px',
    color: '#fdc',
    zIndex: 10000,
  },
};

export default defineComponent({
  name: 'HomeHeader',
  setup() {
    const headerActive = ref(false);
    const active = ref('');
    const styled = useStyle(styles);
    return () => {
      return (
        <header
          class={active.value ? `${styled.homeHeader} ${headerActive.value}` : styled.homeHeader}
        >
          <div class="header_search">
            <svg-icon class="search_icon" icon-class="search"></svg-icon>
            <router-link tag="span" class="search_title" to="./search">
              推荐搜索 关键词
            </router-link>
          </div>
          <svg-icon class="customer-service-icon" icon-class="customer-service"></svg-icon>
        </header>
      );
    };
  },
});
