import axios from 'axios'
 
const uri='http://localhost:8080/customer/insertcustomer'

class signup{
    addUser(user){
        return axios.post(uri,user);
    }
}
 
export default new signup()