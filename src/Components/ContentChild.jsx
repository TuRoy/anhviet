import React from 'react'
import Header from './Header'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function ContentChild(props) {
  const nav = useNavigate()
    // const param = useParams()
    // let check = props.data.find((value, index) => value.title == param.card)
    // console.log(param.card);
    // console.log(props.data[1].title);
    // if(check){
    //   props.setID(check.id)
    // }

    const handleaddcard = ()=>{
      console.log();
      if(props.datalogin.length !== 0 ){
        props.setDataactive([...props.dataactive, props.data[props.id]])
        nav('/home/giohang')
      } else{
        nav('/login')
      }
    }
  return (
    <div className='ContentChild'>
        <Header  datalogin={props.datalogin} datauser={props.datauser} dataactive={props.dataactive} data={props.data}></Header>
        <div className="cards">
         <div className="cardblock">
         <div className="cards__imgs">  <img src={props.data[props.id - 1].image} alt="" className="cards__img" /></div>
            <div className="cards__content">
              <h1>{props.data[props.id -  1].title}</h1>
              <p className="cards__price">{props.data[props.id - 1].price.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'   // With currency, the currency code is also required
              })}</p>
              <p className="cards__category">{props.data[props.id - 1].category}</p>
              <p className="cards__description">{props.data[props.id-1].description}</p>
              <button type="button" onClick={handleaddcard} className="btn btn-danger">Add to Cart</button>
            </div>
         </div>
        </div>
    </div>
  )
}

export default ContentChild