import axios from 'axios'
 
const uri='http://localhost:8080/cylinder/insert'




class insertcylinder{
    addUser(user){
        return axios.post(uri,user);
    }
}
 
export default new insertcylinder()
