/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-03-21 16:52:44
 * @LastEditors: geeks.kai@gmail.com
 * @LastEditTime: 2021-03-21 18:13:11
 * @FilePath: /vue-jd-h5/src/hooks/useStyle/index.ts
 */

import { reactive } from 'vue-demi';
import jss from 'jss';

const useStyle = (styles) => {
  const { classes } = jss.createStyleSheet(styles).attach();
  return reactive(classes);
};

export default useStyle;
