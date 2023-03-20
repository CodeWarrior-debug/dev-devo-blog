const {atom, selector} = require("recoil")



    export const nameState = atom({
        key: 'nameState',
        default: 'homebody'
    })
    
export const charState= selector({
        key: 'charState',
        get:({get})=>{
            const name = get(nameState);
            return name.length
        }
    })






