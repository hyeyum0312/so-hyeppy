import { createPortal } from "react-dom";
import { BsX } from "react-icons/bs";
import React, {useEffect, useState} from 'react';


function PopupDom(props) {
    console.log('props',props)
    const [isShowing, setIsShowing] = useState(false);
    const { message,toggle } = props;

    return createPortal(
        <div
            style={{
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: '100%',
                backgroundColor:'#121212D',
            }}
        >
            <div
                style={{
                    width: "100%",
                    height: '100%',
                    textAlign: "center",
                    fontSize: 20,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex:2
                }}
            >
                {
                    message == 'signUp' &&
                    <div className={`relative bg-white w-[420px] h-[300px] rounded-[10px] text-left p-[30px]`}>
                        <BsX className="absolute top-[10px] right-[10px]" onClick={ () => toggle == false }></BsX>
                        <div>안녕</div>
                        <button onClick={()=>setIsShowing(true)}>근태신청</button>
                    </div>
                }
                {
                    message == 'AddAttendanceMain' &&
                    <div className={`relative bg-white w-[420px] h-[300px] rounded-[10px] text-left p-[30px]`}>
                        <BsX className="absolute top-[10px] right-[10px]" onClick={ () => toggle == false }></BsX>
                        <h3 className="m-[5px]">근태신청</h3>
                        <p className="text-[14px] mb-[30px]">이름: 조혜연</p>
                        <div className="mb-[10px]">
                            <p className="text-[12px] mb-[5px] font-[#a8a8a8]">날짜:</p>
                            <select className="border text-[14px] w-full h-[40px] bg-[#fafafa]">
                                <option>달력이나와야함</option>
                            </select>
                        </div>
                        <div>
                            <p className="text-[12px] mb-[5px] font-[#a8a8a8]">종류:</p>
                            <select className="border text-[14px] w-full h-[40px] bg-[#fafafa]">
                                <option>종류 선택</option>
                            </select>
                        </div>
                    </div>
                }
            </div>
            <div className={`w-full h-full bg-[#12121D] opacity-40 absolute top-0 left-0`}></div>
        </div>,
        document.getElementById("modal")
    );
}

export default PopupDom;