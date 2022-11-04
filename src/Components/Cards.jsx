import React from 'react'
import Header from './Header'

function Cards(props) {
  return (
    <div>
        <Header dataactive={props.dataactive}  datalogin={props.datalogin} datauser={props.datauser} data={props.data}></Header>
    </div>
  )
}

export default Cards