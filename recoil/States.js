const {atom, selector} = require("recoil")

    export const userName = atom({
        key: 'userName',
        default: ''
    })
    
export const isLoggedIn= selector({
        key: 'isLoggedIn',
        get:({get})=>{
            const name = get(userName);
            return name.length > 0
        }
    })






