import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Login(props) {
    const nav = useNavigate()
    const handlelogin = ()=>{
        console.log(props.datauser);
        let email = document.querySelector('#inputEmail').value
        let password = document.querySelector('#inputPassword').value
        if( !email || !password){
            return alert('dien day du thong tin !! ')
        }
        if( !props.datauser.find(value => value.email == email) || !props.datauser.find(value => value.password == password)){
            return alert('sai !!!')
        }
          props.setDatalogin([{email, password}]) 
          nav('/home')
    }
    return (
       <div className="logins">
         <div className='Login'>
            <h1>Login</h1>
            <div className="mb-3 row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                <input type='text' className="form-control" id="inputEmail" />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword" />
                </div>
            </div>
            <button type="button" onClick={handlelogin} className="btn btn-outline-primary btnlogin">Login</button>
            <Link to={'/signup'}>Chua co tai khoan</Link>
        </div>
       </div>
    )
}

export default Login