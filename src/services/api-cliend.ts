import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'aff93c2f16744fed8b7f8f632d7f9d6b'
    }
})