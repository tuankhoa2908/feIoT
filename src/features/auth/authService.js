import axios from "axios";
import { baseURL } from "../../utils/baseURL";

// import { config } from "../../utils/axiosconfig";

const login = async (user) => {
    const res = await axios.post(`${baseURL}user/login`, user);
    if (res.data) {
        localStorage.setItem('user', JSON.stringify(res.data))
    }
    return res.data;
};


const authService = {
    login,
};

export default authService;