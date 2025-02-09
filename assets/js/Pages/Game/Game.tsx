import Settings from "./partials/Settings.tsx";
import Board from "./partials/Board.tsx";
import { useEffect, useState } from "react";
import Modal from "../../Components/Modal.tsx";
import confetti from "canvas-confetti";

function Game() {
  const [isWinModalShown, setIsWinModalShown] = useState<boolean>(false);

  const modalWindowId = "win-modal";

  useEffect(() => {
    if (isWinModalShown !== true) return;
    confetti({
      particleCount: 150,
      spread: 170,
      origin: {
        y: 0.6,
      },
    });
  }, [isWinModalShown]);

  function handleOnWin() {
    setIsWinModalShown(true);
  }

  return (
    <>
      <section className="container w-full min-h-screen py-10 flex flex-col justify-center items-center gap-5 xl:flex-row">
        <Board onWin={handleOnWin} />
        <Settings />
      </section>
      <Modal isModalShown={isWinModalShown} id={modalWindowId}>
        <p>Congrats, you win!</p>
      </Modal>
    </>
  );
}

export default Game;
