/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-03-20 19:54:53
 * @LastEditors: geeks.kai@gmail.com
 * @LastEditTime: 2021-03-20 21:15:16
 * @FilePath: /vue-jd-h5/mock/server.js
 */

import { Server, Response } from 'miragejs';
import plans from './index';

export default function makeServer({ environment = 'development' } = {}) {
  const server = new Server({
    environment,

    routes() {
      this.namespace = 'api';

      this.get('/plans', (schema) => {
        return new Response(200, {}, plans);
      });

      this.post(
        '/plans',
        (schema, request) => {
          const headers = {};
          const plan = JSON.parse(request.requestBody);
          return new Response(200, headers, {
            message: `Successfully subscribed to ${plan.name} plan`,
          });
        },
        { timing: 2000 },
      );
    },
  });

  return server;
}
