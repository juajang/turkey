import React from "react";
import styled from "styled-components";
import { IoIosMenu } from "react-icons/io";
import { Drawer } from "antd";
import { Link, useLocation } from "react-router-dom";

const HeaderWrapper = styled.header`
  width: 100%;
  position: relative;
  height: 60px;
  font-size: 25px;
  font-weight: 550;
  display: grid;
  place-items: center;
`;

const MenuButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 5px;
  left: 8px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #185dce;
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

  .img-wrapper {
    padding: 1rem 0;
    display: grid;
    place-items: center;
  }

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
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
          <IoIosMenu
            onClick={handleClick}
            size={25}
            color="white"
            style={{
              position: "relative",
              top: 2,
            }}
          />
        </MenuButton>
      </HeaderWrapper>
      <Drawer
        width="210px"
        placement="left"
        onClose={handleClose}
        visible={menuVisible}
        onClick={handleClose}
      >
        <DrawerContents>
          <div className="img-wrapper">
            <img alt="character_sol" src="/images/character_sol.png" />
          </div>
          <div className="category">HOME</div>
          <Link to="/">
            <div className="menu">FEED</div>
          </Link>
          <Link to="/post">
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
