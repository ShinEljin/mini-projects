import { useEffect, useState } from "react";
import "./bet-table.scss";

function BetTable({ money, setMoney, setCurrentBet }) {
  const [blackBet, setBlackBet] = useState(0);
  const [yellowBet, setYellowBet] = useState(0);
  const [redBet, setRedBet] = useState(0);
  const [orangeBet, setOrangeBet] = useState(0);
  const [greenBet, setGreenBet] = useState(0);
  const [blueBet, setBlueBet] = useState(0);

  useEffect(() => {
    setCurrentBet([blackBet, yellowBet, redBet, orangeBet, greenBet, blueBet]);
  }, [blackBet, yellowBet, redBet, orangeBet, greenBet, blueBet]);

  function deductMoney() {
    setMoney((prevMoney) => {
      return prevMoney - 10;
    });
  }

  function takeBet(e) {
    if (money > 0) {
      if (e.target.id === "color-black" || e.target.id === "p-color-black") {
        deductMoney();
        setBlackBet((prevBet) => {
          return prevBet + 10;
        });
      } else if (
        e.target.id === "color-yellow" ||
        e.target.id === "p-color-yellow"
      ) {
        deductMoney();
        setYellowBet((prevBet) => {
          return prevBet + 10;
        });
      } else if (e.target.id === "color-red" || e.target.id === "p-color-red") {
        deductMoney();
        setRedBet((prevBet) => {
          return prevBet + 10;
        });
      } else if (
        e.target.id === "color-orange" ||
        e.target.id === "p-color-orange"
      ) {
        deductMoney();
        setOrangeBet((prevBet) => {
          return prevBet + 10;
        });
      } else if (
        e.target.id === "color-green" ||
        e.target.id === "p-color-green"
      ) {
        deductMoney();
        setGreenBet((prevBet) => {
          return prevBet + 10;
        });
      } else if (
        e.target.id === "color-blue" ||
        e.target.id === "p-color-blue"
      ) {
        deductMoney();
        setBlueBet((prevBet) => {
          return prevBet + 10;
        });
      }
    }
  }

  function clearBets() {
    setBlackBet(0);
    setYellowBet(0);
    setRedBet(0);
    setOrangeBet(0);
    setGreenBet(0);
    setBlueBet(0);
  }

  return (
    <div className="container">
      <div className="bet-table">
        <div
          className="bet-color color-black"
          id="color-black"
          onClick={takeBet}
        >
          <p id="p-color-black">{blackBet}</p>
        </div>
        <div
          className="bet-color color-yellow"
          id="color-yellow"
          onClick={takeBet}
        >
          <p id="p-color-yellow">{yellowBet}</p>
        </div>
        <div className="bet-color color-red" id="color-red" onClick={takeBet}>
          <p id="p-color-red">{redBet}</p>
        </div>
        <div
          className="bet-color color-orange"
          id="color-orange"
          onClick={takeBet}
        >
          <p id="p-color-orange">{orangeBet}</p>
        </div>
        <div
          className="bet-color color-green"
          id="color-green"
          onClick={takeBet}
        >
          <p id="p-color-green">{greenBet}</p>
        </div>
        <div className="bet-color color-blue" id="color-blue" onClick={takeBet}>
          <p id="p-color-blue">{blueBet}</p>
        </div>
      </div>
      <button className="clr-btn" onClick={clearBets}>
        Clear Bets
      </button>
    </div>
  );
}

export default BetTable;
