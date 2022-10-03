import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Product from '../../components/Product/'

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`

const SnackItem = () => {
  const [data,setData] = useState()
  useEffect(()=>{
    const fetchData = async ()=>{
      const data = await fetch(`http://localhost:4000/snack`)
      const cards = await data.json()
      setData(cards)
    } 
    fetchData()
  },[])
  return (
    <Card>
      {data && data.map(card=> <Product key={card.id} data={card}/> )}
    </Card>
  )
}

export default SnackItem