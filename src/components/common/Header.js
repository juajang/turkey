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

const DrawerContents = styled.div`
  font-size: 20px;
  color: #13088f;

  a {
    color: #13088f;
  }

  .category {
    margin-top: 10px;
    font-weight: 650;
  }

  .menu {
    padding: 5px 1em 0 1em;
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
          <div className="category">HOME</div>
          <Link to="/">
            <div className="menu">FEED</div>
          </Link>
          <Link to="/community">
            <div className="menu">COMMUNITY</div>
          </Link>
          <div className="category">MY PAGE</div>
          <Link to="user/wallet">
            <div className="menu">WALLET</div>
          </Link>
          <Link to="user/recommend">
            <div className="menu">RECOMMEND</div>
          </Link>
          <Link to="/pick-me">
            <div className="category">PICK ME</div>
          </Link>
        </DrawerContents>
      </Drawer>
    </>
  );
};

export default Header;
