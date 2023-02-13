import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

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
