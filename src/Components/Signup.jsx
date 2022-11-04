import React from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";




function Signup(props) {
    const [searchparam, setSearchparam] = useSearchParams()
    const nav = useNavigate()
    const handleSignUp =()=>{
        let email  =document.querySelector('#inputEmail').value
        let phone  =document.querySelector('#inputPhone').value
        let username  =document.querySelector('#inputUsername').value
        let password  =document.querySelector('#inputPassword').value
        if( !email || !phone || !username || !password){return alert('dien du thong tin !!!')}
        else{
            props.setDatauser([...props.datauser, {email,phone,username,password}])
            props.setDatalogin([{email,password}])
            nav(`/home`)
        }
    }
  return (
    <div className="logins">
    <div className='Login'>
       <h1>SignUp</h1>
       <div className="mb-3 row">
           <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
           <div className="col-sm-10">
           <input type='text' className="form-control" id="inputEmail" />
           </div>
       </div>
       <div className="mb-3 row">
           <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Phone</label>
           <div className="col-sm-10">
               <input type="number" className="form-control" id="inputPhone" />
           </div>
       </div>
       <div className="mb-3 row">
           <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Username</label>
           <div className="col-sm-10">
           <input type='text' className="form-control" id="inputUsername" />
           </div>
       </div>
       <div className="mb-3 row">
           <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
           <div className="col-sm-10">
               <input type="password" className="form-control" id="inputPassword" />
           </div>
       </div>
       <button type="button" onClick={handleSignUp} className="btn btn-outline-primary btnlogin">SignUp</button>
       <Link to={'/login'}>Da co tai khoan</Link>
   </div>
  </div>
  )
}

export default Signup