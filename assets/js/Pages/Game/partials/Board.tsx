import { useEffect, useState } from "react";
import Card from "../../../Components/Icons/Card.tsx";
import { CardInfo, GameDifficulty, GameStatus } from "../../../types/types.ts";
import CardInfoService from "../../../Services/CardInfoService.ts";
import useSettingsStore from "../../../Stores/SettingsStore.ts";

type BoardProps = {
  onWin?: () => void;
};

function Board({ onWin }: BoardProps) {
  const settings = useSettingsStore();
  const [cards, setCards] = useState<CardInfo[]>([]);
  const [activeCardIndexes, setActiveCardIndexes] = useState<number[]>([]);
  const [boardSize, setBoardSize] = useState<number>(calcBoardSizeByDifficulty);
  const [cardsPairsRemained, setCardsPairsRemained] = useState<number>(Infinity);

  useEffect(() => {
    if (settings.status !== "start") return;
    settings.setStatus(GameStatus.active);
    const boardSize = calcBoardSizeByDifficulty();
    setBoardSize(() => boardSize);
    const cardsPairs = boardSize ** 2 / 2;
    setCardsPairsRemained(cardsPairs);
    const cardInfoService = new CardInfoService(cardsPairs);
    setCards(cardInfoService.createCards());
    setActiveCardIndexes([]);
  }, [settings]);

  useEffect(() => {
    if (cardsPairsRemained !== 0) return;
    doOnWinLogic();
  }, [cardsPairsRemained]);

  function calcBoardSizeByDifficulty() {
    const difficultyToSize = {
      [GameDifficulty.easy]: 4,
      [GameDifficulty.hard]: 6,
    };
    return difficultyToSize[settings.difficultyLevel];
  }

  function activateCard(clickedCardIndex: number) {
    if (checkCanOpenNewCard(clickedCardIndex)) return;
    if (checkIsNoCardsOpened()) {
      setActiveCardIndexes([clickedCardIndex]);
      return;
    }
    compareActiveCardWithClickedAndHandle(clickedCardIndex);
  }

  function compareActiveCardWithClickedAndHandle(clickedCardIndex: number) {
    setActiveCardIndexes([...activeCardIndexes, clickedCardIndex]);
    setTimeout(() => {
      const activeCardValue = cards[activeCardIndexes[0]].value;
      const clickedCardValue = cards[clickedCardIndex].value;
      if (activeCardValue === clickedCardValue) {
        disableCards(clickedCardIndex);
      }
      deactivateActiveCards();
    }, 1000);
  }

  function disableCards(clickedCardIndex: number) {
    const newCards = cards.slice();
    newCards[activeCardIndexes[0]].disabled = true;
    newCards[clickedCardIndex].disabled = true;
    setCards(newCards);
    setCardsPairsRemained(cardsPairsRemained - 1);
  }

  function deactivateActiveCards() {
    setActiveCardIndexes([]);
  }

  function checkCanOpenNewCard(clickedCardIndex: number) {
    return activeCardIndexes.includes(clickedCardIndex) ||
      activeCardIndexes.length === 2 ||
      cards[clickedCardIndex].disabled;
  }

  function checkIsNoCardsOpened() {
    return activeCardIndexes.length === 0;
  }

  function doOnWinLogic() {
    console.log("you win");
    onWin?.();
  }

  return (
    <div className="relative max-w-screen-sm w-full">
      <div
        className="min-w-none grid w-full aspect-square gap-3"
        style={{
          gridTemplateColumns: `repeat(${boardSize}, 1fr)`,
          gridTemplateRows: `repeat(${boardSize}, 1fr)`,
        }}
      >
        {cards.map((cardInfo, index) => (
          <Card
            children={cardInfo.value}
            key={index}
            active={activeCardIndexes.includes(index)}
            disabled={cardInfo.disabled}
            onClick={() => activateCard(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;
