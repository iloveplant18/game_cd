import { CardInfo } from "../types/types.ts";

class CardInfoService {
  cardsPairs: number;

  constructor(cardsPairs: number) {
    this.cardsPairs = cardsPairs;
  }

  createCards() {
    const cardsValues = this.#createCardsValues();
    return cardsValues.map((value): CardInfo => ({
      value: value,
      disabled: false,
    }));
  }

  #createCardsValues() {
    const cardsValues: number[] = [];
    for (let i = 0; i < this.cardsPairs; i++) {
      cardsValues.push(i + 1, i + 1);
    }
    return this.#shuffle(cardsValues);
  }

  #shuffle(array: number[]) {
    for (let i = 0; i < array.length - 2; i++) {
      const distanceToEnd = array.length - i - 1;
      const randomElementIndex = i + Math.ceil(Math.random() * distanceToEnd);
      const oldValue = array[i];
      array[i] = array[randomElementIndex];
      array[randomElementIndex] = oldValue;
    }
    return array;
  }
}

export default CardInfoService;
