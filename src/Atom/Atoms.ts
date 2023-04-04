import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist'; // sessionStorage 저장하기

export interface IUser {
  id: string;
  pwd: string;
  name: string;
}
const { persistAtom } = recoilPersist();
export const User = atom<any>({
  key: 'user',
  default: {
    id: 'admin',
    pwd: 'pw',
    name: '관리자',
  },
});

export const LoginState = atom<boolean>({
  key: 'LoginState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const cookieState = atom({
  key: 'cookieState',
  default: []
});

export const urlParams = atom<any>({
  key: 'paramData',
  default: []
});

export const inputValue1State = atom({
  key: 'inputValueState',
  default: '',
});

export const inputValue2State = atom({
  key: 'inputValue2State',
  default: '',
});

export const inputObjectState = selector({
  key: 'inputObjectState',
  get: ({ get }) => {
    const input1 = get(inputValue1State);
    const input2 = get(inputValue2State);
    return { period:input1, type:input2 };
  },
});
