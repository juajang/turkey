import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import * as S from "./styles";
import { Drawer, Menu } from "antd";
import "antd/dist/antd.css";

const Index = () => {
  const [menuVisible, setMenuVisible] = React.useState(false);

  const handleClick = () => {
    setMenuVisible((prevState) => !prevState);
  };

  const handleClose = () => {
    setMenuVisible(false);
  };

  return (
    <>
      <S.Header>
        <S.MenuButton>
          <GiHamburgerMenu onClick={handleClick} size={50} />
        </S.MenuButton>
        <h1>칠면조</h1>
      </S.Header>
      <Drawer
        title="메뉴"
        placement="left"
        onClose={handleClose}
        visible={menuVisible}
      >
        <Menu onClick={handleClick} mode="inline">
          <Menu.Item key="1"> 메뉴1</Menu.Item>
        </Menu>
      </Drawer>
    </>
  );
};

export default Index;
