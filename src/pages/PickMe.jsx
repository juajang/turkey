import React, { useState, useEffect, useMemo, useCallback } from "react";
import Tiles from "./Tiles";

const PickMe = () => {
  const [view, setView] = useState(0);
  const [curTitle, setCurTitle] = useState(0);
  const [curNo, setCurNo] = useState(0);
  const [curName, setCurName] = useState("");
  const [curCtx1, setCurCtx1] = useState("");
  const [curCtx2, setCurCtx2] = useState("");
  const [curV1, setCurV1] = useState("");
  const [curV2, setCurV2] = useState("");
  const [curV3, setCurV3] = useState("");
  const [curV4, setCurV4] = useState("");
  const [curFontColor, setCurFontColor] = useState("");

  const [curModel, setCurModel] = useState({});

  const [tcArr1, setTcArr1] = useState([
    {
      // key:1,
      name: "영재",
      current: "1,700",
      total: "1,710",
      no: 1,
      v1: "100,000",
      v2: "10",
      v3: "-99,990",
      v4: "-99.99%",
      color: "red",
      title: 1,
      ctx1: "도움이 절실합니다ㅠㅠ",
      ctx2: "부모님 몰래 투자한거거든요...ㅠ",
      sogam: '"긴급 재난금 개이득...!"',
    },
    {
      // key:1,
      name: "난진",
      current: "27,450",
      total: "397,530",
      no: 2,
      v1: "300,000",
      v2: "370,080",
      v3: "70,080",
      v4: "23.36",
      color: "mediumblue",
      title: 1,
      ctx1: "안깝칠게요...",
      ctx2: "도움좀...",
      sogam: '"2등 아깝..."',
    },
    {
      // key:1,
      name: "도일",
      current: "3,536,450",
      total: "4,464,410",
      no: 3,
      v1: "550,000",
      v2: "927,960",
      v3: "377,960",
      v4: "68.72%",
      color: "mediumblue",
      title: 1,
      ctx1: '"OOO OOO"',
      ctx2: '"OOO OO OOOOO"',
      sogam: '"야호!!"',
    },
  ]);

  const [tcArr2, setTcArr2] = useState([
    {
      // key:1,
      name: "도일",
      current: "3,536,450",
      total: "4,464,410",
      no: 1,
      v1: "550,000",
      v2: "927,960",
      v3: "377,960",
      v4: "68.72%",
      color: "mediumblue",
      title: 2,
      ctx1: "정말 '이지'하군요?",
      ctx2: "ㅋ",
      sogam: '"이지하군요?"',
    },
    {
      // key:1,
      name: "난진",
      current: "27,450",
      total: "397,530",
      no: 2,
      v1: "300,000",
      v2: "370,080",
      v3: "70,080",
      v4: "23.36",
      color: "mediumblue",
      title: 2,
      ctx1: '"OOO OOO"',
      ctx2: '"OOO OO OOOOO"',
      sogam: '"아... 2등ㅠ"',
    },
    {
      // key:1,
      name: "영재",
      current: "1,700",
      total: "1,710",
      no: 3,
      v1: "100,000",
      v2: "10",
      v3: "-99,990",
      v4: "-99.99%",
      color: "red",
      title: 2,
      ctx1: '"OOO OOO"',
      ctx2: '"OOO OO OOOOO"',
      sogam: '"3등 감사합니다."',
    },
  ]);

  const [tcArr3, setTcArr3] = useState([
    {
      // key:1,
      name: "도일",
      current: "3,536,450",
      total: "4,464,410",
      no: 1,
      v1: "550,000",
      v2: "927,960",
      v3: "377,960",
      v4: "68.72%",
      color: "mediumblue",
      title: 3,
      ctx1: '"OOO OOO"',
      ctx2: '"OOO OO OOOOO"',
      sogam: '"OOOO OOO"',
    },
    {
      // key:1,
      name: "영재",
      current: "1,700",
      total: "1,710",
      no: 2,
      v1: "100,000",
      v2: "10",
      v3: "-99,990",
      v4: "-99.99%",
      color: "red",
      title: 3,
      ctx1: '"OOO OOO"',
      ctx2: '"OOO OO OOOOO"',
      sogam: '"OOOO OOO"',
    },
    {
      // key:1,
      name: "난진",
      current: "27,450",
      total: "397,530",
      no: 3,
      v1: "300,000",
      v2: "370,080",
      v3: "70,080",
      v4: "23.36",
      color: "mediumblue",
      title: 3,
      ctx1: '"OOO OOO"',
      ctx2: '"OOO OO OOOOO"',
      sogam: '"OOOO OOO"',
    },
  ]);

  const imgReturn = (no) => {
    let img;
    switch (no) {
      case 1:
        img = <img src="/images/no1.png" style={{ zIndex: 1 }} />;
        break;
      case 2:
        img = <img src="/images/no2.png" style={{ zIndex: 1 }} />;
        break;
      case 3:
        img = <img src="/images/no3.png" style={{ zIndex: 1 }} />;
        break;
      default:
        break;
    }
    return img;
  };

  const TileContainer = (props) => {
    return (
      <div style={{ width: "300px", padding: "5px" }}>
        <div style={{ height: "40px", display: "flex" }}>
          {imgReturn(props.no)}
          <div
            style={{
              alignSelf: "center",
              fontWeight: "600",
              marginLeft: "5px",
              color: "gray",
            }}
          >
            {props.sogam}
          </div>
        </div>
        <Tiles {...props} />
      </div>
    );
  };

  const DetailView = (props) => {
    let src1 = "/images/target" + curTitle + ".png";
    return (
      <div style={{ padding: "10px 10px 20px 10px" }}>
        <div
          style={{ padding: "10px" }}
          onClick={() => {
            setView(0);
          }}
        >
          <div>
            <img src={src1} />
          </div>
          <div
            style={{ height: "40px", display: "flex", marginBottom: "15px" }}
          >
            {imgReturn(curNo)}
            <div
              style={{
                alignSelf: "center",
                marginLeft: "-15px",
                fontWeight: "600",
                fontSize: "smaller",
                backgroundColor: "#8FD6E9",
                borderRadius: "10px",
                padding: "5px",
                width: "180px",
                paddingLeft: "20px",
              }}
            >
              <div>닉네임 : {curName}</div>
              <div>
                수익률 : <span style={{ color: curFontColor }}>{curV4}</span>
              </div>
            </div>
          </div>
          <div
            style={{
              padding: "15px",
              fontWeight: "700",
              fontSize: "smaller",
              marginBottom: "20px",
              color: "gray",
            }}
          >
            <div style={{ marginBottom: "5px" }}>"{curCtx1}</div>
            <div>{curCtx2}"</div>
          </div>
          <div style={{ marginBottom: "5px" }}>
            <Tiles {...curModel} />
          </div>
          <div
            style={{
              display: "flex",
              overflow: "scroll",
              marginBottom: "10px",
            }}
          >
            <img
              src="/images/coin1.png"
              style={{
                width: "250px",
                boxShadow: "1px 1px 1px 1px grey",
                border: "1px solid gray",
                borderRadius: "10px",
                marginRight: "5px",
                marginBottom: "5px",
              }}
            />
            <img
              src="/images/coin2.png"
              style={{
                width: "250px",
                boxShadow: "1px 1px 1px 1px grey",
                border: "1px solid gray",
                borderRadius: "10px",
                marginRight: "5px",
                marginBottom: "5px",
              }}
            />
            <img
              src="/images/coin3.png"
              style={{
                width: "250px",
                boxShadow: "1px 1px 1px 1px grey",
                border: "1px solid gray",
                borderRadius: "10px",
                marginRight: "5px",
                marginBottom: "5px",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignSelf: "center",
              marginLeft: "7px",
              fontWeight: "600",
              fontSize: "smaller",
              marginBottom: "10px",
            }}
          >
            <div>
              <img src="/images/heart.png" />
              <span style={{ marginLeft: "3px" }}>29999</span>
            </div>
            <div>댓글 2908개</div>
          </div>
          <div>
            <div style={{ display: "flex", padding: "5px" }}>
              <div
                style={{
                  width: "100px",
                  fontSize: "smaller",
                  fontWeight: "600",
                }}
              >
                난진
              </div>
              <span style={{ fontSize: "small", fontWeight: "600" }}>
                칠면조에게 '밥'을 사다니 '아찔'
              </span>
            </div>
            <div style={{ display: "flex", padding: "5px" }}>
              <div
                style={{
                  width: "100px",
                  fontSize: "smaller",
                  fontWeight: "600",
                }}
              >
                영
              </div>
              <span style={{ fontSize: "small", fontWeight: "600" }}>
                대박이다 밥 또 사주실거죠?
              </span>
            </div>
            <div style={{ display: "flex", padding: "5px" }}>
              <div
                style={{
                  width: "100px",
                  fontSize: "smaller",
                  fontWeight: "600",
                }}
              >
                캡틴도일
              </div>
              <span style={{ fontSize: "small", fontWeight: "600" }}>
                넹...
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const tileClicked = (s) => {
    setView(1);
    setCurTitle(s.title);
    setCurNo(s.no);
    setCurName(s.name);
    setCurV4(s.v4);
    setCurFontColor(s.color);
    setCurCtx1(s.ctx1);
    setCurCtx2(s.ctx2);
    setCurModel(s);
  };

  return (
    <div style={{ padding: 10 }}>
      {view === 0 && (
        <React.Fragment>
          <div>
            <img src="/images/target1.png" />
          </div>
          <div
            style={{
              display: "-webkit-box",
              overflow: "scroll",
              marginBottom: "25px",
            }}
          >
            {tcArr1.map((tmp) => (
              <div onClick={() => tileClicked(tmp)}>
                <TileContainer {...tmp} />
              </div>
            ))}
          </div>
          <div>
            <img src="/images/target2.png" />
          </div>
          <div
            style={{
              display: "-webkit-box",
              overflow: "scroll",
              marginBottom: "25px",
            }}
          >
            {tcArr2.map((tmp) => (
              <div onClick={() => tileClicked(tmp)}>
                <TileContainer {...tmp} />
              </div>
            ))}
          </div>
          <div>
            <img src="/images/target3.png" />
          </div>
          <div
            style={{
              display: "-webkit-box",
              overflow: "scroll",
              marginBottom: "25px",
            }}
          >
            {tcArr3.map((tmp) => (
              <div onClick={() => tileClicked(tmp)}>
                <TileContainer {...tmp} />
              </div>
            ))}
          </div>
        </React.Fragment>
      )}
      {view === 1 && (
        <React.Fragment>
          <DetailView />
        </React.Fragment>
      )}
    </div>
  );
};

export default PickMe;
