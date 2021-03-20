/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-03-20 12:41:48
 * @LastEditors: geeks.kai@gmail.com
 * @LastEditTime: 2021-03-20 18:16:00
 * @FilePath: /vue-jd-h5/src/hooks/useBoolean/index.tsx
 */

import { ref, Ref, isReactive, reactive } from 'vue-demi';

type Primitive = string | number | boolean | symbol;

type BolOptions = {
  [propName: string]: boolean;
  [propNum: number]: boolean;
};

type changeStateType = (value?: Primitive) => void;

type Actions = {
  setTrue: () => void;
  setFalse: () => void;
  changeState: changeStateType;
};

const toggleBase = (defaultValue: boolean, options: BolOptions = {}): [Ref, changeStateType] => {
  const state = ref(defaultValue);

  // todo 是否需要抛出Set bolMap
  const bolMap: BolOptions = isReactive(options) ? options : reactive(options);

  const changeState = (value?: Primitive) => {
    if (bolMap[value as string] !== undefined) {
      state.value = bolMap[value as string];
    } else if (typeof value !== 'boolean') {
      state.value = !state.value;
    } else {
      state.value = value;
    }
  };

  return [state, changeState];
};

const useBoolean = (defaultValue: boolean, options?: BolOptions): [Ref, Actions] => {
  const [state, changeState] = toggleBase(defaultValue, options);

  const actions = () => {
    const setTrue = () => changeState(true);
    const setFalse = () => changeState(false);
    return { changeState, setTrue, setFalse };
  };

  return [state, actions()];
};

export default useBoolean;
