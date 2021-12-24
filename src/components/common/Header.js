import React from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { Drawer } from "antd";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.header`
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

const MenuButton = styled.button`
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;

const MenuItem = styled.div`
  padding: 0.5em 0;
`;

const Header = () => {
  const [menuVisible, setMenuVisible] = React.useState(false);

  const handleClick = () => {
    setMenuVisible((prevState) => !prevState);
  };

  const handleClose = () => {
    setMenuVisible(false);
  };

  return (
    <>
      <HeaderWrapper>
        <MenuButton>
          <GiHamburgerMenu onClick={handleClick} size={50} />
        </MenuButton>
        <h1>칠면조</h1>
      </HeaderWrapper>
      <Drawer
        title="메뉴"
        size="default"
        placement="left"
        onClose={handleClose}
        visible={menuVisible}
        selectedKeys={["1"]}
        onClick={handleClose}
      >
        <Link to="/">
          <MenuItem key="1"> 메인 </MenuItem>
        </Link>
        <Link to="/timeline">
          <MenuItem key="2"> 타임라인 </MenuItem>
        </Link>
      </Drawer>
    </>
  );
};

export default Header;
