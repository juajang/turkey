import styled from "styled-components";

export const Header = styled.header`
  width: 100vw;
  overflow: hidden;
  height: 100px;
  display: flex;
  align-content: center;
  font-size: 14px;

  h1 {
    display: grid;
    width: 100%;
    place-items: center;
    font-size: 25px;
    font-weight: 550;
  }
`;

export const MenuButton = styled.button`
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;
