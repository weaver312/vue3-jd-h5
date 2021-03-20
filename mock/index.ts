/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-03-20 19:49:11
 * @LastEditors: geeks.kai@gmail.com
 * @LastEditTime: 2021-03-20 22:22:08
 * @FilePath: /vue-jd-h5/mock/index.ts
 */

import Faker from 'faker';

// const Faker = require('faker');
Faker.locale = 'zh_CN';

export default {
  data: [
    {
      name: Faker.name.lastName() + Faker.name.firstName(),
      icon: Faker.image.image(),
      price: 1000,
      features: [
        {
          name: '100 Sample UI Kits',
          enabled: true,
        },
        {
          name: 'Easy to use',
          enabled: true,
        },
        {
          name: 'All Open files',
          enabled: true,
        },
        {
          name: 'Available in all files',
          enabled: false,
        },
        {
          name: 'Responsive files',
          enabled: false,
        },
      ],
    },
    {
      name: Faker.name.lastName() + Faker.name.firstName(),
      icon: Faker.image.image(),
      price: 10000,
      features: [
        {
          name: '100 Sample UI Kits',
          enabled: true,
        },
        {
          name: 'Easy to use',
          enabled: true,
        },
        {
          name: 'All Open files',
          enabled: true,
        },
        {
          name: 'Available in all files',
          enabled: true,
        },
        {
          name: 'Responsive files',
          enabled: true,
        },
      ],
    },
    {
      name: Faker.name.lastName() + Faker.name.firstName(),
      icon: Faker.image.image(),
      price: 5000,
      features: [
        {
          name: '100 Sample UI Kits',
          enabled: true,
        },
        {
          name: 'Easy to use',
          enabled: true,
        },
        {
          name: 'All Open files',
          enabled: true,
        },
        {
          name: 'Available in all files',
          enabled: true,
        },
        {
          name: 'Responsive files',
          enabled: false,
        },
      ],
    },
  ],
};
