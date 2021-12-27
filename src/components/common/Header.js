import React from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { Drawer } from "antd";
import { Link, useLocation } from "react-router-dom";

const HeaderWrapper = styled.header`
  width: 100%;
  position: relative;
  height: 80px;
  font-size: 25px;
  font-weight: 550;
  display: grid;
  place-items: center;
`;

const MenuButton = styled.button`
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 5px;
  left: 5px;
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
  const { pathname } = useLocation();
  const title = pathname.split("/")[1]?.toUpperCase().replace("-", " ");

  const handleClick = () => {
    setMenuVisible((prevState) => !prevState);
  };

  const handleClose = () => {
    setMenuVisible(false);
  };

  return (
    <>
      <HeaderWrapper>
        <h1>{title || "FEED"}</h1>
        <MenuButton>
          <GiHamburgerMenu onClick={handleClick} size={50} />
        </MenuButton>
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
          <Link to="wallet">
            <div className="menu">WALLET</div>
          </Link>
          <Link to="recommend">
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
