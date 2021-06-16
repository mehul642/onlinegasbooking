import axios from 'axios'
 
const uri='http://localhost:8080/surrendercylinder/insert'


class surrendercylinder{
    addUser(user){
        return axios.post(uri,user);
    }
}
 
export default new surrendercylinder()
