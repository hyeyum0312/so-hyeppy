import React, {useEffect, useState} from 'react';
import SideNav from "../Layout/SideNav";
import {useRecoilValue} from "recoil";
import {inputValuesState, urlParams} from "../../Atom/Atoms";
import tw from "tailwind-styled-components";
import useModal from "../../hooks/useModal";
import Mywork from "../../Modal/mywork";
import Modal from "../../Components/Modal";

interface sideNavProps {
    sideNavPropsName: string;
    name: string;
}

const Current: React.FC = () => {
    const { isShowing, toggle } = useModal();
    const [message, setMessage] = useState();
    const [modalForm, setModalForm] = useState();
    const popupObjValue = useRecoilValue(inputValuesState);

    // const [isShowing, setIsShowing] = useState(false);
    const params = useRecoilValue(urlParams);
    const [category, setCategory] = React.useState<sideNavProps>({sideNavPropsName : '근무/휴가', name : 'Attendance'});

    // 근태현황
    const openModal = (info:any,modalForm:any) => {
        console.log('modalForm >> ',modalForm)
        console.log('info >> ',info)
        setMessage(info);
        setModalForm(modalForm);
        toggle();
    };

    return (
        <>
            <div className="w-full overflow-auto">
                <p className="bg-white text-[24px] h-[60px]">근태</p>
                <div className="flex justify-end ">
                    <button className="bg-[#086bde] text-white text-[14px] h-[36px] py-[5px] px-[16px] rounded-[4px]" onClick={() => openModal("hello","small")}>내 근태 현황 / 신청</button>
                </div>
                <div className="p-3.5">
                    <div className="text-[15px] mb-5">연차 사용일: {popupObjValue.value1}</div>
                    <div className="text-[15px]">연차 타입: {popupObjValue.value2}</div>
                </div>
                {
                    isShowing?
                        <Modal isShowing={isShowing} hide={toggle} message={message} modalForm={modalForm} >
                            <Mywork hide={toggle}/>
                        </Modal>
                    : ''
                }
            </div>
        </>
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


export default Current;