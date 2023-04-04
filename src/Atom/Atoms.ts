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
type InputValues = {
  value1: string;
  value2: string;
};

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

export const inputValuesState = atom<InputValues>({
  key: 'inputValuesState',
  default: {
    value1: '',
    value2: '',
  },
});
