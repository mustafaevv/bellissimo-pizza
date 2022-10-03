import styled from "styled-components";

export const NavLinks = styled.nav`
  background: rgb(190, 45, 43);
  box-shadow: rgb(234 46 46 / 20%) 0px 10px 15px;
  border-radius: 16px;
  margin-top: -15px;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 20px 8px;
`;

export const NavLink = styled.a`
  text-decoration: none;
  font-size: 20px;
  padding: 16px 25px;
  transition: 0.3s background, 0.3s color;
  border-radius: 8px;
  color: #fff;

  &:hover{
    background: #fff;
    color: #000;
    border-radius: 8px;
  }
`;