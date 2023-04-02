import React from "react";
import ReactDOM from "react-dom";
import {BsX} from "react-icons/bs";

import { ReactNode } from 'react';
import ReactDom from 'react-dom';
interface Props {
    children: ReactNode;
}

const Modal = ({ children }: any) => {
    const el = document.getElementById('modal') as HTMLElement;

    return ReactDom.createPortal(children, el);
};

export default Modal;