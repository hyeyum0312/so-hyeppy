import { useState } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import {useRecoilState} from "recoil";
import {inputValue1State, inputValuesState} from "../Atom/Atoms";

const DatePickerComponent = () => {
    const [input1Value, setInput1Value] = useRecoilState(inputValue1State);
    // const [objValues, setObjValues] = useRecoilState(inputValuesState);
    console.log('달력');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        console.log('startDate',startDate)
        console.log('endDate',endDate)

        let startstart= start.toISOString().split("T")[0]
        let endend= end.toISOString().split("T")[0]
        console.log('startstart',startstart)
        console.log('endend',endend)
        setInput1Value(startstart +'~'+ endend)
        // setObjValues({ ...objValues, value1: startstart +'~'+ endend });
    };
    return (
        <DatePicker
            className="w-full"
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            selectsDisabledDaysInRange
            // inline
        />
    );
}
export default DatePickerComponent;
