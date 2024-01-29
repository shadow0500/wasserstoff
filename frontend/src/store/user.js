import {atom, selector} from 'recoil';

export const userState = atom({
    key: 'userState',
    default: {
        username: '',
        email : '',
        password : '',
        media : '',
        name : ''
    },
});