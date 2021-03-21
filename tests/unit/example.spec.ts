/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-03-21 10:48:50
 * @LastEditors: geeks.kai@gmail.com
 * @LastEditTime: 2021-03-21 12:02:29
 * @FilePath: /vue-jd-h5/tests/unit/example.spec.ts
 */
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld';

describe('HelloWorld.tsx', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
