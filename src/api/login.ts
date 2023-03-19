import { Item, User2 } from '../Types/user'
import { IUser, User, LoginState } from '../Atom/Atoms';
import { BASE_URL } from './const'
import {useRecoilState} from "recoil";

type LoginResult = 'success' | 'fail'
export interface LoginRequest {
    username: string
    password: string
}
export const login = async (args: LoginRequest): Promise<LoginResult> => {
    if (args.password == 'pw' && args.username == 'admin') {
        return 'success'
    } else {
        return 'fail'
    }
    /*** 실제 API 호출 시
     *   POST, '/auth/login' 호출
     *   body에는 { username, password }가 들어가야 함
     *   사용하는 기술에 맞추어 적절히 withCredential 설정하기
     * ***/
    // const loginRes = await fetch(`${BASE_URL}/auth/login`, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         credentials: 'include'
    //     },
    //     body: JSON.stringify(args)
    // })
    // return loginRes.ok ? 'success' : 'fail'
}
export const getCurrentUserInfo = async (): Promise<User2 | null> => {
    // TODO: GET, '/profile' 호출
    // 호출 성공시 유저 정보 반환
    const userInfoRes = await fetch(`${ BASE_URL }/profile`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            credentials: 'include'
        }
    });
    console.log('userInfoRes',userInfoRes);
    return userInfoRes.ok ? userInfoRes.json() : null
}

