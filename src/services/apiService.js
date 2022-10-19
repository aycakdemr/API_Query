import axios from "axios"

export default class ApiService{
    getApi(){
        return axios.get("https://bible-api.com/john 3:16")
    }
    
} 