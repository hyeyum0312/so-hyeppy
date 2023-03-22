import React from "react";
import ReactDOM from "react-dom";
import {BsX} from "react-icons/bs";

// 하고싶은것
// 팝업의 모양이 다 다르면?!

const Modal = ({ isShowing, hide, message }:any) => {
    if (message) {
        return isShowing
            ? ReactDOM.createPortal(
                <React.Fragment>
                    <div className={`absolute top-0 left-0 bg-black opacity-80 w-full h-full text-left p-[30px]`}></div>
                    <div className="absolute top-[50%] left-[50%] w-[90%] h-[90%] bg-white translate-x-[-50%] translate-y-[-50%]">
                        <BsX
                            type="button"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={hide}
                            className="absolute top-[10px] right-[10px]"
                        />
                        <p>저는 {message}입니다.</p>
                    </div>
                </React.Fragment>,
                // document.body
                document.getElementById("modal")!
            )
            : null;
    } else {
        return isShowing
            ? ReactDOM.createPortal(
                <React.Fragment>
                    <div className={`absolute top-0 left-0 bg-black opacity-80 w-full h-full text-left p-[30px]`}></div>
                    <div className="absolute top-[50%] left-[50%] w-[90%] h-[90%] bg-white translate-x-[-50%] translate-y-[-50%]">
                        <BsX
                            type="button"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={hide}
                            className="absolute top-[10px] right-[10px]"
                        />
                        <p>저는 {message}입니다.</p>
                    </div>
                </React.Fragment>,
                // document.body
                document.getElementById("modal")!
            )
            : null;
    }
}
export default Modal;