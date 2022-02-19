import React, { useState, useEffect } from "react";
import css from "./App.module.css";

const App = () => {
  let intervalID = null;

  let animate = document.getElementById("hero");
  const [initX, setInitX] = useState(0);
  const [initY, setInitY] = useState(0);

  useEffect(() => {
    animate = document.getElementById("hero");
    animate.style.backgroundPositionX = initX + "px";
    animate.style.backgroundPositionY = initY + "px";
  }, [initX,initY])

  const setHero = async (x, y) => {
    await setInitY(y);
    await setInitX(x);
  };

  let xx = initX;
  let yy = initY;

  const handleChooseHero = (e) => {
    clearInterval(intervalID);
    const key=e.target.value;
    switch (key) {
      case '1':
        setHero(0, 0);
        break;
      case '2':
        setHero(-96, 0);
        break;
      case '3':
        setHero(-192, -192);
        break;
      case '4':
        setHero(-290, -192);
        break;
      case '5':
        setHero(-96, -192);
        break;
      case '6':
        setHero(0, -192);
        break;
      case '7':
        setHero(-192, 0);
        break;
      default:
        break;
    }
  };

  const handleFront = (e) => {
    clearInterval(intervalID);
    animate = document.getElementById("hero");
    intervalID = setInterval(() => {
      animate.style.backgroundPositionX = xx + "px";
      animate.style.backgroundPositionY = yy + "px";
      xx -= animate.clientWidth;
      if (xx < initX - 2 * animate.clientWidth) {
        xx = initX;
      } else {
        yy = initY;
      }
    }, 200);
  };

  const handleBack = (e) => {
    clearInterval(intervalID);
    animate = document.getElementById("hero");
    intervalID = setInterval(() => {
      animate.style.backgroundPositionX = xx + "px";
      animate.style.backgroundPositionY = yy + "px";
      xx -= animate.clientWidth;
      yy = initY - 3 * animate.clientHeight - 6;
      if (xx < initX - 2 * animate.clientWidth) {
        xx = initX;
      }
    }, 200);
  };

  const handleLeft = (e) => {
    clearInterval(intervalID);
    animate = document.getElementById("hero");
    intervalID = setInterval(() => {
      animate.style.backgroundPositionX = xx + "px";
      animate.style.backgroundPositionY = yy + "px";
      xx -= animate.clientWidth;
      yy = initY - animate.clientHeight - 4;
      if (xx < initX - 2 * animate.clientWidth) {
        xx = initX;
      }
    }, 200);
  };

  const handleRight = (e) => {
    clearInterval(intervalID);
    animate = document.getElementById("hero");
    intervalID = setInterval(() => {
      animate.style.backgroundPositionX = xx + "px";
      animate.style.backgroundPositionY = yy + "px";
      xx -= animate.clientWidth;
      yy = initY - 2 * animate.clientHeight - 4;
      if (xx < initX - 2 * animate.clientWidth) {
        xx = initX;
      }
    }, 200);
  };

  return (
    <>
      <div className={css.container}>
      <select className={css.heroSelect} name="герой" size="1" value="0" onChange={handleChooseHero}>
          <option value="0">Choose hero</option>
          <option value="1">Luk</option>
          <option value="2">Din-Din</option>
          <option value="3">Vuyko</option>
          <option value="4">Marry Poppins</option>
          <option value="5">Lucy</option>
          <option value="6">Marmaduk</option>
          <option value="7">Alex</option>
        </select>
      <div id="hero" className={css.animate}></div>
        <div className={css.buttonsBlock}>
          <button onClick={handleLeft}>Left</button>
          <button onClick={handleBack}>Back</button>
          <button onClick={handleFront}>Front</button>
          <button onClick={handleRight}>Right</button>
        </div>
      </div>
      <div className={css.image}></div>
    </>
  );
};

export default App;
