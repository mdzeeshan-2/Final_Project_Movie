import axios from "axios";

export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers:{
Accept:"application/json"
    },
    params: {
        api_key: '24ea6cfbe6b3d147590aae25b3b32158'
    }
})