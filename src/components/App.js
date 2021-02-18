import React, { Component } from 'react';
import "../styles/App.css";

var thisInterval = 0;
class Timer extends Component {
  constructor(props){
    super(props);
    this.state = { time: 0, x: 0, y: 0};
   
  }
  handleListener = (event) => {
    switch(event.key)
    {
      case "ArrowRight":
        this.setState({x: this.state.x + 5});
        break;
    case "ArrowDown":
        this.setState({y: this.state.y + 5});
        break;
    case "ArrowLeft":
        this.setState({x: this.state.x - 5});
        break;
    case "ArrowUp":
        this.setState({y: this.state.y - 5});
        break;
        default:
        break;
    }
    if(this.state.x === 250 && this.state.y === 250)
    {
      document.removeEventListener("keydown",this.handleListener);
      this.updateTime();
    }
  }
  updateTime = () => {
    if(this.state.time === 0)
    {
      thisInterval = setInterval(() => {this.setState({time: this.state.time + 1})},1000);
    }
    if(this.state.x === 250 && this.state.y === 250)
    {
      clearInterval(thisInterval);
    }
  }
  start = () => {
    if(this.state.time === 0)
    {
      this.updateTime();
      document.addEventListener("keydown",this.handleListener);
    }
  }
  render() {
    return (
      <>
        <div className="ball" style={{left: this.state.x, top: this.state.y}}></div>
        <div className="heading-timer">{this.state.time}</div>
        <div className="start" onClick={this.start}>start</div>
        <div className="hole"></div>
      </>
    );
  }
}

export default Timer;














// import React, { useState,useEffect } from 'react';
// import "../styles/App.css";

// var thisInterval = 0;
// const Timer = () => {
//   const [renderBall,setRenderBall] = useState(false);
//   const [ballPosition, setBallPosition] = useState({
//     left: 0,
//     top: 0,
//   });
//   const [time, setTime] = useState(0);

//   const updateXY = (x1 , y1) => {
//     setBallPosition({
//         left: x1,
//         top: y1,
//     });
// };
// const updateTime = () => {
//   setTime(time + 1);
// };
  
// const handleListener= (event)=>{
//   switch (event.key){
      // case "ArrowRight":
      //     updateXY(ballPosition.left + 5,ballPosition.top);
      //     break;
      // case "ArrowDown":
      //     updateXY(ballPosition.left,ballPosition.top + 5);
      //     break;
      // case "ArrowLeft":
      //     updateXY(ballPosition.left - 5,ballPosition.top);
      //     break;
      // case "ArrowUp":
      //     updateXY(ballPosition.left ,ballPosition.top - 5);
      //     break;
      //     default:
      //     break;
//   }
//   interval();
//   if(ballPosition.left === 250 && ballPosition.top === 250)
//   {
//     console.log(ballPosition.left);
//     document.removeEventListener("keydown", handleListener);
//     setRenderBall(false);
//   }
// };
// useEffect(()=>{
//     document.addEventListener("keydown", handleListener);
//     if(ballPosition.left === 250 && ballPosition.top === 250)
//     {
//       return document.removeEventListener("keydown", handleListener);
//     }
// },[ballPosition]);

// const interval = () => {
//   if(time == 0)
//   {
//     thisInterval = setInterval(updateTime, 1000);
//   }
//   if(ballPosition.left === 250 && ballPosition.top === 250)
//   {
//     clearInterval(thisInterval);
//   }
// }

// const start = () => {
//   setRenderBall(true);
//   setRenderBall(true);
//   console.log(renderBall);
// }

//   return (
//     <>
//       <div className="ball" style={{
//                 left: ballPosition.left + "px",
//                 top: ballPosition.top + "px",
//                 position: "absolute",
//             }}></div>
//       <div className="heading-timer">{time}</div>
//       <button className="start" onClick={start}>start</button>
//       <div className="hole"></div>
//     </>
//   );
// };

// export default Timer;




