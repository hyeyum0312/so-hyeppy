import React, {useEffect, useState} from 'react';
// import ReactDOM from "react-dom";
// import {HiOutlineXMark} from "react-icons/hi2";
// import useModal from "../hooks/useModal";
// import {DatePickerComponent} from "../Components/datepicker"
//
// const Modal = ({ isShowing, hide, message, modalForm }:any) => {
//     if (modalForm == "full") {
//         return isShowing
//             ? ReactDOM.createPortal(
//                 <React.Fragment>
//                     <div className={`absolute top-0 left-0 bg-black opacity-80 w-full h-full text-left p-[30px]`}></div>
//                     <div className="absolute top-[50%] left-[50%] w-[100%] h-[100%] bg-white translate-x-[-50%] translate-y-[-50%]">
//                         <HiOutlineXMark
//                             type="button"
//                             data-dismiss="modal"
//                             aria-label="Close"
//                             onClick={hide}
//                             className="absolute top-[10px] right-[10px] w-[30px]"
//                             size="20"
//                         />
//                         <button className="bg-[#086bde] text-white text-[14px] h-[36px] py-[5px] px-[16px] rounded-[4px]">내 근태 현황 / 신청</button>
//                         <button>등록</button>
//                     </div>
//                 </React.Fragment>,
//                 // document.body
//                 document.getElementById("modal")!
//             )
//             : null;
//     } else {
//         return isShowing
//             ? ReactDOM.createPortal(
//                 <React.Fragment>
//                     <div className={`absolute top-0 left-0 bg-black opacity-80 w-full h-full text-left p-[30px]`}></div>
//                     <div className="absolute top-[50%] left-[50%] w-[470px] h-[348px] rounded-[10px] bg-white translate-x-[-50%] translate-y-[-50%]">
//                         <HiOutlineXMark
//                             type="button"
//                             data-dismiss="modal"
//                             aria-label="Close"
//                             onClick={hide}
//                             className="absolute top-[20px] right-[20px]"
//                             size="25"
//                         />
//                         <div>
//                             <div className="border-b border-[#dcdcdd] border-solid p-[20px]">
//                                 <div className="text-[20px] leading-[29px] font-bold">근태 신청 - 조혜연</div>
//                             </div>
//                             <div className="py-[30px] px-[20px]">
//                                 <div className="w-full h-[70px] text-[14px] mb-[20px]">
//                                     <div className="mb-5">날짜</div>
//                                     {/*<div className="w-full h-[40px] rounded-[5px] border  border-solid border-[#dcdcdd] p-[12px] outline-none focus:border-[#dcdcdd] active:border-[#dcdcdd]" onClick={ckck}></div>*/}
//                                     <input type="date" placeholder="YYYY-MM-DD ~ YYYY-MM-DD" className="w-full h-[40px] rounded-[5px] border  border-solid border-[#dcdcdd] p-[12px] outline-none focus:border-[#dcdcdd] active:border-[#dcdcdd]"></input>
//                                 </div>
//                                 <div className="w-full h-[70px] text-[14px]">
//                                     <div className="mb-5">날짜</div>
//                                     <select className="w-full h-[40px] rounded-[5px] border  border-solid border-[#dcdcdd] p-[12px] outline-none focus:border-[#dcdcdd] active:border-[#dcdcdd]">
//                                         <option></option>
//                                         <option value="VACATION:AM">반차(오전)</option>
//                                         <option value="VACATION:PM">반차(오후)</option>
//                                         <option value="VACATION:FULL">연차</option>
//                                         <option value="VACATION:ALTER:AM">대체휴가(오전)</option>
//                                         <option value="VACATION:ALTER:PM">대체휴가(오후)</option>
//                                         <option value="VACATION:ALTER:FULL">대체휴가</option>
//                                         <option value="VACATION:ALTER:QUARTER">대체휴가(2시간)</option>
//                                         <option value="VACATION:ALTER:TIME">대체휴가(시간)</option>
//                                         <option value="VACATION:COMP:AM">보상휴가(오전)</option>
//                                         <option value="VACATION:COMP:PM">보상휴가(오후)</option>
//                                         <option value="VACATION:COMP:FULL">보상휴가</option>
//                                         <option value="VACATION:COMP:QUARTER">보상휴가(2시간)</option>
//                                         <option value="VACATION:COMP:TIME">보상휴가(시간)</option>
//                                         <option value="WORK:EXTENDED:TIME">연장근로</option>
//                                         <option value="WORK:WEEKEND:AM">휴일근로(오전)</option>
//                                         <option value="WORK:WEEKEND:PM">휴일근로(오후)</option>
//                                         <option value="WORK:WEEKEND:FULL">휴일근로</option>
//                                         <option value="WORK:WEEKEND:TIME">휴일근로(시간)</option>
//                                         <option value="OUT:WORK:AM">외근(오전)</option>
//                                         <option value="OUT:WORK:PM">외근(오후)</option>
//                                         <option value="OUT:WORK:FULL">외근(종일)</option>
//                                         <option value="OUT:WORK:TIME">외근(시간)</option>
//                                         <option value="OUT:AM">외근-간주(오전)</option>
//                                         <option value="OUT:PM">외근-간주(오후)</option>
//                                         <option value="OUT:FULL">외근-간주(종일)</option>
//                                         <option value="HOME">재택근무</option>
//                                         <option value="HEALTH:HOSPITAL:AM">병가(오전)</option>
//                                         <option value="HEALTH:HOSPITAL:PM">병가(오후)</option>
//                                         <option value="HEALTH:HOSPITAL">병가</option>
//                                         <option value="HEALTH:W:AM">보건휴가(오전)</option>
//                                         <option value="HEALTH:W:PM">보건휴가(오후)</option>
//                                         <option value="HEALTH:W">보건휴가</option>
//                                         <option value="SP:MARRIAGE:OWN">본인 결혼 휴가</option>
//                                         <option value="SP:MARRIAGE:CHILD">자녀 결혼 휴가</option>
//                                         <option value="SP:MARRIAGE:SIBLING">형제 결혼 휴가</option>
//                                         <option value="SP:BIRTH:SPOUSE">출산휴가(배우자)</option>
//                                         <option value="SP:BIRTH:BABYBIRTH">출산휴가(본인)</option>
//                                         <option value="SP:BIRTHDAY:PARENTS">부모 칠순 휴가</option>
//                                         <option value="SP:BIRTHDAY:CHILD">자녀 돌잔치</option>
//                                         <option value="SP:DEATH:SPOUSE">배우자 사망 휴가</option>
//                                         <option value="SP:DEATH:PARENT">본인 또는 배우자 부모 사망 휴가</option>
//                                         <option value="SP:DEATH:GRAND">본인 또는 배우자 조부모 사망휴가</option>
//                                         <option value="SP:DEATH:CHILD">자녀 또는 자녀 배우자 사망 휴가</option>
//                                         <option value="SP:VACATION:UNPAID">무급휴가</option>
//                                         <option value="SP:ADD:TYPE04">경조사휴가4</option>
//                                         <option value="SP:ADD:TYPE05">경조사휴가5</option>
//                                         <option value="SP:ADD:TYPE06">경조사휴가6</option>
//                                         <option value="SP:ADD:TYPE07">경조사휴가7</option>
//                                         <option value="PUBLIC:RESERVE:AM">[공가] 예비군 공가(오전)</option>
//                                         <option value="PUBLIC:RESERVE:PM">[공가] 예비군 공가(오후)</option>
//                                         <option value="PUBLIC:RESERVE">[공가] 예비군 공가</option>
//                                         <option value="PUBLIC:CIVIL">[공가] 민방위 공가</option>
//                                         <option value="PUBLIC:HEALTHSCREEN:AM">건강검진(오전)</option>
//                                         <option value="PUBLIC:HEALTHSCREEN:PM">건강검진(오후)</option>
//                                         <option value="PUBLIC:HEALTHSCREEN">건강검진</option>
//                                     </select>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </React.Fragment>,
//                 // document.body
//                 document.getElementById("modal")!
//             )
//             : null;
//     }
// }
// export default Modal;