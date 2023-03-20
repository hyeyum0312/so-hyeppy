import { useState } from "react";

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);

    function toggle() {
        console.log('isShowing1',isShowing)
        setIsShowing(!isShowing);
        console.log('isShowing2',isShowing)
    }

    return {
        isShowing,
        toggle
    };
};

export default useModal;