import React from 'react'
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className='Header'>
      <p className='HeaderLogo'>Shop</p>
   {!props.datalogin[0] ? <div className='btnheader'> 
    <Link to={'/login'}>dang nhap</Link>
    <span> --- </span>
    <Link to={'/signup'}>dang ky</Link>
   </div> : <div className='soluong'>
    <span>so luong {props.dataactive.length}</span>
   <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    {props.datalogin[0].email}
  </button>
  <ul className="dropdown-menu dropdown-menu-dark">
    <Link to={'/login'}><li className="dropdown-item active" >dang xuat</li></Link>
    
  </ul>
</div> </div>}
     
    </div>
  )
}

export default Header