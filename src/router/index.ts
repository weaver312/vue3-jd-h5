/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-03-20 10:28:10
 * @LastEditors: geeks.kai@gmail.com
 * @LastEditTime: 2021-03-21 11:59:02
 * @FilePath: /vue-jd-h5/src/router/index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // {
  // path: '/about',
  // name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
