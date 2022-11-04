import React from 'react'
import { Card } from 'antd';
import { useNavigate } from "react-router-dom";
const { Meta } = Card;


function Content(props) {
  const nav = useNavigate()
  const handlecard = (key) => {
    let index = key.target.id
    props.setID(index)
    let name = props.data[index].title
    nav(`/home/${name}`)
  }
  return (
    <div className='Content'>
      {props.data.map(value => {
        return (
          <div key={value.id}>
            <Card
              hoverable
              style={{
                margin: 20,
                width: 240,
                height: 380
              }}
              onClick={handlecard}
              cover={<img alt="example" className='imgcard' id={value.id} src={value.image} />}
            >
              <Meta title={value.title} description={value.price.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'   // With currency, the currency code is also required
              })} />
            </Card>
          </div>
        )
      })}
    </div>
  )
}

export default Content