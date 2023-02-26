import React, {useEffect, useState} from 'react';
import tw from 'tailwind-styled-components';
import {log} from "util";

interface sideNavProps {
    sideNavPropsName: string;
    name: string;
}

let click = () => {
    return alert('헬로');
};

const CategoryList = ({ post }: { post: sideNavProps }) =>{
    let headTitle = sideNavMap.get(post.name);
    if (headTitle) {
        let sideNameDataMain = headTitle?.main // Object is possibly 'null' 에러가 계속 떠서 옵셔널체이닝 사용하여 처리.
        console.log('sideNameDataMain',sideNameDataMain)
        return <SideNavMain>{sideNameDataMain}</SideNavMain>
    }
    return <></>
}


const CategoryItem = ({ post }: { post: sideNavProps }) =>{
    let headTitle = sideNavMap.get(post.name);
    if (headTitle) {
        let sideNameData = headTitle?.data
        console.log('sideNameData',sideNameData)
        // 0:{name: '근무/휴가'}
        // 1:{name: '근무/휴가'}
        return (
            sideNameData.map((data,key)=>{
                console.log('data.name>>',data.name)
                return <SideNavMainSubItem key={key} className="text-[18px]">{data.name}</SideNavMainSubItem>
            })
        )
    } else {
        return <></>
    }
}

const SideNav = ({ post }: { post: sideNavProps }) => {
    return (
        <>
            <SideNavWrap className="p-[32px]">
                <CategoryList post={post}></CategoryList>
                <SideNavMainSubList>
                    {
                        sideNavMap.get(post.name)&&
                        sideNavMap.get(post.name)?.data &&
                        (sideNavMap.get(post.name)?.data.map((row,index)=>{
                            return (
                                <SideNavMainSubItem key={index} className="text-[18px]">{row.name}</SideNavMainSubItem>
                            )
                        }))

                    }
                </SideNavMainSubList>
            </SideNavWrap>
        </>
    );
};

const sideNavArr = {
    TodoList : {
        id: 1,
        main: 'To-Do-List',
        data: [{name:'오늘 할 일'},{name:'지난 할 일'}]
        // data: ['오늘 할 일','지난 할 일']
    },
    Attendance: {
        id: 2,
        main: '근무/휴가',
        data: [{name:'근무/휴가'}]
    }
}

const entry = Object.entries(sideNavArr);
const sideNavMap = new Map(entry);
console.log('sideNavMap',sideNavMap);

const SideNavWrap = tw.div`
  w-[240px] h-[calc(100vh + 50px)]] bg-[#F8F8F8]
`;
const SideNavMain = tw.div`
    text-[20px] font-bold
`;
const SideNavMainSubList = tw.ul`

`;
const SideNavMainSubItem = tw.li`
    text-[16px]
`;


export default SideNav;


// const SideNav: React.FunctionComponent<sideNavProps> = props => {