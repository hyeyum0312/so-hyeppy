import { atom } from "recoil"

export const user = atom({
    key: "user",
    default: {
        id: "Admin",
        pwd: "Admin",
    },
});

export const counting = atom({
    key: "counting",
    default: 0,

});