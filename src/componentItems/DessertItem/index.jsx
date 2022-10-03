import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Product from '../../components/Product'

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`

const DessertItem = () => {
  const [data,setData] = useState()
  useEffect(()=>{
    const fetchData = async () => {
      const data = await fetch('http://localhost:4000/dessert')
      const cards = await data.json()
      setData(cards)
    }
    fetchData()
  },[])
  return (
    <Card>
      {data && data.map((card)=> <Product data={card} key={card.id}/>)}
    </Card>
  )
}

export default DessertItem