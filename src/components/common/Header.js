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

  .ant-divider-horizontal {
    margin: 12px;
  }

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

const DrawerContents = styled.div`
  font-size: 20px;
  font-weight: 550;
  a {
    color: black;
  }
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
        size="default"
        placement="left"
        onClose={handleClose}
        visible={menuVisible}
        onClick={handleClose}
      >
        <DrawerContents>
          <MenuItem> Home </MenuItem>
          <Link to="/">
            <MenuItem style={{ paddingLeft: "1em" }}>FEED</MenuItem>
          </Link>
          <Link to="/community">
            <MenuItem style={{ paddingLeft: "1em" }}>COMMUNITY</MenuItem>
          </Link>
          <Link to="/pick-me">
            <MenuItem>Pick me</MenuItem>
          </Link>
          <Link to="/user">
            <MenuItem>My page</MenuItem>
          </Link>
        </DrawerContents>
      </Drawer>
    </>
  );
};

export default Header;
