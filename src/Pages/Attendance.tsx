import React, { useState } from 'react';
import SideNav from "./Layout/SideNav";

interface sideNavProps {
    sideNavPropsName: string;
    name: string,
}

const Attendance: React.FC = () => {
const [category, setCategory] = React.useState<sideNavProps>({sideNavPropsName : '근무/휴가', name : 'Attendance'});
  return (
    <div className="w-full h-[100vh] bg-yellow-50 flex">
        <SideNav post ={category}></SideNav>
      <div className="text-[300px] text-center">🐻‍️</div>
      <div className="text-[90px] text-center">반가워</div>
    </div>
  );
};


export default Attendance;