import React from 'react'
import Header from './Components/Header'
import Content from './Components/Content'



function Home(props) {
 
  return (
    <div className='Home'>
        <Header dataactive={props.dataactive}  datalogin={props.datalogin} datauser={props.datauser} data={props.data}></Header>
        <Content setID={props.setID} data={props.data}></Content>
    </div>
  )
}

export default Home