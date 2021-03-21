/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-03-21 10:51:51
 * @LastEditors: geeks.kai@gmail.com
 * @LastEditTime: 2021-03-21 11:49:04
 * @FilePath: /vue-jd-h5/src/utils/axios.ts
 */

import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { Toast } from 'vant';

// axios基本配置
const baseConfig = {
  withCredentials: true, // 允许跨域
  timeout: 10000, // 超时设置
  retry: 1, // 超时重新发请求的次数
  retryDelay: 2000, // 超时后再次发请求的间隔时间
  retryCount: 0,
};

/**
 * axios超时判断
 */
const isTimeoutError = (err: AxiosError) =>
  err.code === 'ECONNABORTED' && err.message.includes('timeout');

/**
 * axios非超时,错误处理
 */

const commonErrorHandler = (err: AxiosError, url?: string) => {
  if (axios.isCancel(err)) {
    Toast({
      duration: 3,
      message: `${url},请求已经取消`,
    });
  } else {
    Toast.fail({
      duration: 8,
      message: `${url},请求出错`,
    });
  }

  return { data: '' };
};

/**
 * 统一错误处理
 * @param  {AxiosError} err
 */
const errorHandler = (err: AxiosError, url?: any): any => {
  // eslint-disable-next-line no-use-before-define
  return isTimeoutError(err) ? timeoutHandle(err, url) : commonErrorHandler(err, url);
};

/**
 * axios超时,错误处理
 */
const timeoutHandle = async (err: AxiosError, url: any) => {
  const { config }: any = err;

  config.retryCount = config.retryCount || 0;
  if (config.retryCount > baseConfig.retry) {
    commonErrorHandler(err, url);
    config.retryCount = 0;
    return Promise.resolve({ data: '' });
  }
  config.retryCount += 1;
  return axios(config).catch(errorHandler(err, url));
};

/**
 * 请求做统一错误拦截，提醒
 * @param  {object} option ： 请求参数
 */
const cancelQueue: Array<Function> = [];

const cancel = (text?: any) => {
  if (!cancelQueue.length) return;
  for (let i = 0; i < cancelQueue.length; i++) {
    cancelQueue[i](text);
  }
};
const request = async ({
  isAvoidShowError,
  ...option
}: AxiosRequestConfig & { isAvoidShowError?: boolean }): Promise<any> => {
  const cancelToken = new axios.CancelToken((c: Function) => {
    cancelQueue.push(c);
  });
  try {
    const { data = {} } = await axios({ ...baseConfig, ...option, cancelToken });
    if (!data) return;
    const { errno, errorMessage } = data;
    if (isAvoidShowError) return data;
    if (+errno !== 0) {
      Toast.fail({
        duration: 8,
        message: errorMessage || '请求出错',
      });
    }
    return data;
  } catch (error) {
    errorHandler(error, option?.url);
  }
};

/**
 * get请求
 * @param  {string} url: 请求路径
 * @param  {object} params ： 请求参数~
 * @param  {object} options : 自定义配置
 */
const axiosGet = async <T = any>(
  url: string,
  params?: object,
  options?: AxiosRequestConfig,
  isAvoidShowError?: boolean,
): Promise<T> =>
  request({
    url,
    isAvoidShowError,
    params,
    ...options,
  });

/**
 * post请求1
 * @param  {string} url: 请求路径
 * @param  {object} data ： 请求参数
 * @param  {object} options : 自定义配置
 */
const axiosPost = async <T = any>(
  url: string,
  data: object,
  options?: AxiosRequestConfig,
  isAvoidShowError?: boolean,
): Promise<T> =>
  request({
    url,
    isAvoidShowError,
    data,
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      trace_id: 'peakTask123450678',
    },
    ...options,
  });

/**
 * put请求
 * @param  {string} url: 请求路径
 * @param  {object} data ： 请求参数
 * @param  {object} options : 自定义配置
 */
const axiosPut = async (url: string, data: object, options?: AxiosRequestConfig): Promise<any> =>
  request({
    url,
    data,
    method: 'put',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    ...options,
  });
/**
 * delete请求
 * @param  {string} url: 请求路径
 * @param  {object} data ： 请求参数
 * @param  {object} options : 自定义配置
 */
const axiosDelete = async (url: string, data: object, options?: AxiosRequestConfig): Promise<any> =>
  request({
    url,
    data,
    method: 'delete',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    ...options,
  });
const axiosAll = async (fetch: Promise<any>[], completeNumber?: number): Promise<any> => {
  const data = await Promise.myAll(fetch, completeNumber).catch(errorHandler);
  return data;
};
Promise.myAll = (promiseArr: Promise<any>[], number?: number) => {
  // 为了让传入的值不是promise也返回promise
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promiseArr)) {
      throw new Error('promiseArr必须为数组');
    }
    const resArr: Array<Function> = [];
    const len = promiseArr.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
      // Promise.resolve将数组中非promise转为promise
      Promise.resolve(promiseArr[i])
        // eslint-disable-next-line no-loop-func
        .then((value) => {
          count++;
          if (value) resArr[i] = value;
          if (count === number) {
            cancel();
            return resolve(resArr);
          }
          resolve(resArr);
        })
        .catch((err) => {
          return reject(err);
        });
    }
  });
};

const instance = { axiosGet, axiosPost, axiosPut, axiosDelete, axiosAll, errorHandler, cancel };

export default {
  install(app) {
    app.config.globalProperties.$http = instance;
  },
};
