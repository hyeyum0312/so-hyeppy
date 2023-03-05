import React, {useEffect, useState} from 'react';
import SideNav from "../Layout/SideNav";
import {useRecoilValue} from "recoil";
import {urlParams} from "../../Atom/Atoms";
import tw from "tailwind-styled-components";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
interface sideNavProps {
    sideNavPropsName: string;
    name: string;
}


// (teamMonthMapData.get(month)?.map((monthData:any,index:number)=>{
//     console.log('monthData',monthData)
//     return (
//         <li>
//             <div>${monthData.name}</div>
//             <div>${monthData.date}</div>
//             <div>${monthData.status}</div>
//             <div>${monthData.type}</div>
//         </li>
//     )
// }))

const Attendance: React.FC = () => {
    const params = useRecoilValue(urlParams);
    console.log('params',params)
    const [category, setCategory] = React.useState<sideNavProps>({sideNavPropsName : '근무/휴가', name : 'Attendance'});
    const [month, setMonth] = useState<any>('3월');

    const TeamContainer = () => {
        console.log('몇월?',month)
        let monthData = teamMonthMapData.get(month);
        console.log('monthData',monthData);
        const monthDataList = monthData?.map((monthData, idx,arr) => {
            console.log('month',monthData);
            return (<li>
                <div>${monthData.name}</div>
                <div>${monthData.date}</div>
                <div>${monthData.status}</div>
                <div>${monthData.type}</div>
            </li>)
        });
        return monthDataList
    }
    return (
    <div className="w-full h-[100vh] bg-yellow-50 flex">
        <SideNav post ={category} ></SideNav>
        {
            params.length===0&&
            <div className="w-full overflow-auto">
                <AttendanceMain>
                    <p className="text-[24px] h-[60px]">근태</p>
                    <div className="flex items-center justify-center h-[91px]">
                        <button className="text-[24px] mr-[15px]"><HiOutlineChevronLeft /></button>
                        <div className="text-[24px]">2023년 03월</div>
                        <button className="text-[24px] ml-[15px]"><HiOutlineChevronRight/></button>
                    </div>
                    <div className="flex justify-end ">
                        <button className="bg-[#086bde] text-white text-[14px] h-[36px] py-[5px] px-[16px] rounded-[4px]">내 근태 현황 / 신청</button>
                    </div>

                    {/*
                        아래 테이블은 컴포넌트로 만들어야 하는구나 !! -> <,> 누를때 월을 넘겨주기? -> 해당 데이터 받아오면서 그려주기

                        그럼 최초 로드 시  <,> 해당하는 데이터의 월을 어딘가에 저장 시켜둬야하나?
                        left : 2월
                        right: 3월
                        혹은 누를때 마다 -1 , +1
                        max는 12 , min은 1
                    */}
                    <TeamContainerHeader></TeamContainerHeader>
                    <ul>
                        <li className="flex h-[37px] p-[10px] text-[14px] mb-[5px]">
                            <div className="w-[220px]">이름</div>
                            <div className="w-[165px]">유형</div>
                            <div className="w-[165px]">승인여부</div>
                            <div>날짜</div>
                        </li>
                        {(teamMonthMapData.get(month)?.map((monthData:any,index:number)=>{
                            return (
                                <li className="flex text-[14px] h-[40px] bt-1">
                                    <div className="w-[220px]">{monthData.name}</div>
                                    <div className="w-[165px]">{monthData.type}</div>
                                    <div className="w-[165px]">{monthData.status}</div>
                                    <div className="">{monthData.date}</div>
                                </li>
                            )
                        }))}
                    </ul>
                </AttendanceMain>
            </div>
        }
    </div>
    );
};
const AttendanceMain = tw.div`
    w-full
    max-w-none
    p-[32px]
    min-w-[1024px]
`;
const TeamContainerHeader = tw.div`
    w-full
    max-w-none
    p-[32px]
    min-w-[1024px]
`;

const teamMonthData = {
    '1월' : [
            {
                name: '김땡땡',
                type: '연차',
                status: '승인',
                date:'1월 20일(월) - 22일(수)',
            },
            {
                name: '조땡땡',
                type: '연차',
                status: '승인',
                date:'1월 20일(월) - 22일(수)',
            }
        ],
    '2월' : [
        {
            name: '김땡땡',
            type: '연차',
            status: '승인',
            date:'2월 20일(월) - 22일(수)',
        },
        {
            name: '오땡땡',
            type: '연차',
            status: '승인',
            date:'2월 20일(월) - 22일(수)',
        }
    ],
    '3월' : [
        {
            name: '박땡땡',
            type: '연차',
            status: '승인',
            date:'2월 20일(월) - 22일(수)',
        },
        {
            name: '최땡땡',
            type: '연차',
            status: '승인',
            date:'2월 20일(월) - 22일(수)',
        }
    ],
}
const entry = Object.entries(teamMonthData);
const teamMonthMapData = new Map(entry);
console.log('teamMonthMapData',teamMonthMapData);


export default Attendance;