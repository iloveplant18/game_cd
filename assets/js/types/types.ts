export type IconProps = {
  width?: number;
  height?: number;
};

export type GameSettings = {
  difficultyLevel: GameDifficulty;
  status: GameStatus;
  setDifficultyLevel: (newDifficultyLevel: GameDifficulty) => void;
  setStatus: (newStatus: GameStatus) => void;
};

export const enum GameDifficulty {
  easy = "easy",
  hard = "hard",
}

export const enum GameStatus {
  start = "start",
  active = "active",
}

export type CardInfo = {
  disabled: boolean;
  value: number;
};
