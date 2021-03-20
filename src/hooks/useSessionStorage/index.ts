/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-03-20 17:57:12
 * @LastEditors: geeks.kai@gmail.com
 * @LastEditTime: 2021-03-20 18:07:47
 * @FilePath: /vue-jd-h5/src/hooks/useSessionStorage/index.ts
 */
import { Ref } from 'vue-demi';
import { useStorage } from '../useStorage';
import { isBrowser, createStorage } from '../shared/utils';

export function useSessionStorage(key: string, defaultValue?: undefined): Ref<any>;
export function useSessionStorage(key: string, defaultValue: null): Ref<any>;
export function useSessionStorage(key: string, defaultValue: string): Ref<string>;
export function useSessionStorage(key: string, defaultValue: number): Ref<number>;
export function useSessionStorage(key: string, defaultValue: boolean): Ref<boolean>;
export function useSessionStorage<T extends Record<string, unknown>>(
  key: string,
  defaultValue: T,
): Ref<T>;
export function useSessionStorage<T extends unknown[]>(key: string, defaultValue: T): Ref<T>;
export function useSessionStorage<
  T extends string | number | boolean | Record<string, unknown> | [] | null
>(key: string, initialValue: T): Ref<any> {
  return useStorage(isBrowser ? sessionStorage : createStorage(), key, initialValue as any);
}
