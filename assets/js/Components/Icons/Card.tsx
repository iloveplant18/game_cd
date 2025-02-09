import { MouseEvent, MouseEventHandler, ReactNode } from "react";

type CardProps = {
  disabled?: boolean;
  children: ReactNode;
  onClick?: MouseEventHandler;
  active: boolean;
};

function Card({ children, disabled, onClick, active }: CardProps) {
  return (
    <div
      onMouseMove={startRotate}
      onMouseLeave={endRotate}
      className={`relative w-full h-full before:absolute before:-z-10 before:w-full before:h-full before:bg-gradient-to-br before:from-primary before:to-accent before:blur-lg select-none ${
        disabled && "grayscale scale-90"
      }`}
    >
      <div
        className={`card w-full h-full relative transition-all`}
        onClick={onClick}
      >
        <article
          className={`${active && "scale-105"} ${
            !active && !disabled && "[rotate:y_180deg]"
          } flex items-center justify-center text-2xl text-primary-content shadow-xl bg-primary rounded-lg w-full h-full hover:cursor-pointer transition-all [backface-visibility:hidden]`}
        >
          {children}
        </article>
        <div
          className={`${active ? "[rotate:y_180deg]" : "bg-accent"} ${
            disabled && "[rotate:y_180deg]"
          } absolute inset-0 rounded-lg [backface-visibility:hidden] transition-all`}
        >
        </div>
      </div>
    </div>
  );

  function startRotate(event: MouseEvent) {
    if (disabled) return;
    const card = findCardElement(event);
    const halfHeight = card.offsetHeight / 2;
    const halfWidth = card.offsetWidth / 2;
    const smallingCoefficient = 0.30;
    card.style.transform = `rotateX(${(event.nativeEvent.offsetY - halfHeight) * smallingCoefficient}deg)
  rotateY(${-((event.nativeEvent.offsetX - halfWidth) *
      smallingCoefficient)}deg) scale(1.05)`;
  }

  function endRotate(event: MouseEvent) {
    if (disabled) return;
    const card = findCardElement(event);
    card.style.transform = "";
  }

  function findCardElement(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    return target.querySelector(".card") as HTMLElement;
  }
}

export default Card;
