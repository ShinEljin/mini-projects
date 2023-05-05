import { useEffect, useState } from "react";
import "./App.scss";
import BetSelector from "./components/bet-selector/bet-selector";
import BetTable from "./components/bet-table/bet-table";
import ColorBlocks from "./components/color-blocks/color-blocks";

function App() {
  const [money, setMoney] = useState(100);
  const [currentBet, setCurrentBet] = useState([]);
  const [roundWinMoney, setRoundWinMoney] = useState(0);
  let blockColors = [];

  function passingSetBlockColors(colorsPicked) {
    setRoundWinMoney(0);
    blockColors = colorsPicked;

    console.log(blockColors);

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 6; j++) {
        if (currentBet[j] > 0) {
          if (j === blockColors[i]) {
            setRoundWinMoney((prevRoundWinMoney) => {
              return prevRoundWinMoney + currentBet[j];
            });
            setMoney((prevMoney) => {
              return prevMoney + currentBet[j];
            });
          }
        }
      }
    }
  }

  return (
    <div className="App">
      <h1>Money: {money}</h1>
      <p>Won this round: {roundWinMoney}</p>
      <BetSelector />
      <ColorBlocks passingSetBlockColors={passingSetBlockColors} />
      <BetTable
        setMoney={setMoney}
        money={money}
        setCurrentBet={setCurrentBet}
      />
    </div>
  );
}

export default App;
