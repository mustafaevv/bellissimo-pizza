import React from 'react';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import {faTrashAlt} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-radius: 16px;
  padding: 20px 25px;
  margin-top: 50px;
`

const Img = styled.img`
  width: 300px;
  height: 250px;
`;

const Name = styled.h6`
  font-size: 24px;
  font-weight: bold;
  flex-grow: 1;
  text-align: left;
`

const Controller = styled.div`
  width: 160px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f2f2f2;
  padding: 10px 15px;
`

const Btn = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(0, 0, 0);
  cursor: pointer;
  background: none;
`

const Amount = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #000;
`

const Price = styled.p`
  flex-grow: 1;
  text-align: center;
  font-weight: bold;
  color: #000;
  font-size: 22px;
`

const Trash = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  cursor: pointer;
  background: none;
`

const data = {
  id: 13,
  image: "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Ffc1cd67e-1b88-4c03-86ed-11f43a784fbe.jpg&w=384&q=75",
  name: "Салат Греческий в упаковке",
  price: 20000,
  category: "salad"
};
const CartItem = () => {
  return (
    <Block>
      <Img src={data.image} alt={data.name} />
      <Name>{data.name}</Name>
      <Controller>
        <Btn><FontAwesomeIcon icon={faMinus}/></Btn>
        <Amount>522</Amount>
        <Btn><FontAwesomeIcon icon={faPlus}/></Btn>
      </Controller>
      <Price>{data.price} сум</Price>
      <Trash> <FontAwesomeIcon icon={faTrashAlt}/> </Trash>
    </Block>
  )
}

export default CartItem