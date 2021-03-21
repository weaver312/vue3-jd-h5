/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-03-21 10:48:50
 * @LastEditors: geeks.kai@gmail.com
 * @LastEditTime: 2021-03-21 17:07:38
 * @FilePath: /vue-jd-h5/src/components/HelloWorld.tsx
 */

import { defineComponent, reactive } from 'vue';

import jss from 'jss';
import preset from 'jss-preset-default';
import color from 'color';
jss.setup(preset());

const styles = {
  '@global': {
    body: {
      color: 'green',
    },
    a: {
      textDecoration: 'underline',
    },
  },
  withTemplates: `
    border-radius: 3px;
    background-color: green;
    color: red;
    margin: 20px 40px;
    padding: 10px;
  `,
  button: {
    fontSize: 12,
    margin: {
      // jss-plugin-expand gives more readable syntax
      top: 5, // jss-plugin-default-unit makes this 5px
      right: 0,
      bottom: 0,
      left: '1rem',
    },
    '&:hover': {
      background: 'blue',
    },
  },
  img: `
    width: 100px;
    height: 100px;
    border-radius: 5px;
    border: '1px solid #ccc';
  `,
  ctaButton: {
    extend: 'button',
    '&:hover': {
      background: color('blue')
        .darken(0.3)
        .hex(),
    },
  },
  '@media (min-width: 1024px)': {
    button: {
      width: 200,
    },
  },
};

const { classes } = jss.createStyleSheet(styles).attach();

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup() {
    const response = reactive({
      data: [{ name: '', icon: '', price: '' }],
    });

    fetch('/api/plans')
      .then((res) => res.json())
      .then((json) => {
        response.data = json.data;
      });
    const styled = reactive(classes);
    return () => {
      const personList = response.data;
      const classes = styled;
      return (
        <div class="hello">
          <button class={classes.ctaButton}>jss button</button>
          <span class={classes.withTemplates}>slot</span>
          <van-button type="primary">主要按钮</van-button>
          {personList.map((person) => {
            return (
              <div>
                <span>{person.name}</span>
                <img class={classes.img} src={person.icon} />
                <span>{person.price}</span>
              </div>
            );
          })}
        </div>
      );
    };
  },
});
