import { create } from "zustand";
import { GameDifficulty, GameSettings, GameStatus } from "../types/types.ts";

const useSettingsStore = create<GameSettings>()(
  (set) => ({
    difficultyLevel: GameDifficulty.easy,
    status: GameStatus.start,
    setDifficultyLevel: (newDifficultyLevel) => set({ difficultyLevel: newDifficultyLevel }),
    setStatus: (newStatus) => set({ status: newStatus }),
  }),
);

export default useSettingsStore;
