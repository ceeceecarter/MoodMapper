import axios from "axios";
const URL = "http://api.forismatic.com/api/1.0/";

export default {
    search: function(query){
        return axios.get(URL + query);
    }
}
