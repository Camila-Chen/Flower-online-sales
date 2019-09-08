import axios from 'axios';

export let authorizeUser;

export async function authorize() {
    try {
        const { data } = await axios({
            url: 'admin/authorize',
        });
        authorizeUser = data.user;
        axios.defaults.headers.common['authorization'] = data.token;
        window.localStorage.setItem('token', data.token);
        return authorizeUser;
    } catch (error) {
        return false;
    }
}

export async function login(param, redirectUrl = '/') {
    const { data } = await axios({
        url: 'public/login',
        data: param,
        method: 'post'
    })
    authorizeUser = data.user;
    axios.defaults.headers.common['authorization'] = data.token;
    window.localStorage.setItem('token', data.token);
    window.location.href = redirectUrl;
}

export function logout() {
    window.localStorage.removeItem('token');
    window.location.href = '/login';
}
