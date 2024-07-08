import{createBrowserRouter} from 'react-router-dom'
import SignUp from './SignUp'
import SignIn from './SignIn'
import Browse from './Browse'


const Linkingpage=createBrowserRouter([
  {
  path:"/",
  element:<SignUp/>
},
{
  path:"/signIn",
  element:<SignIn/>
},
{
  path:"/browse",
  element:<Browse/>
},
]
)



export  default Linkingpage

