import { useState } from "react";
import "./color-block.scss";
import { Howl, Howler } from "howler";
import sound2 from "../../assets/mixkit-retro-game-notification-212.wav";

function ColorBlocks({ passingSetBlockColors }) {
  const [colorVar1, setColorVar1] = useState({});
  const [colorVar2, setColorVar2] = useState({});
  const [colorVar3, setColorVar3] = useState({});
  let colorsPicked = [];
  const colors = ["black", "yellow", "red", "orange", "green", "blue"];

  function pickRandomColor() {
    const randomNumber = Math.floor(Math.random() * 6);
    return colors[randomNumber];
  }

  function setTheBlockColors() {
    Howler.volume(0.025);
    colorsPicked = [];
    let newColor = pickRandomColor();
    setColorVar1({ backgroundColor: newColor });
    colorsPicked.push(newColor);
    newColor = pickRandomColor();
    setColorVar2({ backgroundColor: newColor });
    colorsPicked.push(newColor);
    newColor = pickRandomColor();
    setColorVar3({ backgroundColor: newColor });
    colorsPicked.push(newColor);

    var sound = new Howl({
      src: [sound2],
    });

    sound.play();
  }

  function loopColors() {
    var i = 1;
    var msDelay = 200;

    function myLoop() {
      setTimeout(function () {
        setTheBlockColors();
        i++;
        if (i < 15) {
          myLoop();
        }
        if (i >= 15 && i < 30) {
          msDelay = 100;
          myLoop();
        }
        if (i >= 30 && i < 60) {
          msDelay = 50;
          myLoop();
        }
        if (i === 60) {
          for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 6; j++) {
              if (colorsPicked[i] === colors[j]) {
                colorsPicked[i] = j;
              }
            }
          }
          passingSetBlockColors(colorsPicked);
        }
      }, msDelay);
    }
    myLoop();
  }

  return (
    <div className="container">
      <div className="color-block-container">
        <div className="color-block cb1" style={colorVar1}></div>
        <div className="color-block cb2" style={colorVar2}></div>
        <div className="color-block cb3" style={colorVar3}></div>
      </div>
      <button className="start-btn" onClick={loopColors}>
        Start
      </button>
    </div>
  );
}

export default ColorBlocks;
