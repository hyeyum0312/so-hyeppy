import React, { useState } from 'react';
import tw from 'tailwind-styled-components';

interface sideNavProps {
    sideNavPropsName: string;
    name: string
}

const CategoryList = ({ post }: { post: sideNavProps }) =>{
    return <SideNavMain className="text-[18px]">{post.sideNavPropsName}</SideNavMain>
}
const CategoryItem = ({ post }: { post: sideNavProps }) =>{
    return <SideNavMainSubItem>{post.name}</SideNavMainSubItem>
}

// const SideNav = ({ post }: { post: sideNavProps }) => {
const SideNav = ({ post }: { post: sideNavProps }) => {
    console.log('post>>',post)
    return (
        <>
            <SideNavWrap className="p-[32px]">
                <CategoryList post={post}></CategoryList>
                <SideNavMainSubList>
                    <CategoryItem post={post}></CategoryItem>
                </SideNavMainSubList>
            </SideNavWrap>
        </>
    );
};

const SideNavWrap = tw.div`
  w-[240px] h-[calc(100vh + 50px)]] bg-[#F8F8F8]
`;
const SideNavMain = tw.div`

`;
const SideNavMainSubList = tw.ul`

`;
const SideNavMainSubItem = tw.li`
    text-[16px]
`;


export default SideNav;


// const SideNav: React.FunctionComponent<sideNavProps> = props => {