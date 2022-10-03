import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import links from '../../router';
import { useLocation } from 'react-router-dom';


const Block = styled.div`
  margin-top: 50px;
  background: #fff;
  max-width: 360px;
  border-radius: 16px;
  padding-bottom: 20px;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 16px;
  margin-bottom: 10px;
`;
const Name = styled.h5`
  font-weight:600;
  font-size: 22px;
  padding: 0 16px;
  margin-bottom: 5px;
`;
const Desc = styled.p`
  font-size: 14px;
  line-height: 14px;
  color: rgb(128, 128, 128);
  padding: 0px 16px;
  margin-bottom: 10px;
`;
const Price = styled.p`
  font-weight: bold;
  font-size: 24px;
  padding: 0px 16px;
  color: rgb(50, 50, 50);
`;
const Button = styled.button`
  width: 90%;
  border: none;
  background: rgb(218, 255, 229);
  margin-right: 15px;
  margin-left: 15px;
  line-height: 50px;
  border-radius: 16px;
  margin-top: 20px;
  color: rgb(0, 171, 73);
  font-size: 18px;
  cursor: pointer;

  & svg{
    margin-right: 10px;
  }
`;

const Product = ({data}) => {
  const { pathname } = useLocation();
  const { title } = links.find(title=> title.link === pathname)
  console.log(title);
  return (
    <Block>
      <h4>{title}</h4>
      <Img src={data.image} alt={data.name} />
      <Name>{data.name}</Name>
      <Desc>{data.description}</Desc>
      <Price>{data.price} сум</Price>
      <Button> <FontAwesomeIcon icon={faShoppingCart}/> Заказать</Button>
    </Block>
  )
}

export default Product