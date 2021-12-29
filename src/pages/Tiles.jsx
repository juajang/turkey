import React from "react";

const Tiles = (props) => {
  return (
      <div style={{backgroundColor:"mintcream", padding:"7px", borderRadius:"10px", boxShadow:"2px 2px 2px"}}>
          <div style={{display:"flex", justifyContent:"space-between"}}>
            <h1 style={{padding:"3px", marginBottom:"15px", fontWeight:"900", fontSize:"large"}}>{props.name} 보유자산</h1>
            <h1 style={{padding:"3px", marginBottom:"15px", fontSize:"smaller", color:"gray"}}>KRW 환산 추정값</h1>
          </div>
          <div style={{display:"flex", justifyContent:"space-between"}}>
            <div style={{width:"50%"}}>
                <h1 style={{padding:"3px", marginBottom:"5px", fontWeight:"600"}}>보유KRW</h1>
                <h1 style={{padding:"3px", marginBottom:"15px", fontWeight:"600", fontSize:"x-large"}}>{props.current}</h1>
                <div style={{display:"flex", justifyContent:"space-between", padding:"10px"}}>
                    <h1 style={{fontSize:"smaller"}}>총매수</h1>
                    <h1 style={{fontWeight:"400"}}>{props.v1}</h1>
                </div>
                <div style={{display:"flex", justifyContent:"space-between", padding:"10px"}}>
                    <h1 style={{fontSize:"smaller"}}>총평가</h1>
                    <h1 style={{fontWeight:"400"}}>{props.v2}</h1>
                </div>
            </div>
            <div style={{width:"50%"}}>
                <h1 style={{padding:"3px", marginBottom:"5px", fontWeight:"600"}}>총 보유자산</h1>
                <h1 style={{padding:"3px", marginBottom:"15px", fontWeight:"600", fontSize:"x-large"}}>{props.total}</h1>
                <div style={{display:"flex", justifyContent:"space-between", padding:"10px"}}>
                    <h1 style={{fontSize:"smaller"}}>평가손익</h1>
                    <h1 style={{fontWeight:"400", color:props.color}}>{props.v3}</h1>
                </div>
                <div style={{display:"flex", justifyContent:"space-between", padding:"10px"}}>
                    <h1 style={{fontSize:"smaller"}}>수익률</h1>
                    <h1 style={{fontWeight:"400", color:props.color}}>{props.v4}</h1>
                </div>
            </div>
          </div>
      </div>

    )
};

export default Tiles;