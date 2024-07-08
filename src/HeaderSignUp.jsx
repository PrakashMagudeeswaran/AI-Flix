  import {Logo1} from '../utilities/Links'
  import './SignUp.css'
  import {Link} from 'react-router-dom'
  const HeaderSignUp = () => {
    return (
      <>
      <h1 className="background"></h1>
      <div className="Header">
        <img className="Logo1"src={Logo1} alt="Logo1"/>
        <div className="Buttons1"> 
       <Link className="SignIn" to="/signIn">Sign In</Link>
       </div>
      </div>
     
      </>
    )
  }

  export default HeaderSignUp
