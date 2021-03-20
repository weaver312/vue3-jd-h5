/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-03-20 17:57:12
 * @LastEditors: geeks.kai@gmail.com
 * @LastEditTime: 2021-03-20 17:59:59
 * @FilePath: /vue-jd-h5/src/hooks/useLocalStorage/index.ts
 */
import { Ref } from 'vue-demi';
import { useStorage } from '../useStorage';
import { isBrowser, createStorage } from '../shared/utils';

export function useLocalStorage(key: string, defaultValue?: undefined): Ref<any>;
export function useLocalStorage(key: string, defaultValue: null): Ref<any>;
export function useLocalStorage(key: string, defaultValue: string): Ref<string>;
export function useLocalStorage(key: string, defaultValue: number): Ref<number>;
export function useLocalStorage(key: string, defaultValue: boolean): Ref<boolean>;
export function useLocalStorage<T extends Record<string, unknown>>(
  key: string,
  defaultValue: T,
): Ref<T>;
export function useLocalStorage<T extends unknown[]>(key: string, defaultValue: T): Ref<T>;
export function useLocalStorage<
  T extends string | number | boolean | Record<string, unknown> | [] | null
>(key: string, initialValue: T): Ref<any> {
  return useStorage(isBrowser ? localStorage : createStorage(), key, initialValue as any);
}
