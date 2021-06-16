import{useHistory} from 'react-router-dom'
import LoginPage from './login.component';

function Logout()
{
    function preback()
    {
      window.history.forward();
    }
    setTimeout(preback(),0);
  
    window.onunlod=()=>(null);

    sessionStorage.clear()
    
    const history=useHistory()

  
        history.push({
            pathname:'/adminlogin'
        })

    return (
        <></>
    )
}

export default Logout