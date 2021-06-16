import{useHistory} from 'react-router-dom'


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
            pathname:'/login'
        })

    return (
        <></>
    )
}

export default Logout