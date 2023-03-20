import React, {useEffect, useState} from 'react';
import SideNav from "../Layout/SideNav";
import {useRecoilValue} from "recoil";
import {urlParams} from "../../Atom/Atoms";
import tw from "tailwind-styled-components";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import Modal from "../../Components/Modal";
import useModal from "../../hooks/useModal";


interface sideNavProps {
    sideNavPropsName: string;
    name: string;
}

const Attendance: React.FC = () => {
    const { isShowing, toggle } = useModal();
    const [message, setMessage] = useState();

    // const [isShowing, setIsShowing] = useState(false);
    const params = useRecoilValue(urlParams);
    const [category, setCategory] = React.useState<sideNavProps>({sideNavPropsName : '근무/휴가', name : 'Attendance'});
    const [month, setMonth] = useState<any>(3);
    const [today, setToday] = useState<any>({year:'2023',month: '03'});

    // 이전달
    const onIncrease = () => {
        if (month < 12) {
            setMonth(month+1);
            let date = {year:'2023',month: month+1}
            setToday(date);
        } else {
            setMonth(12);
        }
    }
    // 다음달
    const onDecrease = () => {
        if (month > 1) {
            setMonth(month-1);
            let date = {year:'2023',month: month-1}
            setToday(date);
        } else {
            setMonth(1);
        }
    }

    // 근태현황
    const openModal = (info:any) => {
        console.log('info >> ',info)
        setMessage(info);
        toggle();
    };

    return (
    <div className="w-full h-[100vh] flex">
        <SideNav post ={category} ></SideNav>
        {
            params.length===0&&
            <div className="w-full overflow-auto">
                <AttendanceMain className="bg-white">
                    <p className="bg-white text-[24px] h-[60px]">근태</p>
                    <div className="flex items-center justify-center h-[91px]">
                        <button className="text-[24px] mr-[15px]"><HiOutlineChevronLeft onClick={onDecrease}/></button>
                        <div className="text-[24px]">{today.year}년 {today.month}월</div>
                        <button className="text-[24px] ml-[15px]"><HiOutlineChevronRight onClick={onIncrease}/></button>
                    </div>
                    <div className="flex justify-end ">
                        <button className="bg-[#086bde] text-white text-[14px] h-[36px] py-[5px] px-[16px] rounded-[4px]" onClick={() => openModal("내근태현황을 보여줘")}>내 근태 현황 / 신청</button>
                    </div>

                    <Modal isShowing={isShowing} hide={toggle} message={message} />
                    {/*<div>{isShowing ? <Modal message="signUp" toggle={isShowing}/> : null}</div>*/}


                    <TeamContainerHeader>
                        <ul>
                            <li className="flex h-[37px] p-[10px] text-[14px] mb-[5px]">
                                <div className="w-[220px]">이름</div>
                                <div className="w-[165px]">유형</div>
                                <div className="w-[165px]">승인여부</div>
                                <div>날짜</div>
                            </li>
                            {
                                (teamMonthMapData.get(`${month}`)?.map((monthData:any,index:number)=>{
                                console.log('month',month)
                                return (
                                    <li className="flex text-[14px] h-[40px] bt-1" key={index}>
                                        <div className="w-[220px]">{monthData.name}</div>
                                        <div className="w-[165px]">{monthData.type}</div>
                                        <div className="w-[165px]">{monthData.status}</div>
                                        <div className="">{monthData.date}</div>
                                    </li>
                                )
                            }))}
                        </ul>
                    </TeamContainerHeader>
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
    '1' : [
            {
                name: '김땡땡',
                type: '연차',
                status: '승인',
                date:'1월 20일(월) - 22일(수)',
            },
            {
                name: '조땡땡',
                type: '연차 09:00 - 18:00',
                status: '승인',
                date:'1월 20일(월) - 22일(수)',
            }
        ],
    '2' : [
        {
            name: '김땡땡',
            type: '연차 09:00 - 18:00',
            status: '승인',
            date:'2월 20일(월) - 22일(수)',
        },
        {
            name: '오땡땡',
            type: '연차 09:00 - 18:00',
            status: '승인',
            date:'2월 20일(월) - 22일(수)',
        }
    ],
    '3' : [
        {
            name: '박땡땡',
            type: '연차 09:00 - 18:00',
            status: '승인',
            date:'3월 20일(월) - 22일(수)',
        },
        {
            name: '최땡땡',
            type: '반차',
            status: '미승인',
            date:'3월 20일(월) - 22일(수)',
        }
    ],
    '4' : [
        {
            name: '임땡땡',
            type: '반차',
            status: '미승인',
            date:'4월 20일(월) - 22일(수)',
        },
        {
            name: '김땡땡',
            type: '연차 09:00 - 18:00',
            status: '승인',
            date:'4월 20일(월) - 22일(수)',
        }
    ],
}
const entry = Object.entries(teamMonthData);
const teamMonthMapData = new Map(entry);
console.log('teamMonthMapData',teamMonthMapData);


export default Attendance;