import axios from "axios";
import { baseURL } from "../../utils/baseURL";
// import { config } from "../../utils/axiosconfig";

const getDatas = async () => {
    const response = await axios.get(`${baseURL}data/get-data`);

    return response.data;
};

const recordDetail = async (id) => {
    console.log(id);
    const response = await axios.get(`${baseURL}data/get-record/${id}`)
    return response.data;
}

const recordService = {
    getDatas,
    recordDetail,
}

export default recordService;