import axios from 'axios'
 
const uri='http://localhost:8080/gasbooking/insertbooking'



class insertbooking{
    addUser(user){
        return axios.post(uri,user);
    }
}
 
export default new insertbooking()