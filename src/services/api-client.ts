import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd1d5ef4dd64e4f95a79a7eae193622a3'
    }
})